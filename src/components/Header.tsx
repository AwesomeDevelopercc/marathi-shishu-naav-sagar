
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-noto-devanagari">म</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-blue-700 font-noto-devanagari text-lg">मराठी डेली</span>
              <span className="text-xs text-gray-600 font-noto-sans -mt-1">Marathi Daily</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-noto-devanagari font-medium transition-colors">
              मुख्य पान
            </Link>
            <Link to="/names-by-alphabet" className="text-gray-700 hover:text-blue-600 font-noto-devanagari font-medium transition-colors">
              अक्षरानुसार नावे
            </Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            
            <button 
              className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-noto-devanagari font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                मुख्य पान
              </Link>
              <Link 
                to="/names-by-alphabet" 
                className="text-gray-700 hover:text-blue-600 font-noto-devanagari font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                अक्षरानुसार नावे
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
