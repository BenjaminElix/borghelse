import historyImage from 'figma:asset/7c8ae5548b4ece0b408ca7bb8097c1a8c7465e35.png';

export function HistorySection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-slate-900 mb-6">Min historie</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={historyImage}
                alt="Borg Helse - Fysioterapeut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}