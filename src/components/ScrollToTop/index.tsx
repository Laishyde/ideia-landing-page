'use client'
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [shake, setShake] = useState(false);

  // Mostrar botão após rolar 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Loop infinito: show -> shake contínuo -> hide -> repeat
  useEffect(() => {
    if (isVisible) {
      let isMounted = true;

      const loopCycle = () => {
        if (!isMounted) return;

        // Aparece
        const showTimeout = setTimeout(() => {
          if (isMounted) setShowBubble(true);
        }, 1000);

        // Shake loop infinito enquanto visível
        const shakeTimeout = setTimeout(() => {
          if (isMounted) setShake(true);
        }, 1200);

        // Desaparece após 5s totais
        const hideTimeout = setTimeout(() => {
          if (isMounted) {
            setShowBubble(false);
            setShake(false);
            // Reaparece após 3s (mini pausa)
            setTimeout(() => {
              if (isMounted) loopCycle(); // Loop recursivo
            }, 3000);
          }
        }, 5000);

        // Cleanup timeouts se desmontar
        return () => {
          clearTimeout(showTimeout);
          clearTimeout(shakeTimeout);
          clearTimeout(hideTimeout);
        };
      };

      loopCycle();

      return () => {
        isMounted = false;
      };
    } else {
      setShowBubble(false);
      setShake(false);
    }
  }, [isVisible]); // Reativa só quando isVisible muda

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {isVisible && (
        <div className="relative flex flex-col items-center">
          {/* Balão branco com bolinha verde + shake infinito */}
          {showBubble && (
            <div
              className={`mb-2 rounded-lg bg-white px-4 py-2 text-black text-sm shadow-lg border border-gray-200 transition-transform duration-200 flex items-center gap-2 ${
                shake ? "animate-shake-infinite" : ""
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Estamos online
            </div>
          )}

          {/* Botão WhatsApp com logo */}
          <button
            onClick={openWhatsApp}
            className="h-14 w-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>
      )}
      <style jsx>{`
        @keyframes shake-infinite {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px) rotate(1deg); }
          40% { transform: translateX(2px) rotate(-1deg); }
          60% { transform: translateX(-1px) rotate(1deg); }
          80% { transform: translateX(1px) rotate(-1deg); }
        }
        .animate-shake-infinite {
          animation: shake-infinite 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
