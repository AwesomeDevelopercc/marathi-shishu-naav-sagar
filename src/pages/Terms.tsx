
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, AlertCircle, Users, Gavel } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4">
              नियम व अटी
            </h1>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              मराठी डेली वेबसाइट वापरण्याच्या नियम
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">प्रस्तावना</h2>
                </div>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  मराठी डेली वेबसाइटमध्ये आपले स्वागत आहे. या वेबसाइटचा वापर करून तुम्ही खालील नियम व अटींशी सहमत आहात. कृपया या अटी काळजीपूर्वक वाचा. या अटींशी सहमत नसल्यास कृपया आमची वेबसाइट वापरू नका.
                </p>
              </div>

              {/* Website Usage */}
              <div>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">वेबसाइटचा वापर</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 font-noto-devanagari">स्वीकारार्ह वापर:</h3>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>वैयक्तिक आणि शैक्षणिक हेतूसाठी माहिती वापरणे</li>
                    <li>नावांची माहिती मित्र-मैत्रिणींसोबत शेअर करणे</li>
                    <li>वेबसाइटचा योग्य आणि कायदेशीर वापर करणे</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800 font-noto-devanagari mt-6">प्रतिबंधित वापर:</h3>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>आमची सामग्री कॉपी करून व्यावसायिक वापर करणे</li>
                    <li>वेबसाइटला हानी पोहोचवणारी कृती करणे</li>
                    <li>असत्य किंवा भ्रामक माहिती प्रसारित करणे</li>
                    <li>इतर वापरकर्त्यांना त्रास देणे</li>
                  </ul>
                </div>
              </div>

              {/* Content Rights */}
              <div>
                <div className="flex items-center mb-4">
                  <Gavel className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">सामग्रीचे हक्क</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                    या वेबसाइटवरील सर्व सामग्री (मजकूर, प्रतिमा, डिझाइन) मराठी डेली च्या मालकीची आहे. आमची परवानगी शिवाय व्यावसायिक वापरासाठी सामग्री वापरणे प्रतिबंधित आहे.
                  </p>
                  
                  <h3 className="font-semibold text-gray-800 font-noto-devanagari">तुम्ही करू शकता:</h3>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>वैयक्तिक संदर्भासाठी माहिती वापरणे</li>
                    <li>सोशल मीडियावर योग्य श्रेय देऊन शेअर करणे</li>
                  </ul>
                </div>
              </div>

              {/* Accuracy */}
              <div>
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">माहितीची अचूकता</h2>
                </div>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  आम्ही आमच्या वेबसाइटवरील माहिती अचूक ठेवण्याचा प्रयत्न करतो, परंतु त्याची संपूर्ण हमी देत नाही. नावांच्या अर्थ आणि सांस्कृतिक संदर्भांमध्ये भिन्न मते असू शकतात. महत्त्वाच्या निर्णयांसाठी कृपया तज्ञांचा सल्ला घ्या.
                </p>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">जबाबदारीची मर्यादा</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  मराठी डेली या वेबसाइटचा वापर करून होणाऱ्या कोणत्याही प्रत्यक्ष किंवा अप्रत्यक्ष नुकसानीसाठी जबाबदार राहणार नाही. वेबसाइटचा वापर तुमच्या स्वतःच्या जोखमीवर करा.
                </p>
              </div>

              {/* User Conduct */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">वापरकर्त्याचे वर्तन</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                    वेबसाइट वापरताना खालील गोष्टी करू नका:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>आक्षेपार्ह किंवा अपमानजनक भाषा वापरणे</li>
                    <li>वेबसाइटच्या कार्यक्षमतेत व्यत्यय आणणे</li>
                    <li>व्हायरस किंवा हानिकारक कोड अपलोड करणे</li>
                    <li>इतरांची वैयक्तिक माहिती चोरणे</li>
                  </ul>
                </div>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">अटींमध्ये बदल</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  आम्ही या नियम व अटींमध्ये कधीही बदल करू शकतो. बदल झाल्यानंतर वेबसाइटचा वापर केल्यास तुम्ही नवीन अटींशी सहमत आहात असे मानले जाईल. नियमित अटी तपासा.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">संपर्क</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  या नियम व अटींबाबत प्रश्न असतील तर आम्हाला contact@marathidaily.com वर संपर्क करा.
                </p>
              </div>

              {/* Last Updated */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700 font-noto-devanagari">
                  <strong>शेवटचे अपडेट:</strong> १ जानेवारी २०२४
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
