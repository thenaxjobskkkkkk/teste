import React from 'react';
import { ShieldCheck, Timer } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-rose-100 mb-12">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
            Risco Zero: Garantia de 7 Dias
          </h2>
          <p className="text-stone-600 mb-0">
            Se você comprar a lista e achar que os fornecedores não são para você, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. É o nosso compromisso com o seu sucesso.
          </p>
        </div>

        <div className="flex flex-col items-center animate-pulse">
           <div className="flex items-center gap-2 text-rose-600 font-bold mb-4">
              <Timer className="w-5 h-5" />
              <span>Oferta por tempo limitado</span>
           </div>
           <button 
             onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-10 py-5 text-xl font-bold text-white bg-green-600 rounded-full hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-green-200 w-full md:w-auto"
           >
             SIM! Quero Começar Minha Loja Agora
           </button>
           <p className="mt-4 text-sm text-stone-500">
             Acesso imediato após a confirmação do pagamento
           </p>
        </div>

      </div>
    </section>
  );
};