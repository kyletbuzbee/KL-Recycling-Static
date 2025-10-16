import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { locations as locationData } from "../data/locations";
import { ContactForm } from "../components/ContactForm/ContactForm";
// import Map from "../components/Map";

const ContactPage: FC = () => {
  const tylerOffice = locationData.find((loc) => loc.id === 1);

  // const locationsForMap = tylerOffice
  //   ? [
  //       {
  //         city: tylerOffice.city,
  //         slug: tylerOffice.name.toLowerCase().replace(/ /g, "-"),
  //         address: tylerOffice.address,
  //         lat: tylerOffice.lat,
  //         lng: tylerOffice.lng,
  //         phone: tylerOffice.phone,
  //       },
  //     ]
  //   : [];

  return (
    <Layout>
      <Head>
        <title>Contact K&L Recycling - Get Quote, Find Locations | Texas & Kansas</title>
        <meta name="description" content="Contact K&L Recycling for scrap metal services. Get free quotes, find locations, or call our experts. Serving Texas and Kansas since 1956." />
        <link rel="canonical" href="https://www.klrecycling.com/contact" />
      </Head>

      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="hero-icon-wrapper">
          <i className="fas fa-envelope"></i>
        </div>
        <h1>Get In Touch</h1>
        <p>We're here to help. Use the form below or contact our Tyler scrap yard directly.</p>
      </section>

      {/* Contact Information Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Main Scrap Yard</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {tylerOffice && (
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900">K&L Recycling - Tyler Yard</h3>
                <div className="space-y-4 mt-4">
                  <p>
                    <span className="font-semibold">Address:</span> {tylerOffice.address}, {tylerOffice.city}, {tylerOffice.state} {tylerOffice.zip}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href={`tel:${tylerOffice.phone}`} className="text-blue-600 hover:text-blue-700">
                      {tylerOffice.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Hours:</span> {tylerOffice.hours.weekday} (Weekday), {tylerOffice.hours.saturday} (Saturday)
                  </p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${tylerOffice.address}, ${tylerOffice.city}, ${tylerOffice.state}`)}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-4">
                    Get Directions
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px]">{/* <Map locations={locationsForMap} /> */}</div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
