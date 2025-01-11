import React from 'react';

export default function Portfolio() {
  const events = [
    {
      title: "Organização de Eventos Científicos",
      category: "Eventos Científicos",
      description: "Gestão completa desde captação de patrocínio até desenvolvimento de plataformas",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Plataforma de Gestão",
      category: "Tecnologia",
      description: "Sites personalizados, vendas de inscrições e emissão de certificados",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Gerenciamento de LIVES",
      category: "Transmissão Digital",
      description: "Transmissão multiplataforma com recursos avançados de produção",
      image: "https://images.unsplash.com/photo-1628565239608-47549a1126e7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Congressos Internacionais",
      category: "Eventos Científicos",
      description: "Eventos híbridos com participantes de todo o mundo",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Plataforma de Certificação",
      category: "Tecnologia",
      description: "Sistema automatizado de emissão e validação de certificados",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Produção Audiovisual",
      category: "Transmissão Digital",
      description: "Equipe especializada em transmissões ao vivo de alta qualidade",
      image: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosso Portfólio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluções completas para eventos presenciais e digitais
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm opacity-90">{event.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-primary bg-brand-light rounded-full mb-2">
                  {event.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm lg:min-h-[3rem]">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}