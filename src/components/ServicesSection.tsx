import classicPhysioImage from 'figma:asset/a50e5416970bf3031921861785530f38dd87be54.png';
import triggerPointImage from 'figma:asset/d3077469cc92747b9fb304c522b5e2bd3ecf296b.png';
import sportsPhysioImage from 'figma:asset/d36669e8e99e8df14637d8a34011bb0f979ec756.png';

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Klassisk fysioterapi',
      description: 'Individuelt tilpasset behandling av muskel- og skjelettplager, med fokus på funksjon og langsiktig bedring.',
      image: classicPhysioImage,
    },
    {
      title: 'Sportsfysioterapi',
      description: 'Spesialisert behandling og rehabilitering for aktive personer og idrettsutøvere.',
      image: sportsPhysioImage,
    },
    {
      title: 'Triggerpunkt-behandling',
      description: 'Behandling rettet mot muskulære spenninger og smerteutstrålende triggerpunkter.',
      image: triggerPointImage,
    },
  ];

  return (
    <section id="tjenester" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Våre tjenester</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Vi hjelper deg tilbake til en smertefri og aktiv hverdag med trygg, individuelt tilpasset behandling.
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
                Vi tilbyr tilpassede HMS-kurs for bedrifter som ønsker å forebygge belastningsskader og styrke arbeidsmiljøet.
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
              <button className="bg-[#127ccb] hover:bg-[#0e66a8] text-white px-6 py-3 rounded-lg transition-colors" onClick={scrollToContact}>
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