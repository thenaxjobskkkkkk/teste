import React, { useEffect, useState } from 'react';

export const Thermostat: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animação de entrada da barra de progresso
    const timer = setTimeout(() => {
      setWidth(87);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-white border-t border-rose-100">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-2 uppercase tracking-wider animate-pulse">
            ⚠️ Vagas Esgotando!
          </h2>
          <p className="text-lg md:text-xl font-medium text-stone-700">
            Restam apenas <span className="font-bold text-red-600 bg-red-50 px-2 rounded">15 vagas</span> com desconto!
          </p>
        </div>
        
        {/* Barra de Progresso */}
        <div className="relative w-full">
          <div className="flex justify-end mb-1">
            <span className="text-sm font-bold text-red-600">87% Vendido</span>
          </div>
          <div className="w-full h-6 bg-gray-200 rounded-full shadow-inner overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 rounded-full flex items-center justify-end pr-2 text-white text-xs font-bold transition-all duration-[2000ms] ease-out relative z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
              style={{ width: `${width}%` }}
            >
              {/* Efeito de brilho/scan na barra */}
              <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
           <p className="text-stone-500 text-sm font-medium mb-4 bg-stone-50 inline-block px-4 py-2 rounded-lg border border-stone-100">
            Após finalizar as vagas o valor será reajustado.
          </p>
          <p className="text-rose-600 font-bold text-lg flex items-center justify-center gap-2 mt-2">
            <span className="animate-bounce text-2xl">👇</span> 
            Clique abaixo para garantir sua vaga com desconto
          </p>
        </div>
      </div>
    </section>
  );
};