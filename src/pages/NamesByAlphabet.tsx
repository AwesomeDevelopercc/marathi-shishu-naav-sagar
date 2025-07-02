
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import namesData from "../data/names.json";

const NamesByAlphabet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4">
            अक्षरानुसार नावे
          </h1>
          <p className="text-lg text-gray-600 font-noto-devanagari">
            तुमच्या आवडत्या अक्षरावर क्लिक करा
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
          {namesData.alphabets.map((alphabet) => (
            <Link
              key={alphabet.devanagari}
              to={`/alphabet/${alphabet.latin.toLowerCase()}`}
              className="group bg-white hover:bg-blue-50 border border-blue-100 hover:border-blue-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="text-3xl font-bold text-blue-600 font-noto-devanagari mb-2 group-hover:text-blue-700 transition-colors">
                {alphabet.devanagari}
              </div>
              <div className="text-sm text-gray-500 font-noto-sans">
                {alphabet.latin}
              </div>
              <div className="text-xs text-blue-500 font-noto-devanagari mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {alphabet.names.length} नावे
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NamesByAlphabet;
