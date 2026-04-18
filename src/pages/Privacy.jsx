import React from 'react';

export function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-12 max-w-4xl">
        <h1 className="text-4xl font-bold uppercase tracking-tighter text-text-primary mb-12">Política de <span className="text-gold-main">Privacidade</span></h1>
        <div className="space-y-8 text-text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-text-primary uppercase mb-4">1. Coleta de Dados</h2>
            <p>Coletamos informações necessárias para o agendamento de serviços, como nome, telefone e dados do veículo. Seus dados são tratados com sigilo absoluto.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text-primary uppercase mb-4">2. Uso das Informações</h2>
            <p>As informações são utilizadas exclusivamente para a prestação dos serviços contratados e comunicações sobre o status do seu agendamento.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text-primary uppercase mb-4">3. Compartilhamento</h2>
            <p>Não compartilhamos seus dados pessoais com terceiros sob nenhuma circunstância, exceto por exigência legal.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
