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
          src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjY4OTY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Massage therapy"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
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