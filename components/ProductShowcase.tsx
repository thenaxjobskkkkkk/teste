import React from 'react';
import { Tag } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "Lip Gloss Fashion Rôse",
      price: "R$ 3,79",
      image: "https://i.ibb.co/LDXHTgmp/1-1.webp"
    },
    {
      name: "Body Girl Gel Creme",
      price: "R$ 5,90",
      image: "https://i.ibb.co/ycyvTZFc/1-2.webp"
    },
    {
      name: "Máscara Cílios Luisance V. Lash",
      price: "R$ 3,89",
      image: "https://i.ibb.co/zVfHkqFD/1-3.webp"
    },
    {
      name: "Luisance Paleta de Sombras Luxo",
      price: "R$ 4,90",
      image: "https://i.ibb.co/27p1PsbV/1-4.webp"
    },
    {
      name: "Esponja de Maquiagem",
      price: "R$ 3,30",
      image: "https://i.ibb.co/pj4xSrxp/1-5.webp"
    },
    {
      name: "Esfoliante Corpo Rosto Pitaya",
      price: "R$ 2,99",
      image: "https://i.ibb.co/5gSDbtDp/1-6.webp"
    }
  ];

  return (
    <section className="py-20 bg-rose-50/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-rose-100 rounded-full text-rose-600 text-sm font-semibold mb-4">
            <Tag size={16} />
            <span>Preços Reais de Atacado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Veja Alguns Produtos Que Você<br className="hidden md:block" /> Poderia Estar Vendendo
          </h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Imagine o lucro que você pode ter revendendo esses produtos pelo preço de mercado (R$ 15, R$ 20 ou mais).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-rose-100 group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
                  Lucro Alto
                </div>
              </div>
              
              <h3 className="text-stone-800 font-medium text-sm md:text-base mb-2 line-clamp-2 h-10 md:h-12">
                {product.name}
              </h3>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mt-2">
                <div>
                   <p className="text-xs text-stone-400">Pago com a lista:</p>
                   <p className="text-2xl font-bold text-rose-600">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};