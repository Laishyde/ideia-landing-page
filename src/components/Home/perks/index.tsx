import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Perks = () => {
  return (
   <section className="pb-28 relative">
  <div className="container mx-auto lg:max-w-screen-xl px-4">

    {/* TEXTO */}
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Onde nos encontrar
      </h2>
      <p className="text-white/80 text-lg leading-relaxed">
        Estamos localizados em Minas Gerais, prontos para atender você com
        qualidade, tecnologia e suporte especializado.
      </p>
    </div>

    {/* MAPA */}
    <div className="w-full h-[360px] md:h-[420px] lg:h-[480px] rounded-3xl shadow-2xl border-4 border-white/20 bg-transparent overflow-hidden mx-auto max-w-5xl mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1204596.546563241!2d-45.904456!3d-18.512178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef3a5c3f4b2a5%3A0x8b4c1b07b94a1b6c!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1769636936661"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Minas Gerais"
      />
    </div>

  </div>

  {/* EFEITO DE FUNDO */}
  <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60" />
</section>

  );
};

export default Perks;
