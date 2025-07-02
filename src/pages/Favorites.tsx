
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameCard from "../components/NameCard";
import { Heart } from "lucide-react";
import namesData from "../data/names.json";

const Favorites = () => {
  const [favoriteNames, setFavoriteNames] = useState<any[]>([]);

  useEffect(() => {
    // Get favorite names from localStorage (simulated for now)
    const favorites = JSON.parse(localStorage.getItem("favoriteNames") || "[]");
    const favoriteNameObjects = namesData.names.filter(name => 
      favorites.includes(name.id)
    );
    setFavoriteNames(favoriteNameObjects);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-10 h-10 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white font-noto-devanagari">
              आवडते नावे
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 font-noto-devanagari mb-12 max-w-3xl mx-auto leading-relaxed">
            तुमची आवडती नावे येथे जतन केली आहेत
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          {favoriteNames.length > 0 ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-800 font-noto-devanagari mb-4">
                  तुमची आवडती नावे
                </h2>
                <p className="text-lg text-gray-600 font-noto-devanagari">
                  एकूण {favoriteNames.length} नावे
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {favoriteNames.map((name) => (
                  <NameCard key={name.id} {...name} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">💝</div>
              <h2 className="text-3xl font-bold text-gray-800 font-noto-devanagari mb-4">
                अजून कोणतेही आवडते नाव नाही
              </h2>
              <p className="text-gray-500 font-noto-devanagari text-xl mb-8">
                नावांच्या पेजवर जाऊन आवडती नावे जोडा
              </p>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-noto-devanagari font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                नावे पहा
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Favorites;
