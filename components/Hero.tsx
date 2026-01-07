
import React, { useMemo } from 'react';
import { ArrowRight, Sparkles, Zap, Rocket, ShieldCheck } from 'lucide-react';

interface HeroProps {
  recommendedPlan?: 'essential' | 'complete';
}

const HERO_SUBTITLES = [
  "Pare de perder dinheiro para atravessadores. Tenha em mãos o WhatsApp direto das fábricas que vendem maquiagem a preço de custo para você lucrar alto.",
  "O que é isso? Um portal exclusivo de acesso aos fornecedores ocultos das grandes marcas. Pare de comprar de revendedores e comece a comprar direto da fonte.",
  "Descubra os contatos de confiança que entregam mercadoria barata na sua porta em tempo recorde. O jeito mais fácil e seguro de começar com baixo investimento.",
  "O segredo das lojistas de sucesso finalmente revelado: fornecedores que permitem margens de até 400% em cada batom, base ou paleta vendida.",
  "Sua jornada para a independência financeira começa aqui. Acesse a lista definitiva com os menores preços do Brasil e elimine os atravessadores hoje.",
  "Chega de pagar caro em maquiagem para revender. Nós já testamos e selecionamos os melhores contatos para você apenas pedir, receber e lucrar.",
  "Não precisa de milhares de reais para abrir sua loja. Com nossa lista, você encontra produtos de R$ 3,00 que são vendidos por R$ 15,00 facilmente.",
  "O atalho seguro para quem quer empreender sem medo. Fornecedores verificados, com CNPJ e histórico real de entregas em todo o país.",
  "Transforme seu Instagram em uma vitrine lucrativa com os produtos certos. Tenha acesso à fonte das blogueiras e grandes revendedoras de sucesso.",
  "O guia passo a passo com os contatos de ouro do atacado nacional e importados. Sua jornada para ter uma loja profissional começa agora."
];

const HEADLINES = [
  <>A Fonte Oculta para <span className="text-rose-600">Ganhar Muito Dinheiro</span> com Make</>,
  <>A Chave Mestra para <span className="text-rose-600">Lucrar 400%</span> com Maquiagem</>,
  <>O Segredo das Blogueiras para <span className="text-rose-600">Faturar Alto</span> na Revenda</>,
  <>Acesso Direto à Fábrica para <span className="text-rose-600">Multiplicar seus Lucros</span></>,
  <>Como Comprar por Centavos e <span className="text-rose-600">Vender por Reais</span></>,
  <>O Guia Definitivo para <span className="text-rose-600">Viver de Maquiagem</span> em 2026</>,
  <>A Lista de Ouro para <span className="text-rose-600">Dominar o Atacado</span> de Make</>,
  <>O Atalho Seguro para <span className="text-rose-600">Faturar 400%</span> Sem Erro</>,
  <>Saia do Zero e Comece a <span className="text-rose-600">Lucrar de Verdade</span> Hoje</>,
  <>A Chave do Sucesso para <span className="text-rose-600">Criar sua Loja</span> VIP</>
];

export const Hero: React.FC<HeroProps> = ({ recommendedPlan }) => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Escolhe um índice aleatório ao carregar (0 a 9)
  const randomIndex = useMemo(() => Math.floor(Math.random() * 10), []);

  const headline = HEADLINES[randomIndex];
  const subtitle = HERO_SUBTITLES[randomIndex];

  return (
    <section className="relative bg-gradient-to-b from-rose-100 to-rose-50 py-16 px-6 md:px-12 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-rose-600 text-sm font-semibold mb-6 border border-rose-200 shadow-sm">
          <Sparkles size={16} className="animate-pulse" />
          <span>Oportunidade de Negócio Verificada</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-stone-900 leading-tight mb-6 tracking-tight">
          {headline}
        </h1>
        
        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={scrollToPricing}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-200 bg-rose-600 rounded-2xl hover:bg-rose-700 hover:shadow-2xl hover:-translate-y-1 focus:outline-none w-full md:w-auto"
          >
            {recommendedPlan === 'complete' ? "Liberar Meu Acesso VIP Agora" : "Garantir Minha Lista + Bônus"}
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-stone-500 font-semibold text-sm">
            <ShieldCheck className="text-green-500" /> Fornecedores 100% Verificados Direto da Fábrica
          </div>
        </div>
      </div>
    </section>
  );
};
