
import React, { useState } from 'react';
import { Check, Star, Zap, Gift, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingProps {
  highlightedPlan?: 'essential' | 'complete';
}

export const Pricing: React.FC<PricingProps> = ({ highlightedPlan }) => {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleEssentialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  const closeUpsell = () => setShowUpsell(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-stone-50 to-rose-100/50 relative">
      {/* Popup de Upsell (Oferta Especial) */}
      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in slide-in-from-bottom-8 duration-500">
            <button 
              onClick={closeUpsell}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-rose-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header do Popup */}
            <div className="bg-rose-600 p-8 text-center text-white relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles size={12} /> Oferta Especial de Upgrade
              </div>
              <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">
                ESPERA! VOCÊ GANHOU <br/>UM SUPER DESCONTO 🎁
              </h3>
              <p className="text-rose-100 font-medium text-sm">
                Não comece pela metade. Leve o acesso VIP completo hoje.
              </p>
            </div>

            {/* Conteúdo do Popup */}
            <div className="p-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <p className="text-stone-400 text-xs line-through">De R$ 37,90</p>
                  <div className="flex items-baseline gap-1 text-rose-600">
                    <span className="text-sm font-bold">R$</span>
                    <span className="text-5xl font-black">27,90</span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-black animate-pulse">
                  ECONOMIZE R$ 10,00
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-stone-800 font-bold text-center text-sm uppercase tracking-wider">O que você ganha com o Plano VIP:</p>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Lista Completa Atualizada 2026",
                    "Acesso aos Fornecedores das Blogueiras",
                    "3 Bônus Exclusivos (Instagram, Embalagens e Vendas)",
                    "Calculadora de Lucro Profissional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-700 text-sm">
                      <div className="bg-green-500 rounded-full p-0.5 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://pay.lowify.com.br/checkout.php?product_id=O7cWg9"
                  className="w-full flex items-center justify-center gap-2 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-green-200 transition-all hover:-translate-y-1 active:scale-95 group"
                >
                  QUERO O PLANO COMPLETO COM DESCONTO
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button 
                  onClick={() => window.location.href = "https://pay.lowify.com.br/checkout?product_id=Z4gHBr"}
                  className="w-full text-center text-stone-400 text-xs font-medium hover:text-stone-600 transition-colors underline"
                >
                  Não, obrigado. Quero continuar com o plano simples de R$ 15,90
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-green-500" /> Compra 100% Segura e Garantida
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
            Escolha como começar
          </h2>
          <p className="text-lg text-stone-600">
            Baseado no seu perfil, o {highlightedPlan === 'complete' ? 'Plano Completo' : 'Plano Essencial'} é o mais indicado para você.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:items-stretch">
          
          {/* Essential Offer - R$ 15,90 */}
          <div className={`w-full max-w-md bg-white rounded-3xl p-8 border shadow-sm flex flex-col relative overflow-hidden group transition-all ${highlightedPlan === 'essential' ? 'border-rose-500 ring-2 ring-rose-200 scale-105 z-10' : 'border-stone-200 opacity-80'}`}>
            {highlightedPlan === 'essential' && (
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                RECOMENDADO PARA VOCÊ
              </div>
            )}
            <h3 className="text-xl font-medium text-stone-500 mb-2">Plano Essencial</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-sm text-stone-400">R$</span>
              <span className="text-4xl font-bold text-stone-800">15,90</span>
            </div>
            
            <p className="text-sm text-stone-500 mb-6">Para mulheres cautelosas que querem o primeiro contato com fornecedores reais.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-stone-700 text-sm font-medium">Lista básica de fornecedores</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-stone-700 text-sm">Acesso vitalício</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-stone-700 text-sm">Entrega imediata</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-stone-700 text-sm">Calculadora de Precificação</span>
              </li>
              <li className="flex items-start gap-3 mt-4 bg-rose-50 p-3 rounded-2xl border border-rose-100 shadow-sm border-dashed">
                <Gift className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-rose-900 font-bold text-xs uppercase">BÔNUS: Guia Inicie do Zero</span>
              </li>
            </ul>

            <button 
              onClick={handleEssentialClick}
              className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${highlightedPlan === 'essential' ? 'bg-rose-600 text-white shadow-lg' : 'border-2 border-rose-500 text-rose-600'}`}
            >
              Começar com o Essencial
            </button>
          </div>

          {/* Complete Offer - R$ 37,90 */}
          <div className={`w-full max-w-md bg-white rounded-3xl p-8 border-2 shadow-xl flex flex-col relative transition-all ${highlightedPlan === 'complete' ? 'border-rose-600 scale-110 z-20' : 'border-stone-100 opacity-90'}`}>
            <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-lg">
              {highlightedPlan === 'complete' ? 'RECOMENDADO: PERFIL OUSADO' : 'MAIS COMPLETO'}
            </div>
            
            <h3 className="text-xl font-bold text-rose-600 mb-2 flex items-center gap-2">
              Plano Completo <Star className="w-4 h-4 fill-current" />
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-sm text-stone-400">R$</span>
              <span className="text-5xl font-bold text-stone-900">37,90</span>
            </div>
            
            <p className="text-sm text-stone-500 mb-6">Acesso total para mulheres decididas que querem faturar alto e dominar o mercado.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                <span className="text-stone-800 font-bold text-sm">Lista completa atualizada 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                <span className="text-stone-800 font-medium text-sm">Fornecedores nacionais e importados</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                <span className="text-stone-800 font-medium text-sm">Calculadora de Precificação Profissional</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                <span className="text-stone-800 font-medium text-sm">Acesso vitalício + Garantia 7 dias</span>
              </li>
              
              {/* 3 Bonuses for Complete Plan */}
              <div className="mt-6 space-y-2">
                <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest ml-1">Combo de Bônus Exclusivos 🎁</p>
                <li className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-100 shadow-sm">
                  <Zap className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-rose-900 font-bold text-[11px] uppercase">Bônus 1: Vender no Instagram</span>
                    <span className="text-rose-700 text-[10px]">Estratégias para bombar seu perfil.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-100 shadow-sm">
                  <Star className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-rose-900 font-bold text-[11px] uppercase">Bônus 2: Fornecedores de Embalagens</span>
                    <span className="text-rose-700 text-[10px]">Onde comprar sacolas e caixas baratas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-100 shadow-sm">
                  <Gift className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-rose-900 font-bold text-[11px] uppercase">Bônus 3: Script de Atendimento</span>
                    <span className="text-rose-700 text-[10px]">Textos prontos para fechar vendas no Whats.</span>
                  </div>
                </li>
              </div>
            </ul>

            <a 
              href="https://pay.lowify.com.br/checkout?product_id=y91v7e"
              className="w-full block text-center py-4 mt-4 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold shadow-lg shadow-rose-200 hover:shadow-xl hover:from-rose-600 hover:to-rose-700 transition-all transform hover:-translate-y-1"
            >
              Garantir Plano Completo (VIP)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
