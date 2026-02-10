export function ServicesSection() {
  const services = [
    {
      title: 'Klassisk fysioterapi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
      image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjY4OTY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: 'https://api.iconify.design/mdi:hand-heart.svg?color=%23127ccb',
    },
    {
      title: 'Sportsfysioterapi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
      image: 'https://images.unsplash.com/photo-1706353399656-210cca727a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc2Njg0OTY0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: 'https://api.iconify.design/mdi:run-fast.svg?color=%23127ccb',
    },
    {
      title: 'Triggerpunkt-behandling',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
      image: 'https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzY2ODY3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="tjenester" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Våre tjenester</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                {service.icon && (
                  <div className="mt-4">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-8 h-8"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ISO Sonater Course - HMS */}
        <div className="bg-white rounded-xl p-8 border-2 border-blue-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-block bg-blue-100 text-[#127ccb] px-4 py-1 rounded-full text-sm mb-4">
                HMS Kurs
              </div>
              <h3 className="text-slate-900 mb-4">ISO Sonater Kurs</h3>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud 
                exercitation ullamco laboris nisi ut aliquip.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#127ccb] mt-1">✓</span>
                  <span>Sertifiserte instruktører</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#127ccb] mt-1">✓</span>
                  <span>Fleksible kurstider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#127ccb] mt-1">✓</span>
                  <span>Tilpasset deres bedrift</span>
                </li>
              </ul>
              <button className="bg-[#127ccb] hover:bg-[#0e66a8] text-white px-6 py-3 rounded-lg transition-colors">
                Kontakt oss for mer informasjon
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h4 className="text-slate-900 mb-4">Kursinformasjon</h4>
                <div className="space-y-3 text-slate-600">
                  <div>
                    <span className="text-slate-700">Varighet:</span> 1-2 dager
                  </div>
                  <div>
                    <span className="text-slate-700">Deltakere:</span> 5-20 personer
                  </div>
                  <div>
                    <span className="text-slate-700">Sted:</span> Hos oss eller hos dere
                  </div>
                  <div>
                    <span className="text-slate-700">Pris:</span> Kontakt oss for tilbud
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}