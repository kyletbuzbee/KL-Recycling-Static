import React, { FC, useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface TrustMetric {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: string;
  color: string;
}

const TrustBuilder: FC = (): JSX.Element => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);

  const trustworthinessData = {
    years: 56,
    since: "Serving Texas since",
    year: "1969",
    certified: "CERTIFIED SCALES",
    locations: 9,
    locationsText: "Locations across East Texas & Kansas",
  };

  const trustMetrics: TrustMetric[] = [
    {
      value: 98,
      label: "Customer Satisfaction",
      suffix: "%",
      icon: "😊",
      color: "green",
    },
    {
      value: trustworthinessData.years,
      label: "Years of Excellence",
      icon: "🏛️",
      color: "blue",
    },
    {
      value: 9,
      label: "Locations Celebrating Service",
      suffix: "",
      icon: "📍",
      color: "purple",
    },
  ];

  const communityDonations = ["Food bank", "Cans for Kids", "Grace Community Church", "Andy's Elementary", "Grace Community School"];

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasAnimated, controls]);

  const CounterAnimation = ({ metric, index }: { metric: TrustMetric; index: number }) => {
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);

    useEffect(() => {
      if (hasAnimated && !hasCounted) {
        setHasCounted(true);
        const duration = 2000;
        const startTime = Date.now();

        const updateCounter = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);

          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(startValue + (metric.value - startValue) * easeOutQuart);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        const startValue = 0;
        requestAnimationFrame(updateCounter);
      }
    }, [hasCounted, metric.value]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 + index * 0.1 },
          },
        }}
        className={`${metric.color === "green" ? "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200" : metric.color === "blue" ? "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200" : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"} p-6 rounded-2xl hover:shadow-xl transition-all duration-300`}
      >
        <div className="text-3xl mb-2">{metric.icon}</div>
        <div className={`${metric.color === "green" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600" : metric.color === "blue" ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"} text-4xl font-black mb-1`}>
          {metric.prefix}
          {hasCounted ? count : "0"}
          {metric.suffix}
        </div>
        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
      </motion.div>
    );
  };

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Main CTA Section with Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Get Paid Cash Today for Your Scrap Metal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">We buy all types of scrap metal and pay you cash immediately at our convenient locations.</p>

          {/* Primary and Secondary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/quote" className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl hover:scale-105">
                💰 Get Paid Cash Today
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services#industrial" className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white/20">
                📦 Schedule Container Service
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Trust Signals Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm mb-2">TRUSTED BY EAST TEXAS</div>
              <h3 className="text-xl font-black text-gray-800">56+ Years of Dependable Service</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-black">500+</span>
                </div>
                <div className="text-sm font-semibold text-green-700">Verified Customers</div>
                <div className="text-xs text-gray-500">Documented Service History</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-black">4.9/5</span>
                </div>
                <div className="text-sm font-semibold text-yellow-600">Average Rating</div>
                <div className="text-xs text-gray-500">From Real Customer Reviews</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-2xl font-black">56+</span>
                </div>
                <div className="text-sm font-semibold text-blue-600">Years Experience</div>
                <div className="text-xs text-gray-500">Industry Leadership</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-black">100%</span>
                </div>
                <div className="text-sm font-semibold text-purple-600">Satisfaction Rate</div>
                <div className="text-xs text-gray-500">Certified Quality Service</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">{trustworthinessData.certified}</span>
                  </div>

                  <div className="h-4 w-px bg-gray-300"></div>

                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">{trustworthinessData.locations} Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Why thousands of businesses choose K&L Recycling</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: 500,
                label: "Partners",
                description: "Trusted Businesses",
                icon: "🏢",
                suffix: "+",
                color: "blue",
              },
              {
                value: 100,
                label: "Compliant",
                description: "EPA Standards",
                icon: "✅",
                suffix: "%",
                color: "green",
              },
              {
                value: 4.9,
                label: "Rating",
                description: "Customer Satisfaction",
                icon: "⭐",
                suffix: "/5",
                color: "yellow",
              },
              {
                value: "24/7",
                label: "Service",
                description: "Emergency Pickup",
                icon: "🚚",
                suffix: "",
                color: "purple",
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.8 + index * 0.1 },
                  },
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className={`text-3xl font-black mb-1 ${metric.color === "blue" ? "text-blue-600" : metric.color === "green" ? "text-green-600" : metric.color === "yellow" ? "text-yellow-500" : "text-purple-600"}`}>
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuilder;
