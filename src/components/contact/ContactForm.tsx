import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const templateParams = {
        to_name: 'contato@inaff.org.br',
        from_name: formData.name,
        from_email: formData.email,
        subject: `Novo contato de ${formData.name}`,
        message: formData.message
      };

      // Envia o email através do EmailJS
      const response = await emailjs.send(
        'service_r7qswx4', // Substitua com seu service_id do EmailJS
        'template_79lzejx', // Substitua com seu template_id do EmailJS
        templateParams,
        'udl8hZG33gn7gI9Qq' // Substitua com seu user_id do EmailJS
      );

      // Verifique a resposta do serviço
      console.log('Resposta do EmailJS:', response);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-primary text-white py-3 px-6 rounded-md hover:bg-brand-secondary transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      
      {status === 'success' && (
        <p className="text-green-600 text-sm">Mensagem enviada com sucesso!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Erro ao enviar mensagem. Tente novamente.</p>
      )}
    </form>
  );
}
