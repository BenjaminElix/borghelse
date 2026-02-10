import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Cookie className="text-[#127ccb]" size={24} />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-slate-900 mb-2">Vi bruker informasjonskapsler</h3>
              <p className="text-slate-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onDecline}
                className="px-6 py-2.5 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Avslå
              </button>
              <button
                onClick={onAccept}
                className="px-6 py-2.5 bg-[#127ccb] hover:bg-[#0e66a8] text-white rounded-lg transition-colors"
              >
                Godta alle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}