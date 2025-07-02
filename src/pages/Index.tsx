
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { Search, Sparkles, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-noto-devanagari">
              मराठी बाळांची नावे
            </h1>
            <Sparkles className="w-8 h-8 text-blue-500 ml-3" />
          </div>
          
          <p className="text-xl text-gray-600 font-noto-devanagari mb-8 max-w-2xl mx-auto">
            ६०० हून अधिक सुंदर मराठी नावे अर्थासह, उच्चारासह आणि सांस्कृतिक माहितीसह
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="नाव शोधा..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-noto-devanagari text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">{namesData.names.length}+</div>
              <div className="text-gray-600 font-noto-devanagari">एकूण नावे</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">२४+</div>
              <div className="text-gray-600 font-noto-devanagari">विविध अक्षरे</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">१००%</div>
              <div className="text-gray-600 font-noto-devanagari">अर्थासह</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Names */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari">
                लोकप्रिय नावे
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNames.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>
        </div>
      </section>

      {/* All Names */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 font-noto-devanagari mb-8">
            सर्व नावे
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {names.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>

          {names.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-noto-devanagari text-lg">
                कोणतेही नाव सापडले नाही. कृपया दुसरा शब्द वापरून पहा.
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
