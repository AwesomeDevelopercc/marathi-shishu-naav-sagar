import { Link } from "react-router-dom";
import { Menu, Home, BookOpen, Users, Heart, TrendingUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg font-noto-devanagari">म</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-blue-800 font-noto-devanagari text-xl">मराठी डेली</span>
              <span className="text-sm text-gray-500 font-noto-sans -mt-1">Marathi Daily</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg transition-colors hover:bg-blue-50 px-4 py-2 rounded-xl">
              <Home className="w-5 h-5 mr-2" />
              मुख्य पान
            </Link>
            <Link to="/names-by-alphabet" className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg transition-colors hover:bg-blue-50 px-4 py-2 rounded-xl">
              <BookOpen className="w-5 h-5 mr-2" />
              अक्षरानुसार नावे
            </Link>
            <Link to="/popular-names" className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg transition-colors hover:bg-blue-50 px-4 py-2 rounded-xl">
              <TrendingUp className="w-5 h-5 mr-2" />
              लोकप्रिय नावे
            </Link>
            <Link to="/gender-wise" className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg transition-colors hover:bg-blue-50 px-4 py-2 rounded-xl">
              <Users className="w-5 h-5 mr-2" />
              लिंगानुसार नावे
            </Link>
            <Link to="/favorites" className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg transition-colors hover:bg-blue-50 px-4 py-2 rounded-xl">
              <Heart className="w-5 h-5 mr-2" />
              आवडते नावे
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden p-3 hover:bg-blue-50 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t-2 border-blue-100 bg-blue-50">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5 mr-3" />
                मुख्य पान
              </Link>
              <Link 
                to="/names-by-alphabet" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 mr-3" />
                अक्षरानुसार नावे
              </Link>
              <Link 
                to="/popular-names" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                लोकप्रिय नावे
              </Link>
              <Link 
                to="/gender-wise" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5 mr-3" />
                लिंगानुसार नावे
              </Link>
              <Link 
                to="/favorites" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-noto-devanagari font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5 mr-3" />
                आवडते नावे
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;