
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { TrendingUp } from "lucide-react";
import namesData from "../data/names.json";

const PopularNames = () => {
  // Get the most popular names (first 20 from the dataset)
  const [popularNames] = useState(namesData.names.slice(0, 20));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-10 h-10 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white font-noto-devanagari">
              लोकप्रिय नावे
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 font-noto-devanagari mb-12 max-w-3xl mx-auto leading-relaxed">
            सर्वाधिक शोधली जाणारी आणि लोकप्रिय मराठी नावे
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularNames.map((name) => (
              <NameCard key={name.id} {...name} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PopularNames;
