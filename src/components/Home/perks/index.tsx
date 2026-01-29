import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Perks = () => {
  return (
    <section className="pb-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* MAPA */}
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl shadow-2xl border-4 border-white/20 bg-transparent overflow-hidden mx-auto max-w-6xl mb-20 md:mb-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.96590164992!2d-59.9671039!3d-3.04466205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1769636936661!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ibtech Manaus"
          />
        </div>
   {/* CARD PRINCIPAL - MELHORADO PARA MOBILE */}
    <div className="bg-section bg-opacity-10 px-4 py-12 md:px-16 md:py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-start md:items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 mb-12 md:mb-20 lg:mb-32">
      <div className="lg:col-span-8 col-span-12 order-1">
        <h2 className="text-white sm:text-40 text-28 md:text-30 mb-6 leading-tight">
         <span className="text-primary">  ATENDEMOS TODAS AS MARCAS E MODELO</span>
        </h2>
        <div className="text-muted text-opacity-60 text-lg md:text-[23px] leading-relaxed space-y-4">
            <p className="text-muted text-opacity-60 text-[23px]">
              Solicite um orçamento com a Ibtech Manaus
              <br />Selecione a opção abaixo para a qual você quer ser atendido e lhe entregaremos um atendimento personalizado.
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
      </div>
      
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60" />
    </section>
  );
};

export default Perks;
