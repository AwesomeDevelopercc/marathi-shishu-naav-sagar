
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { Search, Sparkles, TrendingUp, Users, BookOpen, Star } from "lucide-react";
import namesData from "../data/names.json";

const Index = () => {
  const [names, setNames] = useState(namesData.names);
  const [featuredNames, setFeaturedNames] = useState(namesData.names.slice(0, 8));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      const filtered = namesData.names.filter(name => 
        name.devanagari.includes(searchTerm) || 
        name.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        name.meaningMarathi.includes(searchTerm)
      );
      setNames(filtered);
    } else {
      setNames(namesData.names);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-10 h-10 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white font-noto-devanagari">
              मराठी बाळांची नावे
            </h1>
            <Sparkles className="w-10 h-10 text-yellow-400 ml-4" />
          </div>
          
          <p className="text-xl text-blue-100 font-noto-devanagari mb-12 max-w-3xl mx-auto leading-relaxed">
            ६०० हून अधिक सुंदर मराठी नावे अर्थासह, उच्चारासह आणि सांस्कृतिक माहितीसह
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative mb-16">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="नाव शोधा..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 font-noto-devanagari text-lg shadow-xl bg-white"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{namesData.names.length}+</div>
              <div className="text-gray-600 font-noto-devanagari font-medium">एकूण नावे</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">२४+</div>
              <div className="text-gray-600 font-noto-devanagari font-medium">विविध अक्षरे</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">१००%</div>
              <div className="text-gray-600 font-noto-devanagari font-medium">अर्थासह</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Names */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-blue-800 font-noto-devanagari">
                लोकप्रिय नावे
              </h2>
            </div>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              सर्वाधिक शोधली जाणारी नावे
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredNames.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>
        </div>
      </section>

      {/* All Names */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 font-noto-devanagari mb-4">
              सर्व नावे
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {names.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>

          {names.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <p className="text-gray-500 font-noto-devanagari text-xl mb-2">
                कोणतेही नाव सापडले नाही
              </p>
              <p className="text-gray-400 font-noto-devanagari">
                कृपया दुसरा शब्द वापरून पहा
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
