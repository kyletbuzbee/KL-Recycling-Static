import React, { useState, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

const ServicesTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<"container" | "demolition" | "industrial">("container");

  const services = {
    container: {
      title: "Container Rentals",
      subtitle: "Roll-off bins, trailers, and compactors for all your disposal needs",
      heroImage: "/assets/services-container-hero.jpg",
      features: [
        {
          title: "Flexible Sizes",
          description: "From 10-yard dumpsters to 50-yard roll-off containers, we have the perfect size for every project.",
          icon: "fas fa-expand-arrows-alt",
        },
        {
          title: "Quick Delivery",
          description: "Most containers delivered within 24-48 hours in East Texas.",
          icon: "fas fa-clock",
        },
        {
          title: "Competitive Rates",
          description: "Transparent pricing with no hidden fees for collection, transportation, or hauling.",
          icon: "fas fa-dollar-sign",
        },
        {
          title: "Multiple Rentals",
          description: "Discounts available for multiple container rentals on large projects.",
          icon: "fas fa-layer-group",
        },
      ],
      ctaText: "Get Container Quote",
      ctaLink: "/services/roll-off",
    },
    demolition: {
      title: "Demolition & Cleanup",
      subtitle: "Complete demolition services with responsible scrap metal recovery",
      heroImage: "/assets/services-demolition-hero.jpg",
      features: [
        {
          title: "Structural Demolition",
          description: "Complete building demolitions with careful planning and execution.",
          icon: "fas fa-building",
        },
        {
          title: "Scrap Recovery",
          description: "We recover and recycle up to 90% of demolition materials.",
          icon: "fas fa-recycle",
        },
        {
          title: "Licensed & Insured",
          description: "Fully licensed, insured, and experienced demolition professionals.",
          icon: "fas fa-shield-alt",
        },
        {
          title: "Environmental Compliance",
          description: "All work follows EPA guidelines for hazardous materials handling.",
          icon: "fas fa-leaf",
        },
      ],
      ctaText: "Schedule Demolition",
      ctaLink: "/services/oilfield-demolition",
    },
    industrial: {
      title: "Industrial Services",
      subtitle: "Scalable solutions for manufacturers and industrial facilities",
      heroImage: "/assets/services-industrial-hero.jpg",
      features: [
        {
          title: "Scheduled Pickups",
          description: "Regular collection services tailored to your production schedule.",
          icon: "fas fa-calendar-check",
        },
        {
          title: "Bulk Processing",
          description: "High-volume processing capabilities for large industrial operations.",
          icon: "fas fa-industry",
        },
        {
          title: "Data Destruction",
          description: "Certified destruction services for sensitive manufacturing waste.",
          icon: "fas fa-lock",
        },
        {
          title: "Mobile Crushing",
          description: "On-site crushing services to reduce transportation costs.",
          icon: "fas fa-truck-moving",
        },
      ],
      ctaText: "Industrial Solutions",
      ctaLink: "/services/mobile-crushing",
    },
  };

  const activeService = services[activeTab];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional solutions tailored to every customer's needs, from small cleanups to large-scale industrial projects.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-2xl flex flex-wrap gap-2">
            {Object.entries(services).map(([key, service]) => (
              <button key={key} onClick={() => setActiveTab(key as typeof activeTab)} className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center min-w-[200px] ${activeTab === key ? "bg-royal-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-50"}`} aria-pressed={activeTab === key}>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Hero Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src={activeService.heroImage}
                  alt={`${activeService.title} services at K&L Recycling`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = "/assets/services-placeholder.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* Service Description */}
              <div className="space-y-6 order-1 lg:order-2">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{activeService.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{activeService.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-royal-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${feature.icon} text-royal-blue-600 text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href={activeService.ctaLink} className="inline-flex items-center px-8 py-4 bg-royal-blue-600 text-white font-bold rounded-xl hover:bg-royal-blue-700 transition-all duration-300 group">
                    {activeService.ctaText}
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Service Options */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Other Services We Offer</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(services)
                  .filter(([key]) => key !== activeTab)
                  .map(([key, service]) => (
                    <Link key={key} href={service.ctaLink} className="group">
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        <div className="text-center space-y-3">
                          <div className="text-3xl mb-3">
                            <i className={`fas fa-${key === "container" ? "truck" : key === "demolition" ? "hammer" : "cogs"} text-royal-blue-600`}></i>
                          </div>
                          <h5 className="font-bold text-gray-900 group-hover:text-royal-blue-600 transition-colors">{service.title}</h5>
                          <p className="text-sm text-gray-600 leading-relaxed">{service.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Not sure which service is right for you?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Contact Our Team
            </Link>
            <Link href="/quote" className="px-8 py-4 bg-royal-blue-600 text-white font-bold rounded-xl hover:bg-royal-blue-700 transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
