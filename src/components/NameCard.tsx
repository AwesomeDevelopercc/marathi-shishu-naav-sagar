
import { Link } from "react-router-dom";
import { Heart, User } from "lucide-react";

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
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-blue-100 hover:border-blue-200 transition-all duration-300 p-6"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-xl font-semibold text-blue-700 font-noto-devanagari group-hover:text-blue-800 transition-colors">
              {devanagari}
            </h3>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              gender === 'male' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
            }`}>
              <User className="w-3 h-3" />
            </div>
          </div>
          <p className="text-gray-600 font-noto-sans text-sm mb-2">{latin}</p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-pink-50 rounded">
          <Heart className="w-4 h-4 text-gray-400 hover:text-pink-500" />
        </button>
      </div>
      
      <p className="text-gray-700 font-noto-devanagari text-sm leading-relaxed line-clamp-2">
        {meaningMarathi}
      </p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          gender === 'male' 
            ? 'bg-blue-50 text-blue-600 font-noto-devanagari' 
            : 'bg-pink-50 text-pink-600 font-noto-devanagari'
        }`}>
          {gender === 'male' ? 'मुलगा' : 'मुलगी'}
        </span>
        <span className="text-blue-500 text-sm font-noto-devanagari group-hover:text-blue-600 transition-colors">
          तपशील पहा →
        </span>
      </div>
    </Link>
  );
};

export default NameCard;
