import heroImage from 'figma:asset/8830e9357c9076f15fdf3b0f6366f17009df673a.png';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('bestill');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fysioterapi behandling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-900/40 to-slate-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-white mb-6 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl" 
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.3), 1px -1px 0 rgba(0,0,0,0.3), -1px 1px 0 rgba(0,0,0,0.3), 1px 1px 0 rgba(0,0,0,0.3)' }}
        >
          Velkommen til Borg Helse Fysioterapi - Osteopati
        </h1>
        <p 
          className="text-white mb-8 max-w-2xl mx-auto text-xl sm:text-2xl" 
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.3), 1px -1px 0 rgba(0,0,0,0.3), -1px 1px 0 rgba(0,0,0,0.3), 1px 1px 0 rgba(0,0,0,0.3)' }}
        >
          Sliter du med smerter i rygg, nakke eller skuldre?
          Hos oss får du trygg og målrettet behandling tilpasset dine behov.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToBooking}
            className="bg-[#127ccb] hover:bg-[#0e66a8] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            Bestill time nå
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('om-oss');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-white hover:bg-slate-50 text-[#127ccb] border-2 border-[#127ccb] px-8 py-4 rounded-lg transition-all shadow-lg text-lg"
          >
            Les mer om oss
          </button>
        </div>
      </div>
    </section>
  );
}