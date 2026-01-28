"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Platform = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

// MUDA APENAS ESTA PARTE DO useEffect:

useEffect(() => {
  const loop = () => {
    if (containerRef.current) {
    const element = containerRef.current as HTMLElement;
    const width = element.scrollWidth / 2;
      setTranslateX((prev) => {
        if (prev <= -width) {
          return 0;
        }
        return prev - 2; // ← MUDOU DE 0.5 PARA 2 = 4X MAIS RÁPIDO
      });
    }
  };

  const interval = setInterval(loop, 20); // ← 20ms = 50fps MAIS FLUIDO
  return () => clearInterval(interval);
}, []);

  return (
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-1">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* CARD PRINCIPAL */}
        <div className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 mb-20 md:mb-32">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white sm:text-40 text-30 mb-6">
              ATENDEMOS TODAS AS MARCAS E MODELOS<span className="text-primary"></span>
            </h2>
            <p className="text-muted text-opacity-60 text-[23px]">
              Solicite um orçamento com a Ibtech Manaus
              <br />Selecione a opção abaixo para a qual você quer ser atendido e lhe entregaremos um atendimento personalizado.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
             <Link 
  href="#"
  className="group relative overflow-hidden bg-gradient-to-r from-[#99e39e] via-emerald-400 to-green-500 hover:from-emerald-400 hover:to-[#99e39e] text-black font-bold text-lg px-12 py-5 rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 border-2 border-white/20 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 inline-flex items-center justify-center h-14"
>
  <span className="relative z-10 whitespace-nowrap">
    Solicitar Orçamento Agora
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
    <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-ping top-2 left-2"></div>
    <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-ping delay-150 top-3 right-4"></div>
    <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-ping delay-300 bottom-2 left-4"></div>
  </div>
</Link>

            </div>
          </div>
        </div>

        {/* CARROSSEL INFINITO PERFEITO */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-16">
            <motion.h3 
              className="text-white text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#99e39e] to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Conheça nossa Loja
            </motion.h3>
            <motion.p 
              className="text-muted text-xl md:text-2xl max-w-2xl mx-auto text-opacity-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conheça a nossa loja e descubra por que somos referência quando o assunto é qualidade e atendimento.
            </motion.p>
          </div>

          {/* CONTAINER DO CARROSSEL - LOOP INFINITO */}
          <div className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl bg-black/20 backdrop-blur-xl p-8 md:p-12 border border-white/10">
            <motion.div 
              className="flex gap-6"
              ref={containerRef}
              animate={{ x: translateX }}
              transition={{
                type: "tween",
                duration: 0.03,
                repeat: Infinity
              }}
              style={{ width: "max-content" }}
            >
              {/* LOOP 1 - TODAS IMAGENS */}
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/1.jpg"
                  alt="Loja Ibtech 1"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                  priority
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/2.jpg"
                  alt="Loja Ibtech 2"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                  priority
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/3.jpg"
                  alt="Loja Ibtech 3"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/4.jpg"
                  alt="Loja Ibtech 4"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/5.jpg"
                  alt="Loja Ibtech 5"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>

              {/* LOOP 2 - EXATAMENTE IGUAL AO 1 (INFINITO PERFEITO) */}
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/1.jpg"
                  alt="Loja Ibtech 1"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/2.jpg"
                  alt="Loja Ibtech 2"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/3.jpg"
                  alt="Loja Ibtech 3"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/4.jpg"
                  alt="Loja Ibtech 4"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-opacity-50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src="https://ibtechmanaus.com/wp-content/uploads/2025/11/5.jpg"
                  alt="Loja Ibtech 5"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-[#99e39e] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Platform;

