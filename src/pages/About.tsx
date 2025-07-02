
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Users, Heart, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4">
              आमच्याबद्दल
            </h1>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              मराठी संस्कृतीतील सुंदर नावांचा संग्रह
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-pink-500" />
                  आमचे ध्येय
                </h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  मराठी डेली हे मराठी संस्कृतीतील सुंदर आणि अर्थपूर्ण नावांचा एक व्यापक संग्रह आहे. आमचे उद्दिष्ट आहे पालकांना त्यांच्या मुलांसाठी योग्य आणि सांस्कृतिकदृष्ट्या समृद्ध नाव निवडण्यास मदत करणे. प्रत्येक नावाचा खोल अर्थ, सांस्कृतिक महत्त्व आणि ऐतिहासिक संदर्भ यासह संपूर्ण माहिती आम्ही प्रदान करतो.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-yellow-500" />
                  आमची वैशिष्ट्ये
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">६०० हून अधिक मराठी नावे</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">प्रत्येक नावाचा विस्तृत अर्थ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">उच्चार मार्गदर्शन</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">सांस्कृतिक आणि ऐतिहासिक संदर्भ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">ज्योतिषीय माहिती</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-noto-devanagari">मोबाइल-फ्रेंडली डिझाइन</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-500" />
                  आमची टीम
                </h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  आमची टीम मराठी भाषा आणि संस्कृतीच्या प्रेमी तज्ञांची आहे. आम्ही भाषाशास्त्रज्ञ, संस्कृतीविद् आणि तंत्रज्ञान तज्ञांचा समावेश करून हा संग्रह तयार केला आहे. प्रत्येक नावाची माहिती ग्रंथांमधून संशोधन करून आणि तज्ञांच्या सल्ल्याने तयार केली गेली आहे.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">600+</div>
              <div className="text-gray-600 font-noto-devanagari">नावे</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24+</div>
              <div className="text-gray-600 font-noto-devanagari">अक्षरे</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-noto-devanagari">अर्थासह</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-noto-devanagari">उपलब्ध</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
