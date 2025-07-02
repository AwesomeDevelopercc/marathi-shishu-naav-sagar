import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import namesData from "../data/names.json";

const NamesByAlphabet = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>अक्षरानुसार मराठी नावे - मराठी बाळांची नावे अक्षरानुसार | Marathi Baby Names by Alphabet</title>
        <meta name="description" content="मराठी बाळांची नावे अक्षरानुसार शोधा. अ ते ह सर्व अक्षरांची मुलांची आणि मुलींची नावे अर्थासह. अक्षरानुसार नावांची यादी." />
      </Helmet>
      
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-10 h-10 text-blue-600 mr-4" />
            <h1 className="text-5xl font-bold text-blue-800 font-noto-devanagari">
              अक्षरानुसार नावे
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-noto-devanagari">
            तुमच्या आवडत्या अक्षरावर क्लिक करा
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-7xl mx-auto">
          {namesData.alphabets.map((alphabet) => (
            <Link
              key={alphabet.devanagari}
              to={`/alphabet/${alphabet.latin.toLowerCase()}`}
              className="group bg-white hover:bg-blue-600 border-2 border-blue-100 hover:border-blue-600 rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-blue-700 font-noto-devanagari mb-4 group-hover:text-white transition-colors">
                {alphabet.devanagari}
              </div>
              <div className="text-sm text-gray-500 font-noto-sans mb-3 group-hover:text-blue-100 transition-colors">
                {alphabet.latin}
              </div>
              <div className="text-xs text-blue-600 font-noto-devanagari px-3 py-1 bg-blue-50 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all">
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