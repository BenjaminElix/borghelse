import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "figma:asset/8f434f19c1e4360bc0f5c7c3d93f78569810ffff.png";

export function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] =
    useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-3 mb-4"
              >
                <img
                  src={logoImage}
                  alt="Borg Helse logo"
                  className="h-30 w-auto"
                />
              </Link>
              <p className="text-sm">
                Borg Helse tilbyr fysioterapi og osteopati med fokus på kvalitet, trygghet og individuell oppfølging.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Hurtiglenker</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("om-oss")}
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    Om oss
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tjenester")}
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    Tjenester
                  </button>
                </li>
                <li>
                  <Link
                    to="/bedriftshelse"
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    Bedriftshelse
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("kontakt")}
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+4796129130"
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    961 29 130 eller 924 54 797
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:erik@borghelse.no"
                    className="hover:text-[#127ccb] transition-colors"
                  >
                    erik@borghelse.no
                  </a>
                </li>
                <li className="text-sm">
                  Torggata 12
                  <br />
                  1707 Sarpsborg
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-white mb-4">Åpningstider</h4>
              <ul className="space-y-2 text-sm">
                <li>Mandag-Fredag: 06:00 - 15:00</li>
                <li>Lørdag: Etter avtale</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div>
                © {new Date().getFullYear()} Borg Helse Fysioterapi - Osteopati. Alle rettigheter reservert.
              </div>
              <div className="flex gap-6">
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="hover:text-[#127ccb] transition-colors"
                >
                  Personvern & GDPR
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("cookieConsent");
                    window.location.reload();
                  }}
                  className="hover:text-[#127ccb] transition-colors"
                >
                  Cookie innstillinger
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl max-h-[80vh] overflow-y-auto p-8">
            <h2 className="text-slate-900 mb-6">
              Personvern & GDPR
            </h2>

            <div className="space-y-4 text-slate-600">
              <section>
                <h3 className="text-slate-900 mb-2">
                  Innsamling av personopplysninger
                </h3>
                <p>
                  Vi samler kun inn personopplysninger som er nødvendige for å kunne tilby helsetjenester og følge opp våre pasienter. Dette kan inkludere:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Navn</li>
                  <li>Telefonnummer</li>
                  <li>E-postadresse</li>
                  <li>Fødselsdato</li>
                  <li>Helseopplysninger relatert til behandling</li>
                  <li>Opplysninger gitt i forbindelse med timebestilling</li>
                </ul>
                <p className="mt-2">
                  Timebestilling skjer via PatientSky, som behandler opplysninger i henhold til egne personvernvilkår.
                </p>
              </section>

              <section>
                <h3 className="text-slate-900 mb-2">
                  Bruk av informasjon
                </h3>
                <p>Personopplysninger brukes til:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Administrasjon av timebestilling</li>
                  <li>Gjennomføring av behandling</li>
                  <li>Journalføring i henhold til helsepersonelloven</li>
                  <li>Fakturering og oppgjør</li>
                  <li>Kommunikasjon med pasient</li>
                </ul>
                <p className="mt-2">
                  Opplysningene brukes ikke til markedsføring uten samtykke.
                </p>
              </section>

              <section>
                <h3 className="text-slate-900 mb-2">
                  Deling av informasjon
                </h3>
                <p>
                  Vi deler kun personopplysninger når det er nødvendig og lovpålagt, for eksempel:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Med samarbeidende helsepersonell (ved samtykke)</li>
                  <li>Med forsikringsselskap ved behandlingsforsikring</li>
                  <li>Der lov krever det</li>
                </ul>
                <p className="mt-2">
                  Vi selger aldri personopplysninger til tredjepart.
                </p>
              </section>

              <section>
                <h3 className="text-slate-900 mb-2">
                  Dine rettigheter
                </h3>
                <p>Du har rett til:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Innsyn i egne opplysninger</li>
                  <li>Retting av feilaktige opplysninger</li>
                  <li>Begrensning av behandling</li>
                  <li>Sletting der lovverket tillater det</li>
                  <li>Å trekke tilbake samtykke</li>
                </ul>
                <p className="mt-2">
                  Helseopplysninger lagres i henhold til lovpålagte krav.
                </p>
              </section>

              <section>
                <h3 className="text-slate-900 mb-2">
                  Sikkerhet
                </h3>
                <p>
                  Vi benytter sikre journalsystemer og digitale løsninger for å beskytte dine personopplysninger mot uautorisert tilgang, endring eller tap.
                </p>
              </section>

              <section>
                <h3 className="text-slate-900 mb-2">
                  Kontakt oss
                </h3>
                <p>
                  Har du spørsmål om personvern eller ønsker innsyn i dine opplysninger?
                  Kontakt oss på:
                </p>
                <p className="mt-2">
                  <a href="mailto:erik@borghelse.no" className="text-[#127ccb] hover:underline">erik@borghelse.no</a>
                </p>
                <p>
                  <a href="tel:+4796129130" className="text-[#127ccb] hover:underline">961 29 130</a> eller <a href="tel:+4792454797" className="text-[#127ccb] hover:underline">924 54 797</a>
                </p>
              </section>
            </div>

            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="mt-6 bg-[#127ccb] hover:bg-[#0e66a8] text-white px-6 py-2 rounded-lg transition-colors"
            >
              Lukk
            </button>
          </div>
        </div>
      )}
    </>
  );
}