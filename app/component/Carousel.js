'use client'
import { useState, useEffect } from 'react';

export default function FastFuriousCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const movies = [
    {
      id: 1,
      title: "เร็ว แรงทะลุนรก (2001)",
      description: "จุดเริ่มต้นของทุกสิ่ง การแข่งรถใต้ดิน สายสัมพันธ์ครอบครัว และการกำเนิดของแฟรนไชส์ในตำนาน",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      title: "เร็ว 5 แรงทะลุไมล์ (2011)",
      description: "ทีมพยายามดำเนินการปล้นครั้งใหญ่ที่สุดในริโอ เดอ จาเนโร ขณะถูกหน่วยงานสหพันธรัฐตามล่า",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      title: "เร็ว 7 แรงทะลุนรก (2015)",
      description: "ภาคที่เป็นการน้อมราลึกถึงพอล วอล์คเกอร์ และภาคที่เต็มไปด้วยอารมณ์มากที่สุดของแฟรนไชส์",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-6 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/6 w-14 h-7 bg-pink-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.7), rgba(147, 51, 234, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&q=80')`
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl tracking-wider">
            Fast And Furious
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            อะไรจะอยู่ในห้องเครื่องไม่สำคัญ สิ่งที่สำคัญที่สุดคือใครอยู่หลังพวงมาลัย
          </p>
          <button 
            onClick={() => document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            สำรวจแฟรนไชส์
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
            เกี่ยวกับแฟรนไชส์
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-pink-400 font-bold">The Fast & Furious</span> เริ่มต้นในปี 2001 
                จากภาพยนตร์แอ็คชั่นเรื่องแรกที่เน้นการแข่งรถใต้ดิน กลายเป็นหนึ่งในแฟรนไชส์ภาพยนตร์
                ที่ประสบความสำเร็จมากที่สุดในโลก
              </p>
              <p className="text-lg leading-relaxed">
                จากเรื่องราวของ <span className="text-purple-400 font-semibold">Dominic Toretto</span> และ 
                <span className="text-purple-400 font-semibold"> Brian O'Conner</span> ที่เริ่มต้นด้วยการแข่งรถสตรีท
                จนกลายเป็นภารกิจระดับโลกที่ต้องเผชิญกับอาชญากรระหว่างประเทศ
              </p>
              <p className="text-lg leading-relaxed">
                ตลอด 22 ปี แฟรนไชส์นี้ได้สร้างมาตรฐานใหม่ของภาพยนตร์แอ็คชั่น ด้วยฉากการไล่ล่าที่ตื่นเต้น
                เอฟเฟกต์พิเศษสุดอลังการ และที่สำคัญที่สุดคือ <span className="text-pink-400 font-bold">
                ความหมายของครอบครัว</span> ที่ไม่ได้ขึ้นอยู่กับสายเลือด
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-8 rounded-2xl border border-pink-500/20">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">จุดเด่นของแฟรนไชส์</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">🏎️</span>
                  <span>ฉากแอ็คชั่นและการไล่ล่าสุดระทึก</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">🌍</span>
                  <span>การผจญภัยข้ามทวีปที่หลากหลาย</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">👥</span>
                  <span>ตัวละครที่มีเสน่ห์และมิตรภาพที่แน่นแฟ้น</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">💎</span>
                  <span>การพัฒนาจากแข่งรถสู่ภารกิจสปาย</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">❤️</span>
                  <span>แก่นแท้เรื่อง "ครอบครัว" ที่สร้างแรงบันดาลใจ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div id="carousel" className="py-20 bg-gradient-to-br from-purple-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
            ภาพยนตร์แนะนำ
          </h2>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {movies.map((movie) => (
                <div key={movie.id} className="w-full flex-shrink-0 relative">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-300">
                      {movie.title}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {movie.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {movies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-pink-400 scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
            ซีรีส์สมบูรณ์
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "เร็ว แรงทะลุนรก", year: "2001", desc: "ภาคแรกที่เริ่มต้นทุกสิ่ง", image: "/images/f1.jpg" },
              { title: "เร็ว 2 แรงทะลุนรก", year: "2003", desc: "ไบรอันและโรมันร่วมทีมในไมอามี", image: "/images/f2.jpg" },
              { title: "เร็ว 3 ซิ่งแหกนรก", year: "2006", desc: "ดริฟต์เรซซิ่งในโลกใต้ดินของโตเกียว", image: "/images/f3.jpg" },
              { title: "เร็ว 4 แรงทะลุนรก", year: "2009", desc: "ดอมและไบรอันกลับมารวมตัวกันอีกครั้ง", image: "/images/f4.jpg" },
              { title: "เร็ว 5 แรงทะลุไมล์", year: "2011", desc: "การปล้นครั้งใหญ่ที่สุดในริโอ เดอ จาเนโร", image: "/images/f5.jpg" },
              { title: "เร็ว 6 แรงทะลุโลก", year: "2013", desc: "ปะทะกับองค์กรทหารรับจ้างที่มีทักษะ", image: "/images/f6.jpg" }
            ].map((movie, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-black border border-pink-500/20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-pink-400/40">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    {movie.title} ({movie.year})
                  </h3>
                  <p className="text-gray-300">
                    {movie.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="py-20 bg-gradient-to-r from-black to-purple-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-pink-400">
            มรดกที่เหลือไว้
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast & Furious ไม่ได้เป็นเพียงแค่ภาพยนตร์แอ็คชั่น แต่เป็น <span className="text-pink-400 font-bold">
              วัฒนธรรมที่สร้างแรงบันดาลใจ</span> ให้กับผู้คนทั่วโลก จากคำพูดที่เป็นตำนาน 
              <span className="text-purple-300 font-semibold"> "Family"</span> ไปจนถึงการสร้างชุมชนที่แข็งแกร่ง
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/20">
                <div className="text-3xl mb-4">🎬</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">การถ่ายทำ</h3>
                <p className="text-sm text-gray-400">ใช้รถจริงและสร้างฉากแอ็คชั่นที่น่าทึ่งจริง</p>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/20">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">ดาราดัง</h3>
                <p className="text-sm text-gray-400">นำแสดงโดยดาราชื่อดังระดับโลก</p>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/20">
                <div className="text-3xl mb-4">💫</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">อิทธิพล</h3>
                <p className="text-sm text-gray-400">สร้างอิทธิพลต่อวงการภาพยนตร์แอ็คชั่น</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </div>
  );
}