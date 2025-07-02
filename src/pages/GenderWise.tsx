import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { Users } from "lucide-react";
import namesData from "../data/names.json";

const GenderWise = () => {
  const [selectedGender, setSelectedGender] = useState("all");
  
  // Filter names by gender
  const filteredNames = selectedGender === "all" 
    ? namesData.names 
    : namesData.names.filter(name => name.gender === selectedGender);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>लिंगानुसार मराठी नावे - मुलांची आणि मुलींची नावे | Marathi Baby Names by Gender</title>
        <meta name="description" content="मराठी मुलांची आणि मुलींची नावे स्वतंत्रपणे पहा. लिंगानुसार वर्गीकृत केलेली मराठी बाळांची नावे अर्थासह." />
      </Helmet>
      
      <Header />
      
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-10 h-10 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white font-noto-devanagari">
              लिंगानुसार नावे
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 font-noto-devanagari mb-12 max-w-3xl mx-auto leading-relaxed">
            मुलांची आणि मुलींची नावे स्वतंत्रपणे पहा
          </p>

          {/* Gender Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedGender("all")}
              className={`px-8 py-4 rounded-2xl font-noto-devanagari font-semibold text-lg transition-colors ${
                selectedGender === "all" 
                ? "bg-white text-blue-600" 
                : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
            >
              सर्व नावे
            </button>
            <button
              onClick={() => setSelectedGender("male")}
              className={`px-8 py-4 rounded-2xl font-noto-devanagari font-semibold text-lg transition-colors ${
                selectedGender === "male" 
                ? "bg-white text-blue-600" 
                : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
            >
              मुलांची नावे
            </button>
            <button
              onClick={() => setSelectedGender("female")}
              className={`px-8 py-4 rounded-2xl font-noto-devanagari font-semibold text-lg transition-colors ${
                selectedGender === "female" 
                ? "bg-white text-blue-600" 
                : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
            >
              मुलींची नावे
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 font-noto-devanagari mb-4">
              {selectedGender === "male" ? "मुलांची नावे" : 
               selectedGender === "female" ? "मुलींची नावे" : "सर्व नावे"}
            </h2>
            <p className="text-lg text-gray-600 font-noto-devanagari">
              एकूण {filteredNames.length} नावे
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNames.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenderWise;