import React from 'react';

export default function PrivacyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Informações Gerais</h2>
        <p>A Pharmaeventus está comprometida com a proteção da sua privacidade e dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Dados Coletados</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dados de identificação (nome, e-mail, telefone)</li>
          <li>Dados profissionais (instituição, cargo)</li>
          <li>Informações de pagamento para inscrições em eventos</li>
          <li>Dados de participação em eventos e certificações</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gestão de inscrições em eventos</li>
          <li>Emissão de certificados</li>
          <li>Comunicação sobre eventos e serviços</li>
          <li>Processamento de pagamentos</li>
          <li>Melhorias nos serviços oferecidos</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
        <p>Você tem direito a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acessar seus dados</li>
          <li>Corrigir dados incompletos ou desatualizados</li>
          <li>Solicitar a exclusão de seus dados</li>
          <li>Revogar o consentimento</li>
          <li>Solicitar a portabilidade dos dados</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Segurança</h2>
        <p>Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda ou alteração.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
        <p>Para exercer seus direitos ou esclarecer dúvidas, entre em contato:</p>
        <p>Email: dpo@pharmaeventus.com.br</p>
        <p>Telefone: (71) 3561-0260</p>
      </section>
    </div>
  );
}