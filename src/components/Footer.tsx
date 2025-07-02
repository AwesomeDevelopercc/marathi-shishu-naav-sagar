
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-noto-devanagari">म</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white font-noto-devanagari text-lg">मराठी डेली</span>
                <span className="text-xs text-gray-400 font-noto-sans -mt-1">Marathi Daily</span>
              </div>
            </div>
            <p className="text-gray-300 font-noto-devanagari">
              मराठी बाळांच्या नावांचा सर्वात मोठा संग्रह. अर्थासह, उच्चारासह आणि सांस्कृतिक माहितीसह.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white font-noto-devanagari text-lg">द्रुत दुवे</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                मुख्य पान
              </Link>
              <Link to="/names-by-alphabet" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                अक्षरानुसार नावे
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white font-noto-devanagari text-lg">माहिती</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                आमच्याबद्दल
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                संपर्क
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                गोपनीयता धोरण
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white font-noto-devanagari transition-colors">
                नियम व अटी
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-noto-devanagari">
            © २०२४ मराठी डेली. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
