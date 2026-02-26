import { History } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Om oss</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Borg Helse tilbyr faglig solid behandling innen fysioterapi og osteopati.
            Vi legger vekt på grundig undersøkelse, individuelt tilpasset behandling og tett oppfølging for best mulig resultat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Åpningstider */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-slate-900 mb-4">Åpningstider</h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between">
                <span>Mandag - Fredag:</span>
                <span>06:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lørdag:</span>
                <span>Stengt (etter avtale)</span>
              </div>
              <div className="flex justify-between">
                <span>Søndag:</span>
                <span>Stengt</span>
              </div>
            </div>
          </div>

          {/* Priser */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-slate-900 mb-4">Priser</h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between">
                <span>30 minutter:</span>
                <span>500 kr</span>
              </div>
              <div className="flex justify-between">
                <span>60 minutter:</span>
                <span>900 kr</span>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                * Refusjon via helseforsikring kan være tilgjengelig
              </p>
            </div>
          </div>
        </div>

        {/* Health Insurance Partners */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-slate-900 mb-6 text-center">Samarbeidspartnere</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-slate-700">Gouda</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-slate-700">Gjensidige</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-slate-700">If Skadeforsikring</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-slate-700">Tryg</p>
            </div>
          </div>
          <p className="text-slate-600 text-center mt-4 text-sm">
            Vi samarbeider med anerkjente forsikringsselskaper for å sikre enkel og trygg behandling.
          </p>
        </div>
      </div>
    </section>
  );
}