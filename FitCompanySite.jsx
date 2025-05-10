import React from "react";

export default function FitCompanySite() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-orange-600 p-6 shadow-lg">
        <h1 className="text-4xl font-bold">Fit Company SJC</h1>
        <p className="text-orange-100">Uma Companhia Saudável - Saúde e bem-estar físico e mental.</p>
      </header>
      <section className="p-8 bg-black">
        <h2 className="text-3xl text-orange-400 font-semibold mb-4">Nossos Destaques</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Academia completa e moderna</li>
          <li>Atendimento focado no seu objetivo</li>
          <li>Planos flexíveis: mensal, trimestral e anual</li>
          <li>Acompanhamento profissional</li>
          <li>Pilates, funcional, musculação e muito mais</li>
        </ul>
      </section>
      <section className="p-8 bg-orange-950">
        <h2 className="text-3xl text-white font-semibold mb-6">Planos de Treino</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Mensal", price: "R$129,90", desc: "Ideal para começar sua jornada fitness." },
            { title: "Trimestral", price: "R$349", desc: "Economize e mantenha a constância." },
            { title: "Anual", price: "R$999", desc: "Resultados reais com o melhor custo-benefício." }
          ].map((plan, index) => (
            <div key={index} className="bg-black border border-orange-500 p-6 rounded">
              <h3 className="text-xl font-bold text-orange-300 mb-2">{plan.title}</h3>
              <p className="text-white text-2xl">{plan.price}</p>
              <p className="text-gray-300 mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-black">
        <h2 className="text-3xl text-orange-400 font-semibold mb-4">Viva o Estilo de Vida Saudável</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">Alimentação Equilibrada</h3>
            <p>Dicas sobre nutrição para ganho de massa, emagrecimento e bem-estar geral.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">Mentalidade Fitness</h3>
            <p>Motivação, disciplina e rotina saudável para transformar seu corpo e mente.</p>
          </div>
        </div>
      </section>
      <section className="p-8 bg-orange-700">
        <h2 className="text-3xl text-white font-semibold mb-4">Fale Conosco</h2>
        <form className="grid gap-4 max-w-xl">
          <input type="text" placeholder="Seu nome" className="p-2 rounded bg-white text-black" />
          <input type="email" placeholder="Seu e-mail" className="p-2 rounded bg-white text-black" />
          <textarea placeholder="Mensagem" className="p-2 rounded bg-white text-black" rows={4}></textarea>
          <button type="submit" className="bg-black text-white hover:bg-orange-800 p-2 rounded">Enviar</button>
        </form>
      </section>
      <footer className="bg-black text-center text-gray-500 text-sm py-4">
        &copy; 2025 Fit Company SJC. Todos os direitos reservados.
      </footer>
    </div>
  );
}
