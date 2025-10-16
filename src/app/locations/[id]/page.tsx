import React, { FC } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SEO from "@/components/SEO";
import { locations } from "@/data/locations";
import { getLocationBySlug, getLocations } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

// Next.js 15 params are now async
interface LocationPageProps {
  params: Promise<{
    id: string;
  }>;
}

const LocationPage: FC<LocationPageProps> = async ({ params }) => {
  const resolvedParams = await params;

  // Try CMS first, fall back to static data
  let location = null;
  let cmsLocation = null;
  let isFromCMS = false;

  try {
    cmsLocation = await getLocationBySlug(resolvedParams.id);
    if (cmsLocation) {
      location = cmsLocation;
      isFromCMS = true;
    }
  } catch (error) {
    console.warn('Failed to load location from CMS, falling back to static data:', error);
  }

  // Fallback to static data
  if (!location) {
    location = locations.find((loc) => loc.id.toString() === resolvedParams.id);
  }

  if (!location) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{location.name} - K&L Recycling Location | Scrap Metal Recycling</title>
        <meta name="description" content={`Visit our ${location.name} location in ${location.city}, TX. Professional scrap metal recycling services including container rental, industrial pickup, and competitive pricing.`} />
        <link rel="canonical" href={`https://www.klrecycling.com/locations/${location.id}`} />
      </Head>

      <SEO title={`${location.name} Location`} description={`Visit our scrap metal recycling facility in ${location.city}, TX. Multiple services available including container rental and industrial pickup.`} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-black">{location.name}</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">{location.city}, TX Location</p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">Professional scrap metal recycling services serving the {location.city} area since 1956. Competitive pricing and reliable service.</p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Location Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={`/assets/location-${location.id}.jpg`}
                alt={`${location.name} scrap metal recycling facility`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  e.currentTarget.src = "/assets/location-default.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white font-bold text-2xl mb-2">{location.name}</h2>
                <p className="text-white/90">{location.address}</p>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold">Address</p>
                      <p className="text-gray-600">
                        {location.address}
                        <br />
                        {location.city}, TX {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-royal-blue-600 hover:text-royal-blue-700 transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-semibold">Hours</p>
                      <div className="text-gray-600">
                        <p>
                          <strong>Monday - Friday:</strong> {location.hours.weekday}
                        </p>
                        <p>
                          <strong>Saturday:</strong> {location.hours.saturday}
                        </p>
                        <p>
                          <strong>Sunday:</strong> Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Available</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.services.map((service: any) => (
                    <div key={service.title || service} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 capitalize">{service.title || service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direction & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Get Directions</h2>
              <p className="text-xl text-gray-600">Find the easiest route to our {location.name} location</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps integration coming soon</p>
                </div>
              </div>

              {/* Directions Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Address</h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {location.address}
                    <br />
                    {location.city}, TX {location.zip}
                  </p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.city}, TX ${location.zip}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Get Directions
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Current Status</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 font-semibold">Open Now</span>
                  </div>
                  <p className="text-gray-600">Today's hours: {location.hours.weekday}</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Call for Appointment</h3>
                  <p className="text-gray-600 mb-4">Large quantities or container pickups may require scheduling.</p>
                  <a href={`tel:${location.phone}`} className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: {location.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-royal-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Bring In Your Scrap Metal Today!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Visit our {location.name} location in {location.city} and get competitive pricing for your scrap metal. We pay in cash on the spot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="bg-yellow-400 text-royal-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg">
              Get Free Quote
            </Link>
            <Link href={`/contact?location=${location.id}`} className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-900 transition-colors text-lg">
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Generate static paths for all locations (both CMS and static)
export async function generateStaticParams() {
  try {
    // Get CMS locations
    const cmsLocations = await getLocations();

    // Combine with static locations
    const staticLocations = locations.map(loc => ({ id: loc.id.toString() }));

    // Create unique set of location IDs
    const allLocationIds = new Set([
      ...cmsLocations.map(loc => loc.slug?.current).filter(Boolean),
      ...staticLocations.map(loc => loc.id)
    ].filter(Boolean));

    return Array.from(allLocationIds).map(id => ({ id }));
  } catch (error) {
    console.warn('Failed to generate static params from CMS, falling back to static locations:', error);

    // Fallback to static locations
    return locations.map((loc: any) => ({ id: loc.id.toString() }));
  }
}

export default LocationPage;
