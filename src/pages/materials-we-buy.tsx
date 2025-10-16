import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../components/Layout";
import SubpageHero from "@/components/SubpageHero";

const ferrousMetals = [
  {
    name: "Sheet Iron & Tin",
    description: "Includes appliances, miscellaneous steel items, and light-gauge metal.",
    imageUrl: "/assets/ferrous/tin.jpg",
  },
  {
    name: "Unprepared Steel",
    description: "Steel over 1/4 inch thick and longer than 5 feet.",
    imageUrl: "/assets/ferrous/long_iron.jpg",
  },
  {
    name: "Prepared Steel",
    description: "Steel over 1/4 inch thick and cut to 5 feet or less.",
    imageUrl: "/assets/ferrous/steel_cable.jpg",
  },
  {
    name: "Motor Blocks",
    description: "Cast iron engine blocks, with or without steel components.",
    imageUrl: "/assets/non-ferrous/electric_motors.jpg",
  },
  {
    name: "Cast Iron",
    description: "Clean cast iron, including pipes, machinery parts, and radiators.",
    imageUrl: "/assets/ferrous/dealer_clips.jpg",
  },
  {
    name: "Car Bodies",
    description: "Complete or stripped automobile bodies. Please contact us for preparation requirements.",
    imageUrl: "/assets/ferrous/vehicles_accept_large.jpg",
  },
];

const aluminumMetals = [
  {
    name: "Sheet Aluminum",
    description: "Flat aluminum sheets, panels, and siding materials.",
    imageUrl: "/assets/non-ferrous/aluminum_cast.jpg",
  },
  {
    name: "Cast Aluminum",
    description: "Aluminum castings, engine parts, and industrial components.",
    imageUrl: "/assets/non-ferrous/aluminum_cast.jpg",
  },
  {
    name: "Aluminum Cans",
    description: "Beverage cans and food containers made from recycled aluminum.",
    imageUrl: "/assets/non-ferrous/aluminum_whl.jpg",
  },
  {
    name: "Aluminum Wheels",
    description: "Clean aluminum car and truck wheels.",
    imageUrl: "/assets/non-ferrous/aluminum_whl.jpg",
  },
  {
    name: "Aluminum Wire & Cable",
    description: "Electrical wire, underground cable, and transmission lines.",
    imageUrl: "/assets/non-ferrous/copper_1.jpg",
  },
  {
    name: "Aluminum Extrusions",
    description: "Window frames, door frames, gutters, and structural profiles.",
    imageUrl: "/assets/non-ferrous/aluminum_cast.jpg",
  },
];

const nonFerrousMetals = [
  {
    name: "Copper (Bare Bright, #1, #2)",
    description: "Clean, unalloyed, and uncoated copper wire or tubing.",
    imageUrl: "/assets/non-ferrous/copper_1.jpg",
  },
  {
    name: "Insulated Copper Wire",
    description: "Various grades of copper wire with insulation intact.",
    imageUrl: "/assets/non-ferrous/icw_1.jpg",
  },
  {
    name: "Aluminum (Sheet, Cast)",
    description: "Includes siding, gutters, window frames, and cast aluminum.",
    imageUrl: "/assets/non-ferrous/aluminum_cast.jpg",
  },
  {
    name: "Aluminum Wheels",
    description: "Clean aluminum car and truck wheels.",
    imageUrl: "/assets/non-ferrous/aluminum_whl.jpg",
  },
  {
    name: "Brass (Red & Yellow)",
    description: "Includes plumbing fixtures, fittings, and decorative items.",
    imageUrl: "/assets/non-ferrous/brass.jpg",
  },
  {
    name: "Stainless Steel",
    description: "Clean, non-magnetic stainless steel sinks, appliances, and industrial parts.",
    imageUrl: "/assets/non-ferrous/stainless_steel.jpg",
  },
  {
    name: "Lead",
    description: "Includes wheel weights, pipes, and sheeting.",
    imageUrl: "/assets/non-ferrous/cu_br_rad.jpg",
  },
  {
    name: "Radiators",
    description: "Aluminum, copper/brass, and aluminum-copper car radiators.",
    imageUrl: "/assets/non-ferrous/brass1.jpg",
  },
  {
    name: "Electric Motors",
    description: "AC/DC electric motors of various sizes.",
    imageUrl: "/assets/non-ferrous/electric_motors.jpg",
  },
  {
    name: "Sealed Units",
    description: "Compressors from refrigerators and air conditioning units.",
    imageUrl: "/assets/non-ferrous/compressors.jpg",
  },
  {
    name: "Starters & Alternators",
    description: "From vehicles and heavy equipment.",
    imageUrl: "/assets/non-ferrous/icw_1.jpg",
  },
];

const MaterialsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search logic
  const getFilteredCategories = () => {
    const allCategories = [
      {
        id: "ferrous",
        name: "Ferrous Metals",
        exampleCards: ferrousMetals,
      },
      {
        id: "aluminum",
        name: "Aluminum Metals",
        exampleCards: aluminumMetals,
      },
      {
        id: "non-ferrous",
        name: "Non-Ferrous Metals",
        exampleCards: nonFerrousMetals,
      },
      {
        id: "electronic",
        name: "Electronic Scrap",
        exampleCards: [],
      },
      {
        id: "industrial",
        name: "Industrial Metals",
        exampleCards: [],
      },
      {
        id: "household",
        name: "Household Metals",
        exampleCards: [],
      },
    ];

    if (activeFilter === "all") return allCategories;

    return allCategories.filter((category) => category.id === activeFilter || category.exampleCards.some((card) => card.name.toLowerCase().includes(searchQuery.toLowerCase()) || card.description.toLowerCase().includes(searchQuery.toLowerCase())));
  };

  const filteredCategories = getFilteredCategories();

  return (
    <Layout>
      <Head>
        <title>Materials We Buy | K&L Recycling</title>
        <meta name="description" content="A comprehensive list of ferrous and non-ferrous metals we purchase, including steel, iron, copper, aluminum, and more. Turn your scrap into cash today." />
      </Head>

      <SubpageHero title="Materials We Accept" subtitle="Get fair market pricing for your ferrous and non-ferrous metals. See our full list of accepted and prohibited items." icon={<i className="fas fa-recycle"></i>} />

      {/* Materials Filter - Moved outside the gray background */}
      <section id="materials-filter" className="sticky top-0 z-10 bg-white shadow-md py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {["all", "ferrous", "aluminum", "non-ferrous", "electronic", "industrial", "household"].map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === filter ? "bg-electric-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {filter === "all" ? "All" : filter === "ferrous" ? "Ferrous" : filter === "aluminum" ? "Aluminum" : filter === "non-ferrous" ? "Non-Ferrous" : filter === "electronic" ? "Electronic" : filter === "industrial" ? "Industrial" : filter === "household" ? "Household" : filter}
                </button>
              ))}
            </div>
            <div className="flex-1 min-w-64">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a material (e.g., copper wire...)" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue-500 focus:border-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          {/* Materials Grid */}
          {filteredCategories.map((category) => (
            <div key={category.id} className="mt-20">
              <h2 className="text-heading-4xl font-bold text-royal-blue-700 border-b-4 border-royal-blue-200 pb-4 mb-8">{category.name}</h2>
              {category.exampleCards.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {category.exampleCards
                    .filter((card) => searchQuery === "" || card.name.toLowerCase().includes(searchQuery.toLowerCase()) || card.description.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((metal, index) => (
                      <motion.div key={metal.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <div className="relative h-48 overflow-hidden">
                          <Image src={metal.imageUrl} alt={metal.name} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute top-4 right-4 bg-green-500 hover:bg-royal-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold transition-colors duration-300">Contact for Price</div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900">{metal.name}</h3>
                          <p className="mt-2 text-base text-gray-600 text-sm mb-4 line-clamp-3">{metal.description}</p>

                          {category.id === "ferrous" && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-slate-gray-900 mb-2">Common Examples:</h4>
                              <ul className="text-sm text-slate-gray-600">
                                <li>Steel appliances</li>
                                <li>Construction rebar</li>
                                <li>Car bodies</li>
                              </ul>
                            </div>
                          )}

                          {category.id === "aluminum" && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-slate-gray-900 mb-2">Common Examples:</h4>
                              <ul className="text-sm text-slate-gray-600">
                                <li>Drinks cans</li>
                                <li>Window frames</li>
                                <li>Automotive parts</li>
                                <li>Foil packaging</li>
                              </ul>
                            </div>
                          )}

                          {category.id === "non-ferrous" && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-slate-gray-900 mb-2">Common Examples:</h4>
                              <ul className="text-sm text-slate-gray-600">
                                <li>Copper pipe</li>
                                <li>Brass fittings</li>
                                <li>Stainless steel</li>
                                <li>Radiators</li>
                              </ul>
                            </div>
                          )}

                          <button className="inline-flex items-center justify-center px-6 py-2 bg-electric-blue-500 text-white font-medium rounded-lg hover:bg-electric-blue-600 transition-colors duration-200">Learn More</button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No materials currently available in this category.</p>
                  <p className="mt-2">Contact us to inquire about specific materials.</p>
                </div>
              )}
            </div>
          ))}

          {/* Prohibited Items Section */}
          <section className="mt-20 py-16" style={{ backgroundColor: "#FFF5F5" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-800 flex items-center justify-center">
                  <i className="fas fa-exclamation-triangle mr-4"></i>
                  What We Don't Buy / Prohibited Items
                </h2>
                <p className="mt-4 text-lg text-red-700">For safety and environmental reasons, we cannot accept the following materials:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Hazardous Materials</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Radioactive materials</li>
                    <li>Asbestos-containing materials</li>
                    <li>Mercury-containing items (thermostats, switches)</li>
                    <li>Flammable or explosive materials</li>
                    <li>Pressurized tanks or containers (propane, oxygen)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Electronics & Batteries</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Televisions and computer monitors (CRTs)</li>
                    <li>Household batteries (alkaline, NiCad)</li>
                    <li>Lithium-ion batteries</li>
                    <li>Items containing PCBs (transformers, capacitors)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Other Prohibited Items</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Tires</li>
                    <li>Liquids of any kind</li>
                    <li>Garbage, wood, or excessive non-metallic materials</li>
                    <li>Stolen materials (we cooperate with law enforcement)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-12 text-center text-red-700">If you are unsure about an item, please contact us before bringing it to our facility.</p>
            </div>
          </section>

          {/* K&L Advantage Section */}
          <section className="mt-32 bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-heading-3xl font-bold text-center text-slate-gray-900 mb-16">The K&L Advantage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-electric-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-white font-bold">$</span>
                    </div>
                  </div>
                  <h3 className="text-heading-xl font-semibold text-slate-gray-900 mb-4">Competitive & Transparent Pricing</h3>
                  <p className="text-body-base text-slate-gray-600">We use certified scales and offer top market rates to ensure you get the best value for your scrap metals.</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-white">🌿</span>
                    </div>
                  </div>
                  <h3 className="text-heading-xl font-semibold text-slate-gray-900 mb-4">Sustainable Impact</h3>
                  <p className="text-body-base text-slate-gray-600">Your materials are processed responsibly, conserving natural resources and protecting the environment for future generations.</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-white">🚚</span>
                    </div>
                  </div>
                  <h3 className="text-heading-xl font-semibold text-slate-gray-900 mb-4">Fast & Efficient Service</h3>
                  <p className="text-body-base text-slate-gray-600">Our experienced team gets you in, out, and paid quickly and safely so you can focus on what matters most.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsPage;
