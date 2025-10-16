import { FC } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedBanner from "@/components/AnimatedBanner";

const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ServicesTabs = dynamic(() => import("@/components/ServicesTabs"), { ssr: false });

const HomePage: FC = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="East Texas Built. Nationwide Trusted. | K&L Recycling" description="A family-owned legacy of integrity, serving our local community and partners across the country since 1956." />
      <AnimatedBanner />
      <Hero
        title="K&L Recycling"
        subtitle="A family-owned legacy of integrity"
      />

      {/* A Legacy of Trust - New section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/community/scrap-yard-mineola-ribbon-cutting.jpeg"
                  alt="K&L Recycling founders and original yard - 1956"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = "/assets/kl-recycling-yard.jpg";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-royal-blue-900 font-black text-3xl px-6 py-3 rounded-2xl shadow-xl">56 YEARS</div>
            </div>

            <div className="space-y-6">
              <div className="inline-block bg-royal-blue-100 text-royal-blue-800 px-4 py-2 rounded-full font-semibold text-sm">A FAMILY LEGACY SINCE 1956</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Three Generations of Trust</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">What started as a small operation in East Texas has grown into a cornerstone of our community. The same family that began this business nearly seven decades ago still runs it today, maintaining the same values of honesty, integrity, and community service.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">Our commitment isn't just to business—it's to the people and communities we've served for generations. Every dollar earned supports local jobs, programs, and initiatives that make East Texas a better place to live and work.</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-royal-blue-600 mb-2">$25K+</div>
                  <div className="text-sm text-gray-600">Annual Community Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Supported Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The K&L Advantage */}
      <section className="py-20 bg-royal-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Why Choose K&L?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">More than just a scrap yard—we're your trusted partner in metal recycling with a legacy of excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-balance-scale text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Honest Pricing & Fair Weights</h3>
              <p className="leading-relaxed">Our certified scales and transparent process ensure you get the maximum value for your scrap metal, every single time.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-calendar-alt text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Nearly 70 Years of Experience</h3>
              <p className="leading-relaxed">We've built our reputation on decades of industry expertise, providing reliable and efficient service you can count on.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-leaf text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Commitment to Sustainability</h3>
              <p className="leading-relaxed">We are dedicated to environmentally responsible practices that protect our community and preserve resources for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials We Buy - Consolidated */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Materials We Buy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We accept a wide variety of ferrous and non-ferrous metals for recycling. Get competitive prices for your scrap metal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Ferrous Metals", items: ["Steel", "Iron", "Cast Iron", "Sheet Metal"], icon: "fas fa-magnet", color: "bg-blue-500" },
              { name: "Non-Ferrous Metals", items: ["Copper", "Aluminum", "Brass", "Stainless Steel"], icon: "fas fa-cubes", color: "bg-green-500" },
              { name: "Precious Metals", items: ["Gold", "Silver", "Platinum", "Palladium"], icon: "fas fa-gem", color: "bg-yellow-500" },
              { name: "Specialty Scrap", items: ["Catalytic Converters", "Radiators", "Wire", "Motors"], icon: "fas fa-bolt", color: "bg-purple-500" },
            ].map((category, index) => (
              <div key={category.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{category.name}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/materials-we-buy" className="inline-flex items-center px-8 py-4 bg-royal-blue-600 text-white font-bold rounded-xl hover:bg-royal-blue-700 transition-colors group">
              View All Materials & Pricing
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Consolidated Services Section */}
      <ServicesTabs />



      {/* Social Proof Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Part A: Testimonials */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">What Our Customers Say</h2>
          </div>
          <Testimonials />

          {/* Add customer testimonials section */}
          <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">John D., Construction Manager</h4>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"K&L Recycling has been our go-to scrap metal partner for over five years. Their honest pricing and reliable service have saved us thousands. The family-owned operation gives you that personal touch that's hard to find today."</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mike R., Auto Salvage Owner</h4>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"What stands out about K&L is their three-generation commitment to honesty. They don't try to lowball you on weight or quality. Fair dealing is their standard, not the exception. Highly recommend!"</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah C., Metal Supplier</h4>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Their certified scales and transparent process give me confidence in every transaction. With K&L, you know you're getting the market value for your scrap metal, no questions asked."</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    TB
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tom B., Demolition Contractor</h4>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"56 years of experience shows in everything they do. K&L isn't just buying scrap—they're preserving resources and supporting our local community. That's the kind of business I want to work with."</p>
              </div>
            </div>
          </section>

          {/* Part B: Trusted by Industry Leaders */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">Building relationships across East Texas since 1956, serving industries from construction to manufacturing.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="group cursor-pointer filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <p>Fritcher Construction</p>
              </div>
              <div className="group cursor-pointer filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <p>East Texas Manufacturing</p>
              </div>
              <div className="group cursor-pointer filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <p>Texas Fabricators</p>
              </div>
              <div className="group cursor-pointer filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <p>Lone Star Auto Sales</p>
              </div>
              <div className="group cursor-pointer filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <p>Nacogdoches County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-royal-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Turn Your Scrap Into Cash?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Get a no-obligation quote or schedule a container drop-off today.</p>
          <Link href="/quote" className="bg-yellow-400 text-royal-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-xl hover:scale-105 shadow-2xl">
            GET YOUR FREE QUOTE
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
