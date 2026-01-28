import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
          
          {/* LOGO + REDES SOCIAIS + HORÁRIOS - VERTICAL ALINHADO */}
          <div className="flex flex-col items-center lg:items-center gap-6">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* REDES SOCIAIS NA MESMA LINHA DO LOGO */}
            <div className="flex gap-4 pt-2">
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

            {/* HORÁRIOS */}
        <p className="text-muted text-opacity-70 **text-base** font-medium text-center lg:text-left mt-4">
  Segunda a Sexta: 09:00h às 18:00h
  <br />
  Sábado: 09:00h às 16:00h
</p>

          </div>

          {/* FORMULÁRIO GENÉRICO "Qual sua dúvida?" */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-xl font-bold mb-4 text-center lg:text-left">Qual sua dúvida?</h3>
            <p className="text-muted text-opacity-70 text-sm mb-6 text-center lg:text-left">
              Fale conosco e receba atendimento personalizado
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Qual sua dúvida? Conte-nos o que precisa..."
                className="bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 focus:border-primary focus:outline-none transition-all duration-300 w-full resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#99e39e] to-emerald-500 hover:from-emerald-400 hover:to-[#99e39e] text-black font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 uppercase text-sm tracking-wide"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2026 Ibtech Manaus - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
