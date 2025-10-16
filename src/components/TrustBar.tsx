import React from "react";

const TrustBar: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-8 md:gap-16 text-gray-700">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-kl-blue mb-1">56</p>
            <p className="text-sm md:text-base font-medium">Years of Service</p>
          </div>

          <div className="hidden md:block h-16 w-px bg-gray-400"></div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-kl-blue mb-1">9</p>
            <p className="text-sm md:text-base font-medium">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
