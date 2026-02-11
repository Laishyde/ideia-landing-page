"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const bottomAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6 }
  };

  const differentials = [
    {
      title: "Monitoramento Inteligente em Tempo Real",
      description: "Utilizamos tecnologia avançada e análise inteligente para identificar eventos e situações com precisão.",
      icon: (
        <svg className="w-8 h-8 text-[#99e39e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Sistema Rápido, Seguro e Confiável",
      description: "Plataforma estável e otimizada para acesso rápido, com alta disponibilidade e segurança de dados.",
      icon: (
        <svg className="w-8 h-8 text-[#99e39e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Tecnologia de Alta Performance",
      description: "Soluções modernas em nuvem e IA para garantir eficiência, escalabilidade e controle total.",
      icon: (
        <svg className="w-8 h-8 text-[#99e39e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (

<section className="relative -mt-28 md:-mt-28 z-50" id="work">

      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="col-span-12 text-center"
          >
           {/* Parágrafo acima do título */}
  <p className="text-[32px] text-white font-medium mb-4">
    Porque contratar a <span className="text-[#99e39e]">SpectraAI</span>
  </p>

  {/* Título */}
  <h2 className="text-[48px] text-white font-bold mb-6">
    NOSSOS DIFERENCIAIS
  </h2>

  {/* Parágrafo explicativo */}
  <p className="text-[20px] text-white leading-[1.8] mb-12">
   Desenvolvemos soluções inteligentes para monitorar, integrar e proteger equipamentos com alto padrão tecnológico.
  </p>
{/* Grid de Cards alinhados */}
<div className="grid md:grid-cols-3 gap-10 mt-11 text-left">
  {differentials.map((item, index) => (
    <div 
      key={index} 
      className="bg-black rounded-2xl p-10 flex flex-col items-start relative overflow-hidden group border border-[#99e39e]/10 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      {/* Ícone */}
      <div className="border border-[#99e39e]/40 p-5 rounded-lg mb-6 group-hover:bg-[#99e39e]/10 transition-colors">
        {item.icon}
      </div>

      {/* Título */}
      <h3 className="text-[#99e39e] text-[24px] md:text-[28px] font-bold mb-4">
        {item.title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-400 text-[18px] md:text-[20px] leading-relaxed">
        {item.description}
      </p>
      
      {/* Detalhe de brilho inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#99e39e] to-transparent opacity-40 group-hover:opacity-100 transition-opacity"></div>
    </div>
  ))}
</div>


            {/* Botão WhatsApp abaixo dos cards */}
            <div className="flex justify-center mt-16">
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
             Fale no WhatsApp agora

            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
              <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-ping top-2 left-2"></div>
              <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-ping delay-150 top-3 right-4"></div>
              <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-ping delay-300 bottom-2 left-4"></div>
            </div>
          </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;