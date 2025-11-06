import { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    if (!localStorage.getItem('cookie_consent')) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Set a value in localStorage to hide the banner in the future
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 text-white border-t border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <FaCookieBite className="w-6 h-6 text-gray-400 flex-shrink-0" />
            <p className="text-sm text-gray-300">
              Our website uses cookies to analyze site traffic and improve your experience.
              <a href="/privacy-policy" className="text-white font-semibold underline ml-2">Privacy Policy</a>
            </p>
          </div>
          <button 
            onClick={handleAccept}
            className="bg-white text-black px-6 py-2 text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors flex-shrink-0"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}