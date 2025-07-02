
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, User, Heart, Share2, Star, Globe, BookOpen, Crown, Calendar, TrendingUp, History, MapPin, Users, Award } from "lucide-react";
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

        {/* Reduced Size Name Header */}
        <div className="bg-blue-600 rounded-3xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-noto-devanagari">
                  {name.devanagari}
                </h1>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  name.gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
                }`}>
                  <User className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xl text-blue-100 font-noto-sans font-medium">{name.latin}</p>
                <p className="text-base text-blue-200 font-noto-sans">/{name.pronunciation}/</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-blue-100 font-noto-devanagari mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                अर्थ (मराठी)
              </h3>
              <p className="text-white font-noto-devanagari">{name.meaningMarathi}</p>
            </div>
            
            <div>
              <h3 className="font-bold text-blue-100 font-noto-devanagari mb-2 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                अर्थ (English)
              </h3>
              <p className="text-white font-noto-sans">{name.meaningEnglish}</p>
            </div>
          </div>
        </div>

        {/* Name Introduction Section */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 font-noto-devanagari mb-6 flex items-center">
            <Award className="w-7 h-7 mr-3 text-blue-600" />
            {name.devanagari} नावाची संपूर्ण माहिती
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 font-noto-devanagari leading-relaxed mb-4">
              {name.devanagari} हे एक सुंदर मराठी नाव आहे जे {name.gender === 'male' ? 'मुलांसाठी' : 'मुलींसाठी'} वापरले जाते. 
              या नावाचा अर्थ "{name.meaningMarathi}" असा आहे. हे नाव मराठी संस्कृतीत खूप महत्वाचे स्थान धारण करते.
            </p>
            <p className="text-lg text-gray-700 font-noto-devanagari leading-relaxed mb-4">
              {name.devanagari} या नावाची लोकप्रियता {name.popularityTrend === 'rising' ? 'सध्या वाढत आहे' : 'स्थिर आहे'}. 
              हे नाव त्याच्या सुंदर उच्चारामुळे आणि गहन अर्थामुळे पालकांमध्ये लोकप्रिय आहे.
            </p>
            <p className="text-lg text-gray-700 font-noto-devanagari leading-relaxed">
              या नावाचा इतिहास खूप समृद्ध आहे आणि यामध्ये सांस्कृतिक मूल्ये गुंतलेली आहेत. {name.etymology} या संदर्भातून 
              हे नाव आपल्या मुलाला एक विशेष ओळख देऊ शकते.
            </p>
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
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg flex items-center">
                  <History className="w-5 h-5 mr-2 text-orange-600" />
                  व्युत्पत्ती आणि मूळ
                </h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.etymology}</p>
                <p className="text-gray-600 font-noto-devanagari leading-relaxed mt-3 text-sm">
                  या नावाची मूळ संस्कृत भाषेत आहे आणि त्याचा वापर प्राचीन काळापासून होत आला आहे.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  सांस्कृतिक संदर्भ
                </h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.culturalContext}</p>
                <p className="text-gray-600 font-noto-devanagari leading-relaxed mt-3 text-sm">
                  महाराष्ट्रातील विविध भागांमध्ये या नावाचा वेगवेगळा सांस्कृतिक महत्व आहे.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-600" />
                  प्रादेशिक लोकप्रियता
                </h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.regionalPopularity}</p>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <p className="text-blue-800 font-noto-devanagari text-sm font-medium">
                    या नावाची सर्वाधिक लोकप्रियता पुणे, मुंबई आणि नाशिक या शहरांमध्ये आहे.
                  </p>
                </div>
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
                <p className="text-gray-600 font-noto-devanagari text-sm mt-3">
                  या टोपणनावांचा वापर कुटुंबात आणि मित्रांमध्ये प्रेमाने केला जातो.
                </p>
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
                  <p className="text-gray-600 font-noto-devanagari text-sm mt-2">
                    या संख्येचा विशेष ज्योतिषीय महत्व आहे.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">राशी</h3>
                  <p className="text-gray-700 font-noto-devanagari bg-yellow-50 px-4 py-3 rounded-xl font-medium">
                    {name.rashi}
                  </p>
                  <p className="text-gray-600 font-noto-devanagari text-sm mt-2">
                    या राशीतील मुले भाग्यशाली मानली जातात.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">नक्षत्र</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.nakshatra}</p>
                <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 font-noto-devanagari text-sm">
                    या नक्षत्राचा प्रभाव व्यक्तिमत्त्वावर सकारात्मक असतो.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">अधिष्ठाता देवता</h3>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">{name.rulingDeity}</p>
                <p className="text-gray-600 font-noto-devanagari text-sm mt-2">
                  या देवतेची कृपा सदैव या नावाच्या मुलावर राहते.
                </p>
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
                <p className="text-gray-600 font-noto-devanagari text-sm mt-3">
                  इंग्रजीमध्ये या नावाची विविध स्पेलिंग वापरली जाते.
                </p>
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
                <p className="text-gray-600 font-noto-devanagari text-sm mt-3">
                  या नावांचा अर्थ किंवा उच्चार समान आहे.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 font-noto-devanagari mb-3 text-lg">प्रसिद्ध व्यक्ती</h3>
                <div className="space-y-3">
                  {name.notableBearers.map((bearer, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <p className="text-gray-700 font-noto-devanagari">
                        • {bearer}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 font-noto-devanagari text-sm mt-3">
                  हे प्रसिद्ध व्यक्ती या नावाची शोभा वाढवतात.
                </p>
              </div>
            </div>
          </div>

          {/* Literary References */}
          <div className="bg-white rounded-3xl border-2 border-purple-50 p-8">
            <h2 className="text-2xl font-bold text-purple-700 font-noto-devanagari mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              साहित्यिक संदर्भ
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 font-noto-devanagari leading-relaxed text-lg">
                {name.literaryReferences}
              </p>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <h4 className="font-bold text-purple-800 font-noto-devanagari mb-2">साहित्यातील महत्व</h4>
                <p className="text-purple-700 font-noto-devanagari text-sm">
                  मराठी साहित्यात या नावाचा अनेकदा उल्लेख आढळतो. प्रसिद्ध कवी आणि लेखकांनी 
                  त्यांच्या कृतींमध्ये या नावाचा वापर केला आहे.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-800 font-noto-devanagari mb-2">धार्मिक महत्व</h4>
                <p className="text-gray-700 font-noto-devanagari text-sm">
                  या नावाचा धार्मिक ग्रंथांमध्ये विशेष उल्लेख आहे आणि यामुळे या नावाला 
                  आध्यात्मिक महत्व प्राप्त झाले आहे.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Name Usage Tips */}
        <div className="bg-blue-50 rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-800 font-noto-devanagari mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3" />
            नाव निवडताना विचारात घ्या
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">उच्चार सोपा आणि स्पष्ट आहे</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">आडनाव सोबत चांगले जुळते</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">सकारात्मक अर्थ आहे</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">सांस्कृतिक मूल्ये जपतो</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">आधुनिक काळासाठी योग्य</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-noto-devanagari">अनोखेपणा जपतो</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NameDetail;
