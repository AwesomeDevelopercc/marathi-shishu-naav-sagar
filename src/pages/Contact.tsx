
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4">
              संपर्क
            </h1>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              आम्हाला तुमचे मत आणि सूचना कळवा
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
              <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-6">
                संदेश पाठवा
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-noto-devanagari mb-2">
                    नाव
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-noto-devanagari"
                    placeholder="तुमचे नाव लिहा"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-noto-devanagari mb-2">
                    ईमेल
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-noto-sans"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-noto-devanagari mb-2">
                    विषय
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-noto-devanagari"
                    placeholder="संदेशाचा विषय"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-noto-devanagari mb-2">
                    संदेश
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-noto-devanagari resize-none"
                    placeholder="तुमचा संदेश येथे लिहा..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 font-noto-devanagari"
                >
                  <Send className="w-4 h-4" />
                  <span>संदेश पाठवा</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
                <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-6">
                  संपर्क माहिती
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-1">ईमेल</h3>
                      <p className="text-gray-600 font-noto-sans">contact@marathidaily.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-1">फोन</h3>
                      <p className="text-gray-600 font-noto-sans">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-noto-devanagari mb-1">पत्ता</h3>
                      <p className="text-gray-600 font-noto-devanagari">मुंबई, महाराष्ट्र, भारत</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-noto-devanagari mb-4">
                  आम्हाला मदत करा
                </h3>
                <p className="font-noto-devanagari leading-relaxed">
                  तुम्हाला काही नवीन नावे माहिती असतील किंवा आमच्या संग्रहात काही सुधारणा करायच्या असतील तर कृपया आम्हाला कळवा. तुमच्या सहकार्याने आम्ही हा संग्रह आणखी समृद्ध करू शकतो.
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

export default Contact;
