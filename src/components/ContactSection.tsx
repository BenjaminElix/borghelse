import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Kontakt oss</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-slate-900 mb-6">Kontaktinformasjon</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#127ccb]" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-600">Telefon</div>
                    <a href="tel:+4712345678" className="text-slate-900 hover:text-[#127ccb]">
                      +47 123 45 678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#127ccb]" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-600">E-post</div>
                    <a href="mailto:post@borghelse.no" className="text-slate-900 hover:text-[#127ccb]">
                      post@borghelse.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#127ccb]" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-600">Adresse</div>
                    <div className="text-slate-900">
                      Torggata 12<br />
                      1707 Sarpsborg
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#127ccb]" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-600">Åpningstider</div>
                    <div className="text-slate-900">
                      Man-Fre: 09:00 - 18:00<br />
                      Lør: 10:00 - 15:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div id="bestill" className="bg-[#127ccb] p-8 rounded-xl text-white">
              <h3 className="text-white mb-4">Bestill time</h3>
              <p className="mb-6 text-blue-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="https://patientsky.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#127ccb] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Gå til bestilling →
              </a>
              <p className="mt-4 text-sm text-blue-100">
                Du vil bli videresendt til PatientSky for sikker timebestilling
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="bg-white p-4 rounded-xl shadow-sm h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.0425688487147!2d11.106941976838447!3d59.27925327461032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464413e9c3f5b2e9%3A0x5c2f8f4e6d5e8f8f!2sTorggata%2012%2C%201707%20Sarpsborg!5e0!3m2!1sno!2sno!4v1234567890123!5m2!1sno!2sno"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px', minHeight: '468px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}