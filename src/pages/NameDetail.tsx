
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, User, Heart, Share2, Star, Globe, BookOpen, Crown, Calendar, TrendingUp } from "lucide-react";
import namesData from "../data/names.json";

const NameDetail = () => {
  const { id } = useParams();
  const name = namesData.names.find(n => n.id === id);

  if (!name) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-500 font-noto-devanagari">
            नाव सापडले नाही
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-700 font-noto-devanagari transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            मुख्य पान
          </Link>
          <span className="mx-3 text-gray-400">/</span>
          <span className="text-gray-600 font-noto-devanagari">
            {name.devanagari}
          </span>
        </div>

        {/* Name Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-noto-devanagari">
                  {name.devanagari}
                </h1>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  name.gender === 'male' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
                }`}>
                  <User className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xl text-gray-600 font-noto-sans">{name.latin}</p>
                <p className="text-lg text-gray-500 font-noto-sans">/{name.pronunciation}/</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="p-3 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors">
                <Heart className="w-5 h-5 text-pink-500" />
              </button>
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                <Share2 className="w-5 h-5 text-blue-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-700 font-noto-devanagari mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  अर्थ (मराठी)
                </h3>
                <p className="text-gray-700 font-noto-devanagari">{name.meaningMarathi}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-700 font-noto-devanagari mb-2 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  अर्थ (English)
                </h3>
                <p className="text-gray-700 font-noto-sans">{name.meaningEnglish}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-700 font-noto-devanagari mb-2">लिंग</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  name.gender === 'male' 
                    ? 'bg-blue-50 text-blue-600 font-noto-devanagari' 
                    : 'bg-pink-50 text-pink-600 font-noto-devanagari'
                }`}>
                  {name.gender === 'male' ? 'मुलगा' : 'मुलगी'}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700 font-noto-devanagari mb-2">लोकप्रियता</h3>
                <div className="flex items-center space-x-2">
                  <TrendingUp className={`w-4 h-4 ${
                    name.popularityTrend === 'rising' ? 'text-green-500' : 'text-yellow-500'
                  }`} />
                  <span className="text-gray-700 font-noto-devanagari">
                    {name.popularityTrend === 'rising' ? 'वाढत आहे' : 'स्थिर'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cultural Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-700 font-noto-devanagari mb-6 flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              सांस्कृतिक माहिती
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">व्युत्पत्ती</h3>
                <p className="text-gray-700 font-noto-devanagari">{name.etymology}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">सांस्कृतिक संदर्भ</h3>
                <p className="text-gray-700 font-noto-devanagari">{name.culturalContext}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">प्रादेशिक लोकप्रियता</h3>
                <p className="text-gray-700 font-noto-devanagari">{name.regionalPopularity}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">टोपणनावे</h3>
                <div className="flex flex-wrap gap-2">
                  {name.nicknames.map((nickname, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-noto-devanagari">
                      {nickname}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Astrological Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-700 font-noto-devanagari mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              ज्योतिषीय माहिती
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">अंकशास्त्र</h3>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{name.numerology}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">राशी</h3>
                  <p className="text-gray-700 font-noto-devanagari bg-yellow-50 px-3 py-2 rounded-lg">
                    {name.rashi}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">नक्षत्र</h3>
                <p className="text-gray-700 font-noto-devanagari">{name.nakshatra}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">अधिष्ठाता देवता</h3>
                <p className="text-gray-700 font-noto-devanagari">{name.rulingDeity}</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-700 font-noto-devanagari mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              अतिरिक्त माहिती
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">भिन्न स्पेलिंग</h3>
                <div className="flex flex-wrap gap-2">
                  {name.variants.map((variant, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-noto-sans">
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">समान नावे</h3>
                <div className="flex flex-wrap gap-2">
                  {name.similarNames.map((similar, index) => (
                    <span key={index} className="px-2 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-noto-devanagari">
                      {similar}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">प्रसिद्ध व्यक्ती</h3>
                <div className="space-y-2">
                  {name.notableBearers.map((bearer, index) => (
                    <p key={index} className="text-gray-700 font-noto-devanagari text-sm">
                      • {bearer}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Literary References */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-700 font-noto-devanagari mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              साहित्यिक संदर्भ
            </h2>
            
            <p className="text-gray-700 font-noto-devanagari">
              {name.literaryReferences}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NameDetail;
