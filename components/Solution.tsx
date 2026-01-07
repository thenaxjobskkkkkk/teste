import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">
            Como isso resolve seu problema?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Nós eliminamos os atravessadores que ficam com todo o seu lucro. Veja a diferença:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Path 1: Hard Way */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-stone-200 opacity-70">
            <h3 className="text-xl font-bold text-stone-400 mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
              <XCircle className="text-stone-300" /> O Caminho Comum (Difícil)
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-400 font-bold italic">1</div>
                <p className="text-stone-500 text-sm">Horas procurando fornecedores no Google e caindo em anúncios de revendedores caros.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-400 font-bold italic">2</div>
                <p className="text-stone-500 text-sm">Medo constante de fazer um Pix e ser bloqueada pelo "vendedor".</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-400 font-bold italic">3</div>
                <p className="text-stone-500 text-sm">Margem de lucro minúscula porque você está comprando de quem já comprou da fábrica.</p>
              </li>
            </ul>
          </div>

          {/* Path 2: Our Shortcut */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-rose-500 shadow-2xl relative transform lg:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              O Atalho Lucrativo
            </div>
            <h3 className="text-xl font-black text-rose-600 mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
              <CheckCircle2 className="text-rose-500" /> Com Nossa Lista Oficial
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 text-white font-bold italic">1</div>
                <p className="text-stone-800 font-bold text-sm">Acesso direto ao WhatsApp da fábrica em 2 minutos. Sem rodeios.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 text-white font-bold italic">2</div>
                <p className="text-stone-800 font-bold text-sm">Segurança total: Lista curada com CNPJs reais e referências de mercado.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 text-white font-bold italic">3</div>
                <p className="text-stone-800 font-bold text-sm">Lucro de 200% a 400%. Você paga R$ 4 e vende por R$ 20 com facilidade.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 pt-12 border-t border-stone-200">
          <div className="w-full md:w-1/2 relative">
             <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="absolute inset-0 bg-rose-200 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-50 -z-10"></div>
                <img 
                  src="https://i.ibb.co/q3xC8GMv/LISTA-DE-FORNECEDORE-1-1.png" 
                  alt="Capa da Lista de Fornecedores de Maquiagem" 
                  className="w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-black text-stone-900 mb-6 tracking-tight">
              Por que comprar aqui e não procurar sozinha?
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed italic">
              "Tempo é dinheiro. Nós já fizemos o trabalho sujo de testar, ligar e verificar cada contato para você não correr riscos."
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Atualizada Mensalmente (Fornecedores 2026)",
                "Filtro Anti-Golpe (Só fornecedores com histórico)",
                "Suporte para suas primeiras dúvidas",
                "Calculadora de Lucro inclusa em todos os planos"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-stone-800 font-bold text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-rose-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
            >
              Ver planos disponíveis <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};