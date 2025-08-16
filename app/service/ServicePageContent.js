// app/service/ServicePageContent.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function ServicePageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const cars = [
    { id: 1, name: "Dodge Charger R/T (1970)", character: "Dominic Toretto", price: 150000, image: "https://th.bing.com/th/id/R.696c432268ab8d94b4aa9c149b29f4a1?rik=NkAmeeATLuJqaQ&riu=http%3a%2f%2fimages.wikia.com%2fspdofvengeance%2fimages%2f0%2f01%2fDodge-Charger_RT_1970.jpg&ehk=flQZJ3nVn88EAIPBu9JQ4JULMa5az2Ory%2bNSLDoOMes%3d&risl=&pid=ImgRaw&r=0", description: "Classic American muscle car driven by Dominic Toretto." },
    { id: 2, name: "Nissan Skyline GT-R R34", character: "Brian O’Conner", price: 200000, image: "https://tse3.mm.bing.net/th/id/OIP.td-hpEbwcLLpK4gMg6V_FQHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Japanese sports car iconic for high-speed chases." },
    { id: 3, name: "Mazda RX-7 Veilside", character: "Han Lue", price: 120000, image: "https://i.redd.it/j3r4noy5ccu41.jpg", description: "Rotary-powered beauty with unique styling." },
    { id: 4, name: "Toyota Supra MK4", character: "Brian O’Conner", price: 180000, image: "https://i.pinimg.com/736x/e0/df/4a/e0df4af47d884f17c0f1b1fc1834e4df--buy-toyota-toyota-supra.jpg", description: "Legendary Japanese tuner car loved by fans worldwide." },
    { id: 5, name: "Chevrolet Chevelle SS (1970)", character: "Letty Ortiz", price: 160000, image: "https://cdn.dealeraccelerate.com/coyote/1/772/64478/1920x1440/1970-chevrolet-chevelle-ss", description: "Letty’s classic muscle car, powerful and stylish." },
    { id: 6, name: "Ford GT40", character: "Roman Pearce", price: 220000, image: "https://th.bing.com/th/id/R.a959f22f8cebfa18bad72102af4053b2?rik=ZNifsQBuxMILNw&pid=ImgRaw&r=0", description: "Roman’s high-speed racing machine." },
    { id: 7, name: "Lamborghini Murciélago", character: "Tej Parker", price: 250000, image: "https://www.classicdriver.com/sites/default/files/users/102307/cars_images/feed_537423/b55eedcb73b11b431920971b68aa597a.jpeg", description: "Luxury sports car driven by Tej." },
    { id: 8, name: "Honda S2000", character: "Mia Toretto", price: 90000, image: "https://motor-fan.jp/mf/wp-content/uploads/sites/4/2024/04/20240415_honda_s2000_01.jpg", description: "Mia’s sporty and stylish roadster." },
    { id: 9, name: "BMW M3 E46", character: "Sean Boswell", price: 130000, image: "https://preview.redd.it/d5zkxc2hp8s91.jpg?auto=webp&s=88db224ff10bd5d9092614251cfeb453b2c165ad", description: "High-performance tuner car loved by street racers." },
    { id: 10, name: "Subaru Impreza WRX STI", character: "Mitsubishi Racer", price: 125000, image: "https://tse3.mm.bing.net/th/id/OIP.OShYrP__pWc7vi0nOfQXKQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Iconic rally-inspired sports car." },
    { id: 11, name: "Mitsubishi Lancer Evolution X", character: "Twins Racer", price: 140000, image: "https://images.pistonheads.com/nimg/46165/M1.jpg", description: "Fast and agile Japanese sports sedan." },
    { id: 12, name: "Ford Mustang GT", character: "Luke Hobbs", price: 160000, image: "https://tse1.mm.bing.net/th/id/OIP.0TbDYICW-l-k1bzT8YfFhAHaE4?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Classic American muscle with modern power." },
    { id: 13, name: "Chevrolet Corvette C7", character: "Deckard Shaw", price: 210000, image: "https://th.bing.com/th/id/R.b30957accb46adc4eac5adf5c3ab005c?rik=1Wqj2glSxUsfmA&pid=ImgRaw&r=0", description: "American supercar with sharp handling." },
    { id: 14, name: "Pagani Huayra", character: "Mr. Nobody", price: 500000, image: "https://tse4.mm.bing.net/th/id/OIP.vYrh5tu-qclhT2nIGwAi0gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Ultra-luxury hypercar with extreme speed." },
    { id: 15, name: "Audi R8", character: "Hobbs Team", price: 240000, image: "https://tse1.mm.bing.net/th/id/OIP.MKXrF81RTvHMPz0ajvbZsAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Luxury sports car with powerful V10 engine." },
  ];

  const [filterCharacter, setFilterCharacter] = useState("All");
  const [sortPrice, setSortPrice] = useState("none");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredCars = useMemo(() => {
    return cars
      .filter((car) => {
        const matchesCharacter = filterCharacter === "All" || car.character === filterCharacter;
        const matchesSearch = car.name.toLowerCase().includes(searchQuery) || car.character.toLowerCase().includes(searchQuery);
        return matchesCharacter && matchesSearch;
      })
      .sort((a, b) => {
        if (sortPrice === "asc") return a.price - b.price;
        if (sortPrice === "desc") return b.price - a.price;
        return 0;
      });
  }, [cars, filterCharacter, sortPrice, searchQuery]);

  const characters = ["All", ...new Set(cars.map((c) => c.character))];
  const selectedCar = selectedIndex !== null ? filteredCars[selectedIndex] : null;

  const nextCar = () => setSelectedIndex((prev) => (prev + 1) % filteredCars.length);
  const prevCar = () => setSelectedIndex((prev) => (prev - 1 + filteredCars.length) % filteredCars.length);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://64.media.tumblr.com/71d57427121375eb9d09d6402abce356/408b809db59ae567-0f/s2048x3072/56c05856bdae82185e8c015a6e141d591d457fc4.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-red-500 drop-shadow-lg">Fast Cars Showcase</h1>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div>
            <label className="mr-2 font-semibold">Character:</label>
            <select value={filterCharacter} onChange={(e) => setFilterCharacter(e.target.value)} className="bg-gray-800 text-white px-3 py-2 rounded-lg">
              {characters.map((char, i) => <option key={i} value={char}>{char}</option>)}
            </select>
          </div>
          <div>
            <label className="mr-2 font-semibold">Sort by Price:</label>
            <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)} className="bg-gray-800 text-white px-3 py-2 rounded-lg">
              <option value="none">None</option>
              <option value="asc">Low → High</option>
              <option value="desc">High → Low</option>
            </select>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={car.image} alt={car.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-gray-300">Driven by {car.character}</p>
                <p className="text-red-500 font-bold mt-2">${car.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div className="fixed inset-0 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 backdrop-blur-md bg-black/70" onClick={() => setSelectedIndex(null)}></div>
            <motion.div className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full text-center relative z-10">
              <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-red-500 font-bold text-xl">×</button>
              <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">{selectedCar.name}</h2>
              <p className="text-gray-300 mb-1">Driven by {selectedCar.character}</p>
              <p className="text-red-500 font-bold mb-4">${selectedCar.price.toLocaleString()}</p>
              <p className="text-gray-200 mb-4">{selectedCar.description}</p>
              <div className="flex justify-between mt-4">
                <button onClick={prevCar} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-xl font-semibold">← Previous</button>
                <button onClick={nextCar} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-xl font-semibold">Next →</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
