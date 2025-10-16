import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SubpageHero from "@/components/SubpageHero";

const AboutPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | K&L Recycling</title>
        <meta name="description" content="Learn about K&L Recycling's over 50 year history of providing reliable and professional scrap metal recycling services." />
      </Head>
      <SubpageHero title="An East Texas Legacy Since 1956" subtitle="A family-owned legacy of integrity, serving our local community and partners across the country since 1956." />

      {/* New: Our Core Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do at K&L Recycling</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                value: "Integrity",
                icon: "fas fa-handshake",
                description: "We conduct business with the highest standards of honesty and transparency in all our dealings.",
              },
              {
                value: "Safety",
                icon: "fas fa-shield-alt",
                description: "The safety of our employees, customers, and communities is our top priority in everything we do.",
              },
              {
                value: "Innovation",
                icon: "fas fa-lightbulb",
                description: "We continuously seek new ways to improve our processes and better serve our customers.",
              },
              {
                value: "Community",
                icon: "fas fa-seedling",
                description: "We're committed to being a positive force in the communities where we live and work.",
              },
            ].map((coreValue, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-6xl mb-6">
                  <i className={coreValue.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{coreValue.value}</h3>
                <p className="text-gray-600 leading-relaxed">{coreValue.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline: 56 Years of Innovation */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">📈 56 Years of Innovation</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From a single truck in 1956 to 9 locations across Texas and Kansas. Click through our interactive timeline.</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Main timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

              {[
                {
                  year: "1956",
                  title: "Foundation & Beginning",
                  description: "Started with a single truck and a vision to serve East Texas businesses with honest, reliable scrap metal recycling.",
                  icon: "fas fa-truck",
                  side: "left",
                },
                {
                  year: "1975",
                  title: "Expansion & Growth",
                  description: "Aquired additional facilities and expanded service area to include construction and industrial clients.",
                  icon: "fas fa-hard-hat",
                  side: "right",
                },
                {
                  year: "1995",
                  title: "Technology & Efficiency",
                  description: "Invested in modern processing equipment and computerized weighing systems for better accuracy and speed.",
                  icon: "fas fa-cogs",
                  side: "left",
                },
                {
                  year: "2010",
                  title: "Kansas Expansion",
                  description: "Opened first Kansas location and invested in mobile crushing and demolition services across both states.",
                  icon: "fas fa-globe-americas",
                  side: "right",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "Launched online scheduling, real-time pricing, and mobile app for customer convenience.",
                  icon: "fas fa-mobile-alt",
                  side: "left",
                },
                {
                  year: "2025",
                  title: "AI-Powered Future",
                  description: "Pioneering AI-based market analysis, environmental impact tracking, and automated pricing systems.",
                  icon: "fas fa-robot",
                  side: "right",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{
                    opacity: 0,
                    x: milestone.side === "left" ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative mb-16 ${milestone.side === "left" ? "pr-1/2" : "pl-1/2 pl-8"}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 ${milestone.side === "left" ? "right-0 translate-x-2.5" : "left-0 -translate-x-2.5"} w-6 h-6 bg-${milestone.side === "left" ? "blue" : "indigo"}-600 rounded-full border-4 border-white shadow-lg`}></div>

                  {/* Content card */}
                  <div className={`${milestone.side === "left" ? "mr-8" : "ml-8"} bg-white rounded-2xl shadow-xl p-6 border border-gray-200`}>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">
                        <i className={milestone.icon}></i>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-gray-900">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900">Become a Part of Our Story</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Join the thousands of satisfied customers who have made K&L Recycling their trusted partner for scrap metal recycling.</p>
          <Link href="/services" className="btn-primary inline-block mt-8 text-lg px-8 py-4">
            Explore Our Services
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
