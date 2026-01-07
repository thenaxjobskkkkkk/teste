import React from 'react';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Clara Silva",
      role: "Revendedora Iniciante",
      img: "https://picsum.photos/100/100?random=10",
      text: "Eu tinha medo de comprar na internet, mas a lista me salvou. Fiz minha primeira compra de R$200 e já lucrei R$450 vendendo para as amigas!"
    },
    {
      name: "Juliana Costa",
      role: "Loja Online",
      img: "https://picsum.photos/100/100?random=11",
      text: "Só o fornecedor de pincéis já pagou o valor da lista completa 10x. O conteúdo é direto ao ponto, sem enrolação. Amei!"
    },
    {
      name: "Patrícia Mendes",
      role: "Empreendedora",
      img: "https://picsum.photos/100/100?random=12",
      text: "Comprei o plano completo pelo bônus de Instagram e valeu super a pena. Minhas fotos melhoraram e as vendas aumentaram."
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Elas começaram assim como você
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto italic">
            "O sucesso deixa rastros. Veja o que nossas alunas estão conquistando."
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl relative border border-rose-100 hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-6 text-rose-200 w-8 h-8" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-rose-500 font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};