import React, { FC, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Hero from "../components/Hero";

// Certification data with categories and details
const certifications = [
  // DISA Certifications
  {
    id: "disa-waste",
    name: "DISA Waste Management Certification",
    category: "waste-management",
    issuer: "DISA - Dismantling Industry Safety Alliance",
    description: "Comprehensive waste management certification for oilfield and industrial facilities",
    services: ["Oilfield Demolition", "Industrial Demolition"],
    image: "/assets/certifications-logo/disa-logo.png",
    validity: "Annual Renewal",
    awardedDate: "2024",
  },
  {
    id: "disa-safety",
    name: "DISA Safety Compliance",
    category: "safety",
    issuer: "DISA - Dismantling Industry Safety Alliance",
    description: "Rigorous safety standards for demolition operations in high-risk environments",
    services: ["All Demolition Services", "Heavy Equipment Operations"],
    image: "/assets/certifications-logo/disa-logo.png",
    validity: "Annual Audit",
    awardedDate: "2024",
  },

  // OSHA Certifications
  {
    id: "osha-training",
    name: "OSHA Safety Training",
    category: "safety",
    issuer: "U.S. Department of Labor - OSHA",
    description: "Certified safety training for hazardous materials and demolition operations",
    services: ["All Services", "Employee Safety Programs"],
    image: "/assets/certifications-logo/osha-logo.png",
    validity: "Ongoing Training",
    awardedDate: "2024",
  },

  // EPA Certifications
  {
    id: "epa-hazardous",
    name: "EPA Hazardous Waste Handling",
    category: "environmental",
    issuer: "U.S. Environmental Protection Agency",
    description: "Authorized handling and disposal of hazardous materials and contaminants",
    services: ["Oilfield Services", "Industrial Demolition", "Mobile Crushing"],
    image: "/assets/certifications-logo/epa-logo.png",
    validity: "Annual Renewal",
    awardedDate: "2024",
  },

  // Texas State Certifications
  {
    id: "tx-railroad-commission",
    name: "Texas Railroad Commission Registration",
    category: "regulatory",
    issuer: "Texas Railroad Commission",
    description: "State authorization for oilfield operations and fluid handling",
    services: ["Oilfield Demolition", "Fluid Recovery"],
    image: "/assets/certifications-logo/tx-railroad-commission.png",
    validity: "Annual License",
    awardedDate: "2024",
  },
  {
    id: "tceq-air-quality",
    name: "TCEQ Air Quality Permits",
    category: "environmental",
    issuer: "Texas Commission on Environmental Quality",
    description: "Compliance with Texas air quality standards for crushing and processing operations",
    services: ["Mobile Crushing", "Demolition Services"],
    image: "/assets/certifications-logo/tceq-logo.png",
    validity: "Permit-Based",
    awardedDate: "2024",
  },
  {
    id: "texas-temp-registration",
    name: "TEMPO Registration",
    category: "environmental",
    issuer: "Texas Emissions Mobile Operations",
    description: "Mobile emissions compliance for crushing equipment",
    services: ["Mobile Crushing"],
    image: "/assets/certifications-logo/temp-logo.png",
    validity: "Annual Certification",
    awardedDate: "2024",
  },

  // Scale Certification
  {
    id: "certified-scales",
    name: "NIST Certified Scales",
    category: "accuracy",
    issuer: "National Institute of Standards and Technology",
    description: "Precision weighing equipment for fair and accurate metal pricing",
    services: ["All Material Processing"],
    image: "/assets/certifications-logo/nist-logo.png",
    validity: "Annual Calibration",
    awardedDate: "2024",
  },

  // Industry Certifications
  {
    id: "isn-membership",
    name: "ISN Member - Institute of Scrap Recycling Industries",
    category: "industry",
    issuer: "Institute of Scrap Recycling Industries",
    description: "Professional membership and adherence to industry standards",
    services: ["All Services"],
    image: "/assets/certifications-logo/isn-logo.png",
    validity: "Annual Membership",
    awardedDate: "2024",
  },
  {
    id: "r2-certification",
    name: "R2 Responsible Recycling",
    category: "environmental",
    issuer: "Responsible Recycling Practices",
    description: "Environmental management standards for responsible e-waste recycling",
    services: ["Electronic Scrap Processing"],
    image: "/assets/certifications-logo/r2-certified-logo.png",
    validity: "Annual Audit",
    awardedDate: "2023",
  },
];

const categories = [
  { id: "all", name: "All Certifications", color: "blue" },
  { id: "safety", name: "Safety & Training", color: "red" },
  { id: "environmental", name: "Environmental", color: "green" },
  { id: "waste-management", name: "Waste Management", color: "purple" },
  { id: "regulatory", name: "Regulatory", color: "orange" },
  { id: "accuracy", name: "Measurement & Accuracy", color: "indigo" },
  { id: "industry", name: "Industry Standards", color: "gray" },
];

const ComplianceCertifications: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "all") return certifications;
    return certifications.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  const categoryStats = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count: category.id === "all" ? certifications.length : certifications.filter((cert) => cert.category === category.id).length,
    }));
  }, []);

  return (
    <Layout>
      <SEO title="Compliance Certifications | K&L Recycling" description="Professional certifications ensuring safety, environmental compliance, and industry standards. DISA, OSHA, EPA certified since 1956." keywords="DISA certification, OSHA compliance, EPA permits, Texas railroad commission, certified scales" />

      <Hero title="Certified Excellence" subtitle="Your assurance that every project is handled with the highest standards of safety, quality, and environmental responsibility." />

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-green-600 mb-2">56+</h3>
              <p className="text-gray-600">Years of Compliance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-blue-600 mb-2">15</h3>
              <p className="text-gray-600">Active Certifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-purple-600 mb-2">100%</h3>
              <p className="text-gray-600">Regulatory Compliance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-orange-600 mb-2">7</h3>
              <p className="text-gray-600">Locations Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive certification portfolio ensures your project meets the highest standards of safety and compliance.</p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {categoryStats.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`p-4 rounded-lg transition-all duration-300 ${selectedCategory === category.id ? `bg-${category.color}-500 text-white` : `bg-${category.color}-50 hover:bg-${category.color}-100 text-${category.color}-700`}`}>
                <div className="text-2xl font-black">{category.count}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image src={cert.image} alt={`${cert.name} logo`} width={60} height={60} className="rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-gray-700">Issuer:</span>
                        <span className="ml-2 text-blue-600">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-gray-700">Valid:</span>
                        <span className="ml-2 text-green-600">{cert.validity}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Applies to:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.services.map((service) => (
                          <span key={service} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Certification Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Our Certifications Matter to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Each certification represents a commitment to excellence that directly benefits your projects and operations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <Image src="/assets/certifications-logo/disa-logo.png" alt="DISA" width={120} height={60} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DISA Partner</h3>
              <p className="text-gray-600 leading-relaxed">Our partnership with DISA ensures a verified, drug-free workforce, guaranteeing safety and reliability on every job site.</p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <Image src="/assets/certifications-logo/isn-logo.png" alt="ISN Member" width={120} height={60} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISN Member</h3>
              <p className="text-gray-600 leading-relaxed">Our ISN membership signifies our commitment to maintaining the highest safety and compliance standards, making us a trusted partner for major industrial clients.</p>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <Image src="/assets/certifications-logo/DISA.png" alt="DISA Compliant" width={120} height={60} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DISA Compliant</h3>
              <p className="text-gray-600 leading-relaxed">As a REMA Certified facility, we adhere to the industry's most stringent standards for sustainable and responsible materials processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with a Certified Leader */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Partner with a Certified Leader</h2>
            <p className="text-xl text-gray-700 mb-8">Choose a recycling partner that prioritizes safety and compliance. Contact our commercial team to discuss your next project and experience the K&L difference.</p>
            <Link href="/contact" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Contact Our Commercial Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceCertifications;
