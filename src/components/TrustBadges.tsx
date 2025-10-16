import React from "react";

const trustBadges = [
  {
    icon: "🏆",
    title: "56+ Years",
    description: "Industry Experience",
  },
  {
    icon: "🏢",
    title: "500+ Partners",
    description: "Trusted Businesses",
  },
  {
    icon: "✅",
    title: "100% Compliant",
    description: "EPA Standards",
  },
  {
    icon: "⭐",
    title: "4.9/5 Rating",
    description: "Customer Satisfaction",
  },
  {
    icon: "🚚",
    title: "24/7 Service",
    description: "Emergency Pickup",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">Why thousands of businesses choose K&L Recycling</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl">{badge.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
