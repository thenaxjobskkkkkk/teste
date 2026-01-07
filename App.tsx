
import React, { useState, useMemo } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { RealResults } from './components/RealResults';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { Thermostat } from './components/Thermostat';
import { Pricing } from './components/Pricing';
import { SocialProof } from './components/SocialProof';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

const TOP_BAR_MESSAGES = [
  "🔥 OFERTA EXCLUSIVA: ACESSO AO PORTAL DE FORNECEDORES LIBERADO POR TEMPO LIMITADO!",
  "💎 URGENTE: RESTAM POUCAS VAGAS PARA O ACESSO VIP AOS FORNECEDORES 2026!",
  "🚀 BÔNUS: COMPRE O PLANO COMPLETO E GANHE O GUIA DE VENDAS NO INSTAGRAM!",
  "✨ REVELADO: O SEGREDO DAS BLOGUEIRAS PARA LUCRAR 400% COM MAKE BARATA!",
  "💄 ATENÇÃO: FORNECEDORES DE SÃO PAULO E IMPORTADOS COM ENVIO IMEDIATO!",
  "👑 SEJA DONA DO SEU NEGÓCIO: COMECE SUA LOJA HOJE MESMO!",
  "🎁 ÚLTIMA CHANCE: GARANTA O PREÇO PROMOCIONAL ANTES DO REAJUSTE!",
  "⚡ RÁPIDO: ACESSO IMEDIATO APÓS A CONFIRMAÇÃO DO PAGAMENTO!",
  "🌸 DICA: COMPRE DIRETO DA FONTE E ELIMINE OS ATRAVESSADORES AGORA!",
  "🛡️ SEGURANÇA: TODOS OS FORNECEDORES POSSUEM CNPJ E REFERÊNCIAS REAIS!"
];

export default function App() {
  const [recommendedPlan] = useState<'essential' | 'complete'>('complete');
  
  // Escolhe uma mensagem aleatória apenas uma vez ao carregar
  const randomTopBarMessage = useMemo(() => {
    return TOP_BAR_MESSAGES[Math.floor(Math.random() * TOP_BAR_MESSAGES.length)];
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden animate-in fade-in duration-1000 bg-rose-50 text-stone-800">
      <div className="bg-rose-600 text-white text-center py-3 text-sm font-bold shadow-lg z-50 sticky top-0 px-4 uppercase tracking-tight">
        {randomTopBarMessage}
      </div>
      
      <Hero recommendedPlan={recommendedPlan} />
      <PainPoints />
      <Solution />
      <RealResults />
      <Benefits />
      <ProductShowcase />
      <Thermostat />
      <Pricing highlightedPlan={recommendedPlan} />
      <SocialProof />
      <Guarantee />
      <Footer />
    </div>
  );
}
