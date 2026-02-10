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
        {/* CARD PRINCIPAL - MELHORADO PARA MOBILE */}
    <div className="bg-section bg-opacity-10 px-4 py-12 md:px-16 md:py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-start md:items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 mb-12 md:mb-20 lg:mb-32">
      <div className="lg:col-span-8 col-span-12 order-1">
        <h2 className="text-white sm:text-40 text-28 md:text-30 mb-6 leading-tight">
         <span className="text-primary">  ATENDIMENTO EM TODO O BRASIL</span>
        </h2>
        <div className="text-muted text-opacity-60 text-lg md:text-[23px] leading-relaxed space-y-4">
            <p className="text-muted text-opacity-60 text-[23px]">
    Oferecemos soluções completas em software de videomonitoramento inteligente para todo o Brasil.
    <br />
    Solicite um orçamento e receba um atendimento especializado, remoto e personalizado, de acordo com a sua necessidade.
  </p>
        </div>
      </div>
      
      <div className="lg:col-span-4 col-span-12 order-2 lg:order-3">
        <div className="flex lg:justify-end lg:mt-0 mt-8 justify-center">
          <Link 
            href="#"
            className="
              group relative overflow-hidden
              bg-gradient-to-r from-[#99e39e] via-emerald-400 to-green-500
              hover:from-emerald-400 hover:to-[#99e39e]
              text-black font-bold
              text-base sm:text-lg
              px-6 sm:px-12
              py-3 sm:py-5
              rounded-3xl
              shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50
              border-2 border-white/20 backdrop-blur-sm
              transform hover:scale-105 hover:-translate-y-1
              transition-all duration-500
              inline-flex items-center justify-center
              min-h-[56px]
              text-center
              w-full sm:w-auto max-w-sm
            "
          >
            <span className="relative z-10 whitespace-normal leading-tight">
        Falar com um especialista
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
        

          <div className="flex justify-center gap-2 mt-8">
            
          </div>
        </div>

        
     
    </section>
  );
};

export default Platform;

