
import { Link } from "react-router-dom";
import { Heart, User, Star } from "lucide-react";

interface NameCardProps {
  id: string;
  latin: string;
  devanagari: string;
  meaningMarathi: string;
  gender: string;
}

const NameCard = ({ id, latin, devanagari, meaningMarathi, gender }: NameCardProps) => {
  return (
    <Link 
      to={`/name/${id}`}
      className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-blue-50 hover:border-blue-200 transition-all duration-300 p-8 transform hover:-translate-y-2"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <h3 className="text-2xl font-bold text-blue-800 font-noto-devanagari group-hover:text-blue-900 transition-colors">
              {devanagari}
            </h3>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
            }`}>
              <User className="w-4 h-4" />
            </div>
          </div>
          <p className="text-gray-600 font-noto-sans text-base mb-4 font-medium">{latin}</p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 hover:bg-pink-50 rounded-xl">
          <Heart className="w-5 h-5 text-gray-400 hover:text-pink-600 transition-colors" />
        </button>
      </div>
      
      <p className="text-gray-700 font-noto-devanagari text-base leading-relaxed mb-6 line-clamp-2">
        {meaningMarathi}
      </p>
      
      <div className="flex items-center justify-between">
        <span className={`px-4 py-2 rounded-xl text-sm font-semibold ${
          gender === 'male' 
            ? 'bg-blue-100 text-blue-800 font-noto-devanagari' 
            : 'bg-pink-100 text-pink-800 font-noto-devanagari'
        }`}>
          {gender === 'male' ? 'मुलगा' : 'मुलगी'}
        </span>
        <div className="flex items-center text-blue-600 font-noto-devanagari group-hover:text-blue-800 transition-colors">
          <span className="text-base font-medium mr-2">तपशील पहा</span>
          <Star className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default NameCard;
