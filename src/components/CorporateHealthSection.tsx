import { Building2, Users, Calendar, TrendingUp } from 'lucide-react';

export function CorporateHealthSection() {
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
    <section id="bedriftshelse" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-slate-900 mb-6">Bedriftshelse tjenester</h2>
            <p className="text-slate-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud 
              exercitation ullamco.
            </p>
            <p className="text-slate-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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

        {/* Package Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border-2 border-transparent hover:border-blue-200 transition-colors">
            <h3 className="text-slate-900 mb-4">Basis pakke</h3>
            <div className="text-slate-600 mb-6">
              <div className="mb-2">✓ Månedlig fysioterapi for ansatte</div>
              <div className="mb-2">✓ Fleksible tider</div>
              <div className="mb-2">✓ Rabatterte priser</div>
            </div>
            <p className="text-slate-500 text-sm">Fra 5 ansatte</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200">
            <div className="inline-block bg-[#127ccb] text-white px-3 py-1 rounded-full text-sm mb-2">
              Populær
            </div>
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
    </section>
  );
}