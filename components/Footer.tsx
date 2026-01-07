import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <p className="mb-4 font-medium text-white">Lista Fornecedores de Maquiagem</p>
        <p className="text-sm mb-6">
          Copyright © 2026 - Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-xs">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="text-xs mt-8 text-stone-600 max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
        </p>
      </div>
    </footer>
  );
};