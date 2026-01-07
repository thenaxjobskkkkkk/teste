import React from 'react';
import { ShieldCheck, Zap, DollarSign, Clock, Calculator, Heart } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Liberdade Financeira",
      desc: "Comece a lucrar desde a primeira venda com produtos que têm saída garantida."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Ganhe Tempo",
      desc: "Receba anos de pesquisa mastigados em um clique. Vá direto ao que importa."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Compra Segura",
      desc: "Diga adeus ao medo de golpes. Nossos fornecedores são verificados e reais."
    },
    {
      icon: <Calculator className="w-6 h-6 text-white" />,
      title: "Domínio de Preço",
      desc: "Aprenda a cobrar o valor certo para nunca mais perder dinheiro por má precificação."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-black mb-4 uppercase tracking-widest">
            <Heart size={14} className="fill-current" /> O que você realmente ganha
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-stone-800 mb-6 tracking-tight">
            Mais que uma lista, um novo estilo de vida
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-start p-8 bg-rose-50/30 border border-rose-100 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-200 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-stone-800 mb-3">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm font-medium">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};