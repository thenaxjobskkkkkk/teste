import React from 'react';
import { Search, Frown, Wallet, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Search className="w-8 h-8 text-rose-500" />,
      title: "Onde Comprar?",
      text: "Você passa horas no Google ou Instagram e não encontra fornecedores que valham a pena."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      title: "Medo de Golpes",
      text: "O receio de depositar dinheiro e não receber a mercadoria trava o seu sonho de empreender."
    },
    {
      icon: <Wallet className="w-8 h-8 text-rose-500" />,
      title: "Pouco Dinheiro",
      text: "Acha que precisa de milhares de reais para começar? Você está deixando dinheiro na mesa."
    },
    {
      icon: <Frown className="w-8 h-8 text-rose-500" />,
      title: "Margem Baixa",
      text: "Só encontra produtos caros que não permitem ter um lucro saudável na revenda."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Parece familiar para você?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Muitas mulheres desistem antes mesmo de começar porque esbarram nessas mesmas dificuldades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-rose-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-rose-100">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{pain.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};