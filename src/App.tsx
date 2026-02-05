import { FileText, HandshakeIcon, MessageCircle } from 'lucide-react';

function App() {
  const whatsappNumber = '5571996902314';

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      icon: FileText,
      title: '2ª Via de Boleto',
      description: 'Solicite sua segunda via de forma rápida e fácil',
      message: 'Olá! Gostaria de solicitar a 2ª via do boleto.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: HandshakeIcon,
      title: 'Negociação de Dívidas',
      description: 'Negocie suas pendências com condições especiais',
      message: 'Olá! Gostaria de negociar minhas dívidas.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Falar com Atendente',
      description: 'Converse com nosso time de atendimento',
      message: 'Olá! Preciso de atendimento.',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-3">
            Gestão de Energia
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluções rápidas e eficientes para seus serviços de energia
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(service.message)}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 text-left"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Acessar via WhatsApp</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        <footer className="mt-20 text-center text-slate-600">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-2">
              Atendimento disponível de segunda a sexta, das 8h às 18h
            </p>
            <p className="text-sm text-slate-500">
              WhatsApp: (11) 96109-2812
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
