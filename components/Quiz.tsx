import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Loader2, CheckCircle2, Sparkles, Star, Rocket, Target, Heart, Trophy, Zap } from 'lucide-react';
import confetti from 'https://esm.sh/canvas-confetti';

interface QuizProps {
  onComplete: (planTier: 'essential' | 'complete') => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [score, setScore] = useState(0);
  
  const audioPopRef = useRef<HTMLAudioElement | null>(null);
  const audioExplosionRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Som de clique/pop suave e feminino
    const pop = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_7806f0e91c.mp3');
    pop.volume = 0.5;
    
    // Som de impacto final (Sucesso)
    const explosion = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_c6cc10078a.mp3');
    explosion.volume = 0.8;

    audioPopRef.current = pop;
    audioExplosionRef.current = explosion;

    const unlock = () => {
      pop.play().then(() => { pop.pause(); pop.currentTime = 0; }).catch(() => {});
      explosion.play().then(() => { explosion.pause(); explosion.currentTime = 0; }).catch(() => {});
      window.removeEventListener('click', unlock);
    };
    window.addEventListener('click', unlock);
    return () => window.removeEventListener('click', unlock);
  }, []);

  const feedbackMessages = [
    { text: "Entendido! Vamos focar na sua segurança inicial. ✨", icon: <Star className="text-rose-500" /> },
    { text: "Excelente! Você tem visão de crescimento. 📈", icon: <Target className="text-rose-500" /> },
    { text: "Perfeito! Ousadia é o que separa o sucesso. 🔥", icon: <Zap className="text-rose-500" /> },
    { text: "Ótimo! Estamos moldando o seu futuro. 💎", icon: <Rocket className="text-rose-500" /> }
  ];

  const steps = [
    {
      question: "Como você se define hoje no mundo dos negócios?",
      options: [
        { text: "Insegura: Quero testar com pouco risco 💖", points: 1 },
        { text: "Decidida: Quero lucro rápido e certo 🚀", points: 2 },
        { text: "Empreendedora: Quero dominar o mercado 👑", points: 3 }
      ]
    },
    {
      question: "Qual o seu objetivo real de faturamento mensal?",
      options: [
        { text: "Renda extra: R$ 500 a R$ 1.500 💸", points: 1 },
        { text: "Negócio Sólido: R$ 3.000 a R$ 7.000 💰", points: 2 },
        { text: "Liberdade Total: Mais de R$ 10.000 🏦", points: 3 }
      ]
    },
    {
      question: "O que é mais importante para você agora?",
      options: [
        { text: "Economia: Pagar o mínimo para começar 👛", points: 1 },
        { text: "Velocidade: Material completo para lucrar logo ⚡", points: 3 }
      ]
    },
    {
      question: "Se você tivesse a chave dos fornecedores agora, o que faria?",
      options: [
        { text: "Compraria aos poucos para ver no que dá 🛍️", points: 1 },
        { text: "Montaria um estoque profissional e VIP 🔝", points: 3 }
      ]
    }
  ];

  const handleOption = (points: number) => {
    setScore(prev => prev + points);
    
    // Tocar som de clique
    if (audioPopRef.current) {
      audioPopRef.current.currentTime = 0;
      audioPopRef.current.play().catch(() => {});
    }

    // Pequena explosão de confete rosa ao clicar
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#fb7185', '#fda4af', '#ffffff']
    });
    
    setFeedbackType(step % feedbackMessages.length);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      if (step < steps.length - 1) setStep(step + 1);
      else startAnalysis();
    }, 1200);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        triggerFinalEffects();
        const tier = score > 7 ? 'complete' : 'essential';
        setTimeout(() => onComplete(tier), 4500); 
      }
    }, 50);
  };

  const triggerFinalEffects = () => {
    setIsFinished(true);
    setShouldShake(true);
    if (audioExplosionRef.current) {
      audioExplosionRef.current.currentTime = 0;
      audioExplosionRef.current.play().catch(() => {});
    }
    setTimeout(() => setShouldShake(false), 500);
    confetti({ 
      particleCount: 400, 
      spread: 160, 
      origin: { y: 0.5 }, 
      colors: ['#e11d48', '#ffffff', '#fbbf24', '#ff85a2'], 
      scalar: 1.2 
    });
  };

  if (isAnalyzing) {
    return (
      <div className={`min-h-[60vh] flex flex-col items-center justify-center p-6 text-center transition-all ${shouldShake ? 'scale-110' : 'scale-100'}`}>
        {isFinished ? (
          <div className="animate-in zoom-in duration-500 flex flex-col items-center">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-2xl border-4 border-white animate-pulse">
               <Trophy className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-4xl font-black mb-3 tracking-tighter text-stone-800 uppercase">Perfil Identificado! 👸</h2>
            <div className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-2xl uppercase tracking-widest shadow-xl animate-bounce">
              Liberando seu Plano...
            </div>
          </div>
        ) : (
          <>
            <div className="relative mb-8">
              <Loader2 className="w-24 h-24 text-rose-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-rose-600">{progress}%</div>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-stone-800">Definindo seu nível empreendedor... 🔍</h2>
            <div className="w-full max-w-md h-5 bg-stone-100 rounded-full overflow-hidden border border-stone-200 p-1 shadow-inner">
              <div className="h-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-12 space-y-4 text-left w-full max-w-xs mx-auto">
              {[ "Analisando ambição e metas 🎯", "Cruzando melhores fornecedores 🚛", "Preparando oferta personalizada 🎁" ].map((txt, i) => (
                <div key={i} className={`flex items-center gap-4 text-sm font-bold transition-all duration-500 ${progress > (20 + i*30) ? 'opacity-100 translate-x-0' : 'opacity-10 -translate-x-4'} text-stone-700`}>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 relative">
      {showFeedback && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-[3rem] shadow-2xl border-2 border-rose-300 flex flex-col items-center text-center animate-in zoom-in duration-300">
            <div className="mb-6 p-5 bg-rose-100 rounded-full animate-bounce shadow-inner">{feedbackMessages[feedbackType].icon}</div>
            <h4 className="text-2xl font-black text-rose-600 mb-2 tracking-tight uppercase">Excelente! ✨</h4>
            <p className="text-stone-600 font-medium text-lg italic leading-tight">{feedbackMessages[feedbackType].text}</p>
          </div>
        </div>
      )}

      <div className={`text-center mb-10 transition-all duration-300 ${showFeedback ? 'opacity-0 scale-90' : 'opacity-100'}`}>
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-rose-100 text-rose-600 rounded-full text-xs font-black mb-6 uppercase tracking-widest shadow-sm border border-rose-200">
          <Sparkles size={14} className="animate-pulse" /> Direcionamento de Perfil Make Revenda Oficial
        </div>
        <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-stone-900">Descubra qual plano se <br/><span className="text-rose-600 underline decoration-rose-200">Encaixa no seu momento 🌸</span></h2>
      </div>

      <div className={`bg-white shadow-[0_30px_60px_rgba(244,63,94,0.15)] rounded-[2.5rem] p-8 md:p-12 border border-rose-50 transition-all duration-500 ${showFeedback ? 'opacity-0 scale-95 blur-md' : 'opacity-100'}`}>
        <h3 className="text-2xl font-bold mb-10 leading-tight tracking-tight text-stone-800 text-center">{steps[step].question}</h3>
        <div className="space-y-4">
          {steps[step].options.map((option, idx) => (
            <button 
              key={idx} 
              onClick={() => handleOption(option.points)} 
              disabled={showFeedback} 
              className="w-full text-left p-6 rounded-3xl border-2 border-stone-50 transition-all group flex items-center justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-rose-300 hover:bg-rose-50/50 active:scale-95"
            >
              <span className="font-bold text-lg text-stone-700 group-hover:text-rose-700">{option.text}</span>
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center transition-all group-hover:bg-rose-500 group-hover:rotate-12">
                <ChevronRight className="w-6 h-6 text-stone-300 group-hover:text-white transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center text-stone-400 text-xs font-medium uppercase tracking-widest opacity-50">
        Pergunta {step + 1} de {steps.length}
      </div>
    </div>
  );
};