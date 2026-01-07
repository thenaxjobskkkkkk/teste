import React from 'react';
import { Camera } from 'lucide-react';

export const RealResults: React.FC = () => {
  const evidenceImages = [
    "https://i.ibb.co/B24qVV9M/Whats-App-Image-2022-09-28-at-16-35-51-jpeg-2.webp",
    "https://i.ibb.co/bRFbLgdP/Whats-App-Image-2022-09-28-at-14-53-07-1-jpeg.webp",
    "https://i.ibb.co/ycV3xpR9/Whats-App-Image-2022-09-28-at-14-53-06-jpeg.webp",
    "https://i.ibb.co/h1JnLv2G/Whats-App-Image-2022-09-28-at-14-53-07-jpeg.webp",
    "https://i.ibb.co/1Y1WJ6bH/md-Rd2o-B-captura-de-tela-2025-12-16-as-022154.png",
    "https://i.ibb.co/Nng5Y71W/md-1-Ap5e-captura-de-tela-2025-12-16-as-022455.png",
    "https://i.ibb.co/jv6b0XJn/md-XKe-Fh-captura-de-tela-2025-12-16-as-022515.png",
    "https://i.ibb.co/qFM3vs4N/lg-05-Nin-captura-de-tela-2025-12-16-as-022106.png",
    "https://i.ibb.co/cSwJW1SQ/lg-YY1y-V-captura-de-tela-2025-12-16-as-020959.png"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-2 mb-10 text-rose-600">
          <Camera className="w-5 h-5" />
          <h3 className="text-xl font-bold uppercase tracking-wider text-center">Resultados Reais de Quem Já Comprou</h3>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {evidenceImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
                <img 
                  src={img} 
                  alt={`Feedback cliente ${idx + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-stone-500 text-xs italic">
            * Prints reais enviados por nossas alunas via WhatsApp e Instagram demonstrando lucros e recebimento de mercadorias.
          </p>
        </div>
      </div>
    </section>
  );
};