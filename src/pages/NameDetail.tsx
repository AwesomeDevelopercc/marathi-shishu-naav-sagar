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
      <div className="min-h-screen bg-white">
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-12">
          <Link 
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800 font-noto-devanagari transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            मुख्य पान
          </Link>
          <span className="mx-4 text-gray-400">/</span>
          <span className="text-gray-600 font-noto-devanagari font-medium">
            {name.devanagari}
          </span>
        </div>

        {/* Name Header */}
        <div className="bg-blue-600 rounded-3xl p-12 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center space-x-6 mb-6">
                <h1 className="text-5xl md:text-6xl font-bold font-noto-devanagari">
                  {name.devanagari}
                </h1>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  name.gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
                }`}>
                  <User className="w-8 h-8" />
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-2xl text-blue-100 font-noto-sans font-medium">{name.latin}</p>
                <p className="text-lg text-blue-200 font-noto-sans">/{name.pronunciation}/</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <button className="p-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all">
                <Heart className="w-6 h-6 text-white" />
              </button>
              <button className="p-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all">
                <Share2 className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-100 font-noto-devanagari mb-3 flex items-center text-lg">
                  <BookOpen className="w-5 h-5 mr-3" />
                  अर्थ (मराठी)
                </h3>
                <p className="text-white font-noto-devanagari text-lg">{name.meaningMarathi}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-blue-100 font-noto-devanagari mb-3 flex items-center text-lg">
                  <Globe className="w-5 h-5 mr-3" />
                  अर्थ (English)
                </h3>
                <p className="text-white font-noto-sans text-lg">{name.meaningEnglish}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-100 font-noto-devanagari mb-3 text-lg">लिंग</h3>
                <span className={`px-4 py-2 rounded-xl text-base font-semibold ${
                  name.gender === 'male' 
                    ? 'bg-blue-100 text-blue-800 font-noto-devanagari' 
                    : 'bg-pink-100 text-pink-800 font-noto-devanagari'
                }`}>
                  {name.gender === 'male' ? 'मुलगा' : 'मुलगी'}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-blue-100 font-noto-devanagari mb-3 text-lg">लोकप्रियता</h3>
                <div className="flex items-center space-x-3">
                  <TrendingUp className={`w-5 h-5 ${
                    name.popularityTrend === 'rising' ? 'text-green-400' : 'text-yellow-400'
                  }`} />
                  <span className="text-white font-noto-devanagari text-lg">
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
          <div className="bg-white rounded-3xl border-2 border-blue-50 p-8">
            <h2 className="text-2xl font-bold text-blue-800 font-noto-devanagari mb-8 flex items-center">
              <Crown className="w-6 h-6 mr-3" />
              सांस्कृतिक माहिती
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">व्युत्पत्ती</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.etymology}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">सांस्कृतिक संदर्भ</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.culturalContext}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">प्रादेशिक लोकप्रियता</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.regionalPopularity}</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">टोपणनावे</h3>
                <div className="flex flex-wrap gap-3">
                  {name.nicknames.map((nickname, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-noto-devanagari font-medium">
                      {nickname}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Astrological Information */}
          <div className="bg-white rounded-3xl border-2 border-yellow-50 p-8">
            <h2 className="text-2xl font-bold text-yellow-700 font-noto-devanagari mb-8 flex items-center">
              <Star className="w-6 h-6 mr-3" />
              ज्योतिषीय माहिती
            </h2>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">अंकशास्त्र</h3>
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <span className="text-yellow-700 font-bold text-2xl">{name.numerology}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">राशी</h3>
                  <p className="text-gray-700 font-noto-devanagari bg-yellow-50 px-4 py-3 rounded-xl font-medium">
                    {name.rashi}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">नक्षत्र</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.nakshatra}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">अधिष्ठाता देवता</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.rulingDeity}</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-3xl border-2 border-green-50 p-8">
            <h2 className="text-2xl font-bold text-green-700 font-noto-devanagari mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              अतिरिक्त माहिती
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">भिन्न स्पेलिंग</h3>
                <div className="flex flex-wrap gap-3">
                  {name.variants.map((variant, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-noto-sans font-medium">
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">समान नावे</h3>
                <div className="flex flex-wrap gap-3">
                  {name.similarNames.map((similar, index) => (
                    <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-noto-devanagari font-medium">
                      {similar}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">प्रसिद्ध व्यक्ती</h3>
                <div className="space-y-3">
                  {name.notableBearers.map((bearer, index) => (
                    <p key={index} className="text-gray-700 font-noto-devanagari">
                      • {bearer}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Literary References */}
          <div className="bg-white rounded-3xl border-2 border-purple-50 p-8">
            <h2 className="text-2xl font-bold text-purple-700 font-noto-devanagari mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              साहित्यिक संदर्भ
            </h2>
            
            <p className="text-gray-700 font-noto-devanagari leading-relaxed text-lg">
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
