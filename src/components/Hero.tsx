import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, height = 'h-screen' }) => {
  return (
    <div className={`relative w-full ${height} flex items-center justify-center text-center text-white overflow-hidden`}>
      {/* Video Background */}
      <video
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/layout/hero_background_high_res.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase mb-6 flex flex-col [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]" style={{ fontFamily: "'Montserrat', 'Oswald', sans-serif", fontWeight: 700, letterSpacing: "1.5px", lineHeight: "1.4" }}>
          <span>East Texas Built</span>
          <span className="mt-2 md:mt-4">Nationally Trusted.</span>
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl max-w-5xl mx-auto mb-12 leading-relaxed [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]" style={{ fontWeight: 500, marginTop: "1.5rem" }}>
          A family-owned legacy of integrity, serving our local community and partners across the country since 1956.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6" style={{ marginTop: "2.5rem" }}>
          <Link href="/quote" className="font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg uppercase tracking-wide border border-blue-400 shadow-lg" style={{ backgroundColor: "#004a99", color: "#FFFFFF" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#003366")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#004a99")}>
            GET A QUOTE
          </Link>
          <Link
            href="/materials"
            className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 text-lg uppercase tracking-wide shadow-lg"
            style={{ color: "#FFFFFF", border: "2px solid #FFFFFF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            VIEW MATERIALS WE BUY
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 mt-12" style={{ marginTop: "3rem" }}>
          <div className="flex justify-center items-center gap-8 text-white">
            <div className="text-center">
              <p className="text-2xl font-bold">56+</p>
              <p className="text-sm">Years of Service</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">9</p>
              <p className="text-sm">Locations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">REMA Certified</p>
              <p className="text-sm">Sustainable Practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
