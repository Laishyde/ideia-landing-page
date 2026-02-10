import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className=" bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-md px-4">

        {/* SETA GRANDE + CHAMADA */}
        <div className="flex flex-col items-center mb-10 animate-pulse">
          <Icon
            icon="mdi:arrow-down-bold"
            width="56"
            height="56"
            className="text-primary animate-bounce"
          />
          <span className="text-primary font-bold text-lg mt-2 tracking-wide">
            Solicite sua proposta agora
          </span>
        </div>

        {/* FORMULÁRIO CENTRAL */}
    <div className="bg-section bg-opacity-10 border-2 border-section border-opacity-20 rounded-3xl px-6 md:px-12 py-12 mb-20 max-w-xl mx-auto">

          <h3 className="text-white text-2xl font-bold mb-4 text-center">
            Solicite uma proposta personalizada
          </h3>

          <p className="text-muted text-opacity-70 text-sm mb-8 text-center max-w-xl mx-auto">
            Preencha os dados abaixo e receba um atendimento especializado em
            videomonitoramento inteligente para sua operação.
          </p>

          <form className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="CNPJ"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
            />

            <input
              type="email"
              placeholder="E-mail corporativo"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
            />

            <input
              type="tel"
              placeholder="Celular / WhatsApp"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
            />

            <input
              type="number"
              placeholder="Quantidade de veículos na frota"
              required
              min="1"
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#99e39e] to-emerald-500 hover:from-emerald-400 hover:to-[#99e39e] text-black font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 uppercase text-sm tracking-wide"
            >
              Solicitar proposta agora
            </button>

            <p className="text-xs text-muted text-opacity-60 text-center mt-4">
              Atendimento em todo o Brasil • Soluções sob medida • Suporte especializado
            </p>
          </form>
        </div>

        {/* LOGO + REDES SOCIAIS */}
        <div className="flex flex-col items-center gap-6 pb-10">
          <Logo />

          <div className="flex gap-4">
            <Link href="#" className="group p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300">
              <Icon icon="fa6-brands:facebook-f" width="20" height="20" className="text-white group-hover:text-black" />
            </Link>
            <Link href="#" className="group p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300">
              <Icon icon="fa6-brands:instagram" width="20" height="20" className="text-white group-hover:text-black" />
            </Link>
            <Link href="#" className="group p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300">
              <Icon icon="fa6-brands:x-twitter" width="20" height="20" className="text-white group-hover:text-black" />
            </Link>
          </div>

          <p className="text-muted text-opacity-70 text-base font-medium text-center mt-4">
            Segunda a Sexta: 09:00h às 18:00h
            <br />
            Sábado: 09:00h às 16:00h
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2026 SpectraAI - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
