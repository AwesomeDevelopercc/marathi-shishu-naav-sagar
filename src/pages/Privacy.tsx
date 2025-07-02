
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4">
              गोपनीयता धोरण
            </h1>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              तुमची माहिती सुरक्षित ठेवणे आमची जबाबदारी आहे
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">प्रस्तावना</h2>
                </div>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  मराठी डेली येथे आम्ही तुमच्या गोपनीयतेचा आदर करतो. हे गोपनीयता धोरण स्पष्ट करते की आम्ही तुमची वैयक्तिक माहिती कशी गोळा करतो, वापरतो आणि संरक्षित करतो. आमच्या वेबसाइटचा वापर करून तुम्ही या धोरणाशी सहमत आहात.
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">माहिती संकलन</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-2">आम्ही खालील माहिती गोळा करतो:</h3>
                    <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                      <li>तुमचे नाव आणि ईमेल पत्ता (संपर्क फॉर्मद्वारे)</li>
                      <li>वेबसाइट वापराची माहिती (कुकीजद्वारे)</li>
                      <li>IP पत्ता आणि ब्राउझर माहिती</li>
                      <li>तुमच्या आवडी आणि प्राधान्यक्रम</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div>
                <div className="flex items-center mb-4">
                  <UserCheck className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">माहितीचा वापर</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                    आम्ही तुमची माहिती खालील उद्देशांसाठी वापरतो:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>वेबसाइटची कार्यक्षमता सुधारण्यासाठी</li>
                    <li>तुमच्या प्रश्नांची उत्तरे देण्यासाठी</li>
                    <li>नवीन सेवा आणि अपडेट्स पाठवण्यासाठी</li>
                    <li>वेबसाइटच्या वापराचे विश्लेषण करण्यासाठी</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">माहिती सुरक्षा</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                    तुमची वैयक्तिक माहिती सुरक्षित ठेवण्यासाठी आम्ही खालील उपाययोजना करतो:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-noto-devanagari space-y-2 ml-4">
                    <li>SSL एन्क्रिप्शन वापरतो</li>
                    <li>सुरक्षित सर्व्हरवर डेटा स्टोर करतो</li>
                    <li>नियमित सुरक्षा ऑडिट करतो</li>
                    <li>फक्त अधिकृत कर्मचाऱ्यांनाच प्रवेश देतो</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">कुकीज धोरण</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  आमची वेबसाइट कुकीज वापरते तुमचा अनुभव सुधारण्यासाठी. कुकीज हे छोटे फायली आहेत ज्या तुमच्या कॉम्प्युटरवर स्टोर होतात आणि वेबसाइट नेव्हिगेशन सुधारण्यास मदत करतात. तुम्ही तुमच्या ब्राउझर सेटिंग्जमधून कुकीज बंद करू शकता.
                </p>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">तृतीय पक्ष सेवा</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  आम्ही तृतीय पक्षांना तुमची वैयक्तिक माहिती विकत नाही किंवा देत नाही. तथापि, आम्ही Google Analytics सारख्या सेवा वापरतो वेबसाइट ट्रॅफिकचे विश्लेषण करण्यासाठी. या सेवांची स्वतःची गोपनीयता धोरणे आहेत.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-4">संपर्क</h2>
                <p className="text-gray-700 font-noto-devanagari leading-relaxed">
                  या गोपनीयता धोरणाबाबत तुमचे काही प्रश्न असतील तर कृपया आम्हाला contact@marathidaily.com वर संपर्क करा.
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

export default Privacy;
