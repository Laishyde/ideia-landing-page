"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getImagePrefix } from "@/utils/utils";
    import { Icon } from "@iconify/react/dist/iconify.js";
    import Link from "next/link";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [currentReview, setCurrentReview] = useState(0);
    const [isBuying, setIsBuyingOpen] = useState(false);


  const reviews = [
    {
      name: "Lucas Ads",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVpgOBu0H5MWSvoFXeUkQe3URIce7svzOyfafhflBBpBD-lGrXZ=w40-h40-c-rp-mo-br100",
      date: "2 meses atrás",
      text: "Simplesmente a melhor assistência técnica de Manaus! Levei meu celular que estava travando muito e a equipe da IBTEC Manaus resolveu tudo com uma rapidez e profissionalismo incrível.",
      stars: 5
    },
    {
      name: "Rodrigo Arthur", 
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUUAl7Kws89uINYDD4hA0MTda0E66tEMFaCl5zqP1J3VCYzY6KA=w40-h40-c-rp-mo-br100",
      date: "2 meses atrás",
      text: "Atendimento de grande qualidade e confiança, obrigado pela manutenção do meu celular.",
      stars: 5
    },
    {
      name: "Joaquim Silva",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW0E97F72hEst6YbptDDddvY9AQNEWdWlo2bI-HCvjjz_rel20I=w40-h40-c-rp-mo-br100",
      date: "2 meses atrás",
      text: "Excelente atendimento! A equipe da Ibtech foi muito atenciosa e profissional. Resolveram meu problema com rapidez e transparência.",
      stars: 5
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="relative md:pt-40 pt-9" id="development">
     {/* SEÇÃO DE AVALIAÇÕES GOOGLE - LOOP INFINITO SUAVE */}
<div className="relative z-30 -mt-20 md:-mt-32 bg-gradient-to-b from-black/90 via-black/50 to-transparent py-16 md:py-24">
  <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
    {/* Header das avaliações */}
    <div className="text-center mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <strong className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#99e39e] to-green-400 bg-clip-text text-transparent block mb-6">
          EXCELENTE
        </strong>
        <div className="flex justify-center items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-7 h-7 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <p className="text-xl md:text-2xl text-white/80">
          Com base em <strong className="text-[#99e39e] text-2xl md:text-3xl">444 avaliações</strong>
        </p>
        <div className="flex justify-center mt-4">
          <img 
            src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" 
            width="140" 
            height="35" 
            alt="Google Reviews"
            className="brightness-0 invert"
          />
        </div>
      </motion.div>
    </div>

    {/* CARROSSEL INFINITO SUAVE - IGUAL IMAGENS DA LOJA */}
    <div className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl bg-black/20 backdrop-blur-xl p-8 md:p-12 border border-white/10">
      <motion.div 
        className="flex gap-6"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 25,  // LENTO suave
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: "max-content" }}
      >
        {/* LOOP 1 - TODAS AVALIAÇÕES */}
        {reviews.map((review, index) => (
          <motion.div
            key={`review1-${index}`}
            className="flex-shrink-0 w-80 md:w-[500px] h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-white/30 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <div className="w-full h-full bg-black/70 backdrop-blur-xl p-6 md:p-8 border border-white/20 rounded-2xl flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                  alt="Google" 
                  className="w-6 h-6 mt-1 flex-shrink-0 brightness-0 invert"
                />
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full ring-2 ring-white/40 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-white truncate">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-4 flex-1">
                "{review.text}"
              </p>
            </div>
          </motion.div>
        ))}

        {/* LOOP 2 - DUPLICADO PARA INFINITO */}
        {reviews.map((review, index) => (
          <motion.div
            key={`review2-${index}`}
            className="flex-shrink-0 w-80 md:w-[500px] h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 hover:border-emerald-400/50 border-4 border-transparent hover:border-white/30 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <div className="w-full h-full bg-black/70 backdrop-blur-xl p-6 md:p-8 border border-white/20 rounded-2xl flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                  alt="Google" 
                  className="w-6 h-6 mt-1 flex-shrink-0 brightness-0 invert"
                />
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full ring-2 ring-white/40 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-white truncate">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-4 flex-1">
                "{review.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* INDICADORES DECORATIVOS */}
    <div className="flex justify-center gap-2 mt-8">
      <div className="w-3 h-3 bg-[#99e39e] rounded-full animate-pulse"></div>
      <div className="w-3 h-3 bg-white/40 rounded-full"></div>
      <div className="w-3 h-3 bg-white/40 rounded-full"></div>
    </div>
  </div>
</div>


     {/* TELEFONE/TIMELINE SEM ESPAÇO BRANCO */}
<div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4 pt-20 md:pt-32 pb-0">
  <div className="container mx-auto lg:max-w-screen-xl px-4">
    {/* CARD PRINCIPAL - MELHORADO PARA MOBILE */}
    <div className="bg-section bg-opacity-10 px-4 py-12 md:px-16 md:py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-start md:items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 mb-12 md:mb-20 lg:mb-32">
      <div className="lg:col-span-8 col-span-12 order-1">
        <h2 className="text-white sm:text-40 text-28 md:text-30 mb-6 leading-tight">
         <span className="text-primary">Nossa Missão </span>
        </h2>
        <div className="text-muted text-opacity-60 text-lg md:text-[23px] leading-relaxed space-y-4">
          <p>
            Levamos mais comodidade até você com nosso serviço de retirada e entrega por motoboy! Basta agendar com antecedência para que possamos montar a rota e garantir um atendimento rápido, seguro e sem complicações.
          </p>
          <p>
            Na Ibtech, estamos unidos pelo propósito de trabalhar com transparência, respeito, integridade, criatividade e empatia. Pensamos diariamente na missão que move nossos ideais de "manter pessoas e empresas conectadas".
          </p>
          <p>
            Entendemos que nos dias de hoje, não estar conectado é ao mesmo tempo, estar por fora do momento.
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
    
    {/* IMAGEM ABAIXO DO TEXTO - SEM ESPAÇO BRANCO */}
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-0"
    >
      {/* Mobile - Imagem menor e centralizada SEM margem */}
      <div className="md:hidden block mx-auto mb-0 max-w-sm">
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-0">
          <Image 
            src="/images/timeline/timeline.webp"
            alt="Nossa história e missão"
            width={400}
            height={320}
            className="w-full h-auto block object-cover"
          />
        </div>
      </div>
      
      {/* Desktop - Imagem grande original SEM margem */}
      <div className="md:block hidden relative mx-auto w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl mb-0">
        <Image 
          src="/images/timeline/timeline.webp"
          alt="Nossa história e missão"
          width={1220}
          height={1000}
          className="w-full h-auto block"
        />
      </div>
    </motion.div>
  </div>
</div>

    </section>
  );
};

export default TimeLine;
