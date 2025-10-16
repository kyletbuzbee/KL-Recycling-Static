import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { SERVICES_DATA } from "@/data/services";
import Accordion from "@/components/Accordion";
import SubpageHero from "@/components/SubpageHero";
import { getServices } from "@/lib/sanity";

const InteractiveContainerModel = dynamic(() => import("@/components/InteractiveContainerModel"));

const ServicesPage: FC = () => {
  const [cmsServices, setCmsServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [useCms, setUseCms] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const services = await getServices();
        if (services && services.length > 0) {
          setCmsServices(services);
          setUseCms(true);
        }
      } catch (error) {
        console.warn('Failed to fetch services from CMS, falling back to static data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const servicesData = useCms ? cmsServices : Object.values(SERVICES_DATA);

  // Helper function to get service by ID from current data source
  const getServiceById = (id: string) => {
    if (useCms) {
      return cmsServices.find(service => service.category === id) || cmsServices.find(service => service.slug?.current === id);
    }
    return SERVICES_DATA[id];
  };

  const skipToServices = () => {
    const servicesSection = document.getElementById("services-heading");
    if (servicesSection) {
      servicesSection.focus();
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading services...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const businessServiceIds = ["roll-off", "oilfield-demolition", "mobile-crushing", "public-services"];
  const publicServiceIds = ["public-services", "mobile-crushing"];

  const faqItems = [
    {
      question: "Do I need to sort my metals before I arrive?",
      answer: "While it's helpful, it's not required. Our trained staff can help you sort your materials on-site to ensure you get the best possible price for each type of metal.",
    },
    {
      question: "What types of containers do you offer?",
      answer: "We offer a wide range of roll-off containers, from small 20-yard bins for cleanups to large 40-yard containers for major demolition and industrial sites. Use our interactive tool above to find the perfect size.",
    },
    {
      question: "How quickly can I get a container delivered?",
      answer: "We can typically deliver containers within 24-48 hours in the East Texas area. For urgent needs, please call us directly to confirm availability.",
    },
    {
      question: "How do I get paid?",
      answer: "For all public drop-offs, we pay in cash on the spot after weighing your materials. For commercial accounts, we offer flexible payment terms including check and direct deposit.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Services - Scrap Metal Recycling Solutions | K&L Recycling</title>
        <meta name="description" content="Professional scrap metal recycling services including industrial pickup, demolition services, roll-off containers, and public drop-off. Competitive pricing and reliable service." />
        <link rel="canonical" href="https://www.klrecycling.com/services" />
      </Head>

      {/* Skip Links for Accessibility */}
      <div className="sr-only">
        <a href="#services-heading" onClick={skipToServices} className="skip-link focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-royal-blue-600 text-white px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to Services
        </a>
        <a href="#main-content" className="skip-link focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:translate-y-12 bg-royal-blue-600 text-white px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to Main Content
        </a>
      </div>

      <SubpageHero title="Our Services" subtitle="From container rentals to industrial demolition, we provide end-to-end solutions tailored to your needs." icon={<i className="fas fa-tools"></i>} />

      {/* Detailed Services */}
      <section className="py-24 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              For Businesses & Contractors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" role="list" aria-label="Available services for businesses and contractors">
            {businessServiceIds.map((id, index) => {
              const service = getServiceById(id);
              if (!service) return null;

              return (
                <Link key={id} href={`/services/${useCms ? service.slug?.current : id}`} passHref>
                  <article className="service-card service-card-hover overflow-hidden cursor-pointer focus-within:ring-4 focus-within:ring-royal-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-200 flex flex-col h-full" aria-label={`Learn more about ${service.title || service.name}`} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-royal-blue-900/85"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`${service.icon || 'fas fa-cog'} text-6xl text-white`} role="presentation"></i>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{service.title || service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Benefits:</h4>
                        <ul className="space-y-2" aria-label="Service benefits">
                          {service.benefits?.slice(0, 3).map((benefit: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-20 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">For Individuals & Public Drop-Off</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" role="list" aria-label="Available services for individuals">
            {publicServiceIds.map((id, index) => {
              const service = getServiceById(id);
              if (!service) return null;

              return (
                <Link key={id} href={`/services/${useCms ? service.slug?.current : id}`} passHref>
                  <article className="service-card service-card-hover overflow-hidden cursor-pointer focus-within:ring-4 focus-within:ring-royal-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-200 flex flex-col h-full" aria-label={`Learn more about ${service.title || service.name}`} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-royal-blue-900/85"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`${service.icon || 'fas fa-cog'} text-6xl text-white`} role="presentation"></i>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{service.title || service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Benefits:</h4>
                        <ul className="space-y-2" aria-label="Service benefits">
                          {service.benefits?.slice(0, 3).map((benefit: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* "Don't See Your Service?" Section */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Looking for a Custom Solution?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">If you have unique industrial or large-scale project needs, our team can design a custom recycling program for you. Contact us to discuss your requirements.</p>
            <Link href="/contact" passHref>
              <button className="btn-primary text-lg px-8 py-4">Contact Us for Custom Solutions</button>
            </Link>
          </div>

          {/* Accessibility Helper */}
          <div className="sr-only" id="services-description">
            Navigate through our services using Tab key. Press Enter or Space to open service details. Use Escape to close.
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-24 bg-white" aria-labelledby="who-we-serve-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="who-we-serve-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Serving Every Sector of East Texas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/assets/in-action.png" alt="K&L Recycling serving industrial clients across East Texas" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-semibold">Trusted by East Texas Industries</p>
                  <p className="text-white/90 text-sm">Since 1956</p>
                </div>
              </div>
            </div>

            {/* Right Column: Client Types List */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">Trusted by Leading Industries</h3>
              <ul className="space-y-4" role="list" aria-label="Client types we serve">
                <li className="flex items-center space-x-4" role="listitem">
                  <svg className="w-8 h-8 text-royal-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 8.07c-.51 0-1.01.2-1.39.59l-3.95 4.01a2.48 2.48 0 00-.73 1.78v5.14a2.5 2.5 0 01-2.5 2.5h-2.5v-2.5H11V13.1a2.5 2.5 0 012.49-2.49c.58 0 1.13.2 1.56.56l3.95-4.01a2.49 2.49 0 00.73-1.78V4.57a2.5 2.5 0 012.5-2.5V3.1c0 .67-.26 1.31-.73 1.78l-3.95 4.01a2.49 2.49 0 00-.73 1.78v5.14a2.5 2.5 0 01-2.5 2.5h-2.5V13.1H11.5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industrial & Manufacturing Facilities</h4>
                    <p className="text-gray-600 text-sm">Streamlined metal recycling for production environments</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4" role="listitem">
                  <svg className="w-8 h-8 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4.07a2 2 0 00-2 0L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73l7 4.07a2 2 0 002 0l7-4.07A2 2 0 0021 16z" />
                    <path fillRule="evenodd" d="M3.27 6.96c0-1.66 1.08-3.14 2.66-3.69L12 1c1.57.55 2.66 2.03 2.66 3.69v.42c0 1.66-1.08 3.14-2.66 3.69L7.93 11.31c-1.58.55-2.66-1.93-1.25-3.09l3.01-2.81c.23-.22.4-.52.47-.84l-.48-.28L5 6.96v.42c0 1.55-1.21 2.96-2.66 3.42v-3.84zM16.5 8v8c-1.21-.43-2.66-.11-2.66 1.55v.91c0 1.66 1.08 3.14 2.66 3.69L21 22c1.57-.55 2.66-2.03 2.66-3.69v-2.51c0-1.66-1.08-3.14-2.66-3.69L16.5 8z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Demolition & Construction Contractors</h4>
                    <p className="text-gray-600 text-sm">Comprehensive scrap removal and salvage services</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4" role="listitem">
                  <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.763.066l11.764 6.567v6.568h-.786V7.853L11.975 2.098 2 7.853v5.779h-.786V7.146L11.763.066z" />
                    <path d="M2.714 9.905V13h9.286V9.905h-.786v2.309H3.5V9.905h-.786zm7.5 0v3.094h-3.5V9.905h-.785v3.88h4.071V9.905H10.214z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tradesmen (Electricians, Plumbers, HVAC)</h4>
                    <p className="text-gray-600 text-sm">Reliable pickup for accumulated scrap metal</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4" role="listitem">
                  <svg className="w-8 h-8 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 8l-6-6-6 6h4.5c0 4.5-3.5 8.5-7.5 8.5v1c4.5 0 8.5 3.5 8.5 8.5H22c0-5.5-3.5-9.5-8.5-9.5V20h3l6-6-6-6v4.5c3.5 0 6.5-3.5 6.5-7.5H24z" />
                    <circle cx="6.5" cy="6.5" r="1.5" />
                    <circle cx="15.5" cy="6.5" r="1.5" />
                    <circle cx="6.5" cy="15.5" r="1.5" />
                    <circle cx="15.5" cy="15.5" r="1.5" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Municipal & Government Agencies</h4>
                    <p className="text-gray-600 text-sm">Environmental compliance and community service solutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Container Model - Roll-off Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Interactive Container Visualization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our roll-off container sizes with this interactive 3D model. Switch between sizes to see capacity and dimensions.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <InteractiveContainerModel initialSize="40-yard" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Size Selection</h3>
              <p className="text-gray-600 text-sm">Choose the perfect container size for your project needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visual Comparison</h3>
              <p className="text-gray-600 text-sm">See actual dimensions and capacity differences between sizes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600 text-sm">Use scheduling tools that adapt to your timeline and needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Common Questions About Our Services
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-royal-blue-900 text-white" aria-labelledby="final-cta-heading">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 id="final-cta-heading" className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">Whether it's a small cleanup or a large-scale industrial partnership, we're ready to help. Get a no-obligation quote today.</p>
          <div className="flex justify-center">
            <Link href="/quote" className="bg-yellow-400 text-royal-blue-900 font-bold py-6 px-12 rounded-xl hover:bg-yellow-300 transition-all duration-300 text-xl hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 transform" aria-label="Get a free quote for your scrap metal recycling needs">
              Get a Free Quote
            </Link>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            <p>Free estimates • Competitive pricing • Expert guidance</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
