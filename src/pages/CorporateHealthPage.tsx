import { Building2, Users, Calendar, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CorporateHealthPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Bedre trivsel',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.',
    },
    {
      icon: TrendingUp,
      title: 'Økt produktivitet',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.',
    },
    {
      icon: Calendar,
      title: 'Fleksible avtaler',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.',
    },
    {
      icon: Building2,
      title: 'På deres lokaler',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#127ccb] hover:text-[#0e66a8] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Tilbake til forsiden
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-slate-900 mb-6">Bedriftshelse tjenester</h1>
            <p className="text-slate-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud 
              exercitation ullamco.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-slate-900 mb-6">Skreddersydde løsninger for deres bedrift</h2>
              <p className="text-slate-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-slate-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="bg-[#127ccb] hover:bg-[#0e66a8] text-white px-8 py-3 rounded-lg transition-colors">
                Kontakt oss for tilbud
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1758876022178-829b3c3412a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFsdGglMjBvZmZpY2V8ZW58MXx8fHwxNzY2OTQ1OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate health"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h2 className="text-slate-900 text-center mb-12">Fordeler for deres bedrift</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-slate-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#127ccb]" size={24} />
                    </div>
                    <h3 className="text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Package Options */}
          <div>
            <h2 className="text-slate-900 text-center mb-12">Våre pakkeløsninger</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border-2 border-transparent hover:border-blue-200 transition-colors">
                <div className="inline-block bg-[#127ccb] text-white px-3 py-1 rounded-full text-sm mb-2">
                  Populær
                </div>
                <h3 className="text-slate-900 mb-4">Basis pakke</h3>
                <div className="text-slate-600 mb-6">
                  <div className="mb-2">✓ Månedlig fysioterapi for ansatte</div>
                  <div className="mb-2">✓ Fleksible tider</div>
                  <div className="mb-2">✓ Rabatterte priser</div>
                </div>
                <p className="text-slate-500 text-sm">Fra 5 ansatte</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border-2 border-transparent hover:border-blue-200 transition-colors">
                <h3 className="text-slate-900 mb-4">Standard pakke</h3>
                <div className="text-slate-600 mb-6">
                  <div className="mb-2">✓ Alt i Basis pakke</div>
                  <div className="mb-2">✓ Ergonomisk veiledning</div>
                  <div className="mb-2">✓ Behandling på arbeidsplassen</div>
                  <div className="mb-2">✓ Prioritert booking</div>
                </div>
                <p className="text-slate-500 text-sm">Fra 10 ansatte</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border-2 border-transparent hover:border-blue-200 transition-colors">
                <h3 className="text-slate-900 mb-4">Premium pakke</h3>
                <div className="text-slate-600 mb-6">
                  <div className="mb-2">✓ Alt i Standard pakke</div>
                  <div className="mb-2">✓ HMS kurs inkludert</div>
                  <div className="mb-2">✓ Helsesjekker</div>
                  <div className="mb-2">✓ Dedikert kontaktperson</div>
                </div>
                <p className="text-slate-500 text-sm">Fra 20 ansatte</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-[#127ccb] p-12 rounded-xl text-center text-white">
            <h2 className="text-white mb-4">Klar til å investere i deres ansatte?</h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kontakt oss i dag for en uforpliktende samtale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#127ccb] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Kontakt oss
              </button>
              <Link
                to="/#kontakt"
                className="inline-block bg-[#0e66a8] hover:bg-[#0a4d7f] text-white px-8 py-3 rounded-lg transition-colors"
              >
                Se kontaktinformasjon
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}