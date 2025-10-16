import React, { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { allPosts } from "@/data/posts";
import { resources } from "@/data/resources";
import RecyclingCalculator from "@/components/RecyclingCalculator";

const ResourcesPage: FC = () => {
  const faqs = [
    {
      question: "What types of metals do you accept?",
      answer: "We accept all types of ferrous metals (steel, iron, cast iron) and non-ferrous metals (copper, aluminum, brass, stainless steel, lead, zinc, nickel). This includes appliances, car parts, metal furniture, wire, pipes, and more.",
    },
    {
      question: "Do I need an appointment to drop off scrap metal?",
      answer: "No appointment is necessary for public drop-offs. Our facilities are open Monday through Friday 7AM-5PM and Saturdays 8AM-12PM. Just drive onto our scale and our staff will assist you.",
    },
    {
      question: "How do you determine the price for my scrap metal?",
      answer: "Prices are based on current market values, material type, weight, and condition. We use certified scales and provide transparent pricing. You'll receive immediate payment based on accurate weight and current market rates.",
    },
    {
      question: "Do you offer pickup services?",
      answer: "Yes, we offer pickup services for industrial customers and large quantities. We provide roll-off containers, scheduled pickups, and can coordinate with your production schedule. Contact us to discuss your specific needs.",
    },
    {
      question: "Are your facilities environmentally compliant?",
      answer: "Absolutely. All our facilities operate in full compliance with EPA regulations and local environmental standards. We're committed to responsible recycling practices and environmental stewardship.",
    },
    {
      question: "What happens to the metal after I sell it?",
      answer: "The metal is processed, sorted by type, and sent to mills and foundries where it's melted down and made into new products. This creates a sustainable recycling loop that conserves natural resources.",
    },
  ];

  const guides = [
    {
      title: "Metal Identification Guide",
      description: "Learn how to identify different types of metals and maximize your recycling value",
      image: "/images/copper.png",
      category: "Guide",
      readTime: "5 min read",
    },
    {
      title: "Preparing Your Scrap for Maximum Value",
      description: "Tips on cleaning and preparing your scrap metal to get the best prices",
      image: "/images/aluminum.png",
      category: "Tips",
      readTime: "3 min read",
    },
    {
      title: "Environmental Benefits of Metal Recycling",
      description: "Understanding the environmental impact and benefits of recycling metal",
      image: "/images/hero_background_high_res.jpg",
      category: "Education",
      readTime: "7 min read",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Resources - Recycling Guides, FAQs & News | K&L Recycling</title>
        <meta name="description" content="Access recycling guides, frequently asked questions, industry news, and educational resources from K&L Recycling experts." />
        <link rel="canonical" href="https://www.klrecycling.com/resources" />
      </Head>

      {/* Hero Section */}
      <Hero title="Resources" subtitle="Your hub for recycling knowledge. From detailed material guides to our latest company news, find everything you need to know right here." />

      {/* Tools & Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Tools & Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources
              .filter((r) => r.category === "tools")
              .map((resource, index) => (
                <Link key={resource.slug} href={resource.slug === "materials" ? "/materials" : resource.slug === "calculator" ? "#tools" : resource.slug === "faq" ? "#faq" : "#"} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-blue-600 to-electric-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {resource.slug === "materials" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {resource.slug === "calculator" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                    {resource.slug === "faq" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Company & Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Company & Community</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources
              .filter((r) => r.category === "company")
              .map((resource, index) => (
                <Link key={resource.slug} href={resource.slug === "blog" ? "/blog" : resource.slug === "sustainability" ? "/sustainability" : resource.slug === "careers" ? "/careers" : "#"} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {resource.slug === "blog" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    )}
                    {resource.slug === "sustainability" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    )}
                    {resource.slug === "careers" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to the most common questions about scrap metal recycling</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Recycling Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Interactive tools to help you understand your recycling impact and make informed decisions.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recycling Impact Calculator</h3>
              <p className="text-gray-600 mb-8 text-center">Calculate your environmental impact by discovering how recycling scrap metal reduces carbon emissions and conserves natural resources.</p>
              <RecyclingCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Recycling Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Learn how to maximize your recycling value with our expert guides</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={guide.image} alt={guide.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" priority={index === 0} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{guide.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                    <span className="text-royal-blue-600 font-semibold hover:text-royal-blue-700 cursor-pointer">Read Guide →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Post Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">From the Blog</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {allPosts.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">{allPosts[0].mainImage?.asset?.url && <Image src={allPosts[0].mainImage.asset.url} alt={allPosts[0].title} width={600} height={400} className="w-full h-80 object-cover rounded-2xl shadow-lg" />}</div>
                <div className="order-1 lg:order-2">
                  <p className="text-sm text-gray-500 mb-2">{new Date(allPosts[0].publishedAt).toLocaleDateString()}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{allPosts[0].title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{allPosts[0].excerpt}</p>
                  <Link href={`/blog/${allPosts[0].slug.current}`} className="inline-flex items-center bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-royal-blue-700 hover:to-electric-blue-700 transition-colors">
                    Read More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Latest News & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay updated with industry news, company updates, and recycling insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allPosts.slice(0, 6).map((post, index) => (
              <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden">
                  {post.mainImage?.asset?.url && <Image src={post.mainImage.asset.url} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" width={600} height={384} />}
                  <div className="absolute top-4 left-4">{post.categories && post.categories[0] && <span className="bg-royal-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{post.categories[0].title}</span>}</div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal-blue-700 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-royal-blue-600 font-semibold group-hover:text-royal-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4 group relative overflow-hidden">
              <span className="relative z-10">View All Posts</span>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-700 to-electric-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section id="glossary" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Recycling Glossary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Understanding key terms in the scrap metal recycling industry</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ferrous Metals</h3>
                  <p className="text-gray-600">Metals containing iron, including steel, cast iron, and wrought iron. These metals are magnetic and rust when exposed to moisture.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Non-Ferrous Metals</h3>
                  <p className="text-gray-600">Metals that do not contain iron, such as copper, aluminum, brass, lead, zinc, and stainless steel. These metals are typically more valuable per pound.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Shred</h3>
                  <p className="text-gray-600">The process of mechanically breaking down metal scrap into smaller pieces using industrial shredding equipment for easier processing and sorting.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Baling</h3>
                  <p className="text-gray-600">Compressing loose metal scrap into dense, rectangular bales using hydraulic presses, making them easier to transport and store.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mixed Metal</h3>
                  <p className="text-gray-600">A combination of ferrous and non-ferrous metals that requires sorting before processing. Often found in vehicle dismantling or industrial demolition.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Clean Copper</h3>
                  <p className="text-gray-600">Copper metal that is free from attachments, insulation, or other contaminants. Commands premium market rates.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Insulated Copper Wire</h3>
                  <p className="text-gray-600">Copper wire surrounded by plastic or rubber insulation. The copper is extracted through burning or chemical stripping processes.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Roll-Off Containers</h3>
                  <p className="text-gray-600">Large metal boxes delivered by trucks for scrap collection. Different sizes available for industrial and commercial customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Still Have Questions?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Our recycling experts are here to help. Contact us for personalized advice and answers to your specific questions.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Contact Us
            </Link>
            <a href="tel:+17135550123" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Call (713) 555-0123
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
