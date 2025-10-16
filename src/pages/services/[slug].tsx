import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { SERVICES_DATA } from "@/data/services";
import { ServiceType } from "@/types";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface ServiceDetailProps {
  service: ServiceType;
  slug: string;
}

const ServiceDetail: NextPage<ServiceDetailProps> = ({ service, slug }) => {
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
            <Link href="/services" className="bg-royal-blue-600 text-white px-6 py-3 rounded-lg hover:bg-royal-blue-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`${service.title} | K&L Recycling Services`} description={service.description} keywords={service.title.toLowerCase().replace(/\s+/g, ", ").replace("&", "and")} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-5xl mb-4">
            <i className={service.icon}></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href={`/contact?service=${slug}`} className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              {service.id === "oilfield-demolition" ? "Schedule Demolition" : service.id === "mobile-crushing" ? "Book Mobile Service" : "Get Free Quote"}
            </Link>
            <Link href="/locations" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* Service Funnel Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* 1. What is the service? */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is {service.title}?</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.details.map((detail: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Who is it for? */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Who is {service.title.toLowerCase()} for?</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.id === "oilfield-demolition" && (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i className="fas fa-hard-hat text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Contractors</h3>
                      <p className="text-gray-600 text-sm">Commercial demolition companies maximizing scrap value from projects.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i className="fas fa-building text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Property Owners</h3>
                      <p className="text-gray-600 text-sm">Building renovations and teardown projects with metal recovery needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i className="fas fa-landmark text-white text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Local Governments</h3>
                      <p className="text-gray-600 text-sm">Municipal projects with environmental compliance and scrap value optimization.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Exclude services that have their own individual pages
  const excludedSlugs = ["mobile-crushing"]; // Add other services with their own pages here
  const paths = Object.keys(SERVICES_DATA)
    .filter((slug) => !excludedSlugs.includes(slug))
    .map((slug) => ({
      params: { slug },
    }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServiceDetailProps, IParams> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug || !SERVICES_DATA[slug]) {
    return { notFound: true };
  }
  return {
    props: {
      service: SERVICES_DATA[slug],
      slug,
    },
  };
};

export default ServiceDetail;
