
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { ArrowLeft } from "lucide-react";
import namesData from "../data/names.json";

const AlphabetNames = () => {
  const { letter } = useParams();
  
  const alphabet = namesData.alphabets.find(
    a => a.latin.toLowerCase() === letter?.toLowerCase()
  );
  
  const names = alphabet 
    ? namesData.names.filter(name => alphabet.names.includes(name.id))
    : [];

  if (!alphabet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-500 font-noto-devanagari">
            अक्षर सापडले नाही
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
            to="/names-by-alphabet"
            className="flex items-center text-blue-600 hover:text-blue-700 font-noto-devanagari transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            अक्षरानुसार नावे
          </Link>
          <span className="mx-3 text-gray-400">/</span>
          <span className="text-gray-600 font-noto-devanagari">
            {alphabet.devanagari} अक्षराची नावे
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white border border-blue-200 rounded-2xl p-8 mb-6 shadow-sm">
            <div className="text-6xl font-bold text-blue-600 font-noto-devanagari">
              {alphabet.devanagari}
            </div>
            <div className="text-lg text-gray-500 font-noto-sans mt-2">
              {alphabet.latin}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-blue-700 font-noto-devanagari mb-4">
            {alphabet.devanagari} अक्षराची नावे
          </h1>
          <p className="text-lg text-gray-600 font-noto-devanagari">
            {names.length} नावे उपलब्ध
          </p>
        </div>

        {/* Names Grid */}
        {names.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {names.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-500 font-noto-devanagari text-lg">
              या अक्षराची नावे अद्याप जोडली गेली नाहीत.
            </p>
            <p className="text-gray-400 font-noto-devanagari mt-2">
              कृपया लवकरच परत या!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AlphabetNames;
