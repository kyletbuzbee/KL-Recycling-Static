import { ServiceType } from "@/types";

export const SERVICES_DATA: { [key: string]: ServiceType } = {
  "mobile-crushing": {
    id: "mobile-crushing",
    title: "Mobile Car Crushing & On-Site Processing",
    description: "SERVING TEXAS, OKLAHOMA, LOUISIANA, NEW MEXICO, KANSAS AND ARKANSAS. In 1968, K&L purchased the second mobile car crusher ever built. Since then, we have recycled millions of automobiles.",
    image: "/assets/car crushing/car-crushing.png",
    details: ["High-volume on-location processing", "Specialized mobile crushing equipment", "Immediate cash payments on-site", "Environmentally compliant operations"],
    benefits: ["We pride ourselves in providing a fair and honest service and leaving your salvage yard or property as clean as it was when we arrived", "We pay top dollar so call today for a quote!"],
    icon: "fas fa-fire",
    operationalDetails: {
      permits: ["EPA Mobile Processing Permits", "TEMPO Air Quality Permits", "Texas Railroad Commission Registration", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-6 personnel with mobile crushing unit operator",
      equipment: ["Mobile car crushing unit", "Certified industrial scale", "Fuel drainage and containment systems", "Generator and auxiliary power", "Environmental monitoring equipment"],
      notes: "Minimum 20 vehicles required for mobile service activation. 1-2 week scheduling notice preferred.",
    },
    availableLocations: ["texas", "oklahoma", "louisiana", "new-mexico", "kansas", "arkansas"],
    content: '\n      <h3>Car Crushing Services</h3>\n      <p class="text-center font-bold text-blue-600 mb-4">SERVING TEXAS, OKLAHOMA, LOUISIANA, NEW MEXICO, KANSAS AND ARKANSAS</p>\n\n      <p>In 1968, K&L purchased the second mobile car crusher ever built. Since then, we have recycled millions of automobiles. We pride ourselves in providing a fair and honest service and leaving your salvage yard or property as clean as it was when we arrived.</p>\n\n      <p>We pay top dollar so call today for a quote!</p>\n\n      <div class="bg-blue-50 p-4 rounded-lg my-6">\n        <p class="font-semibold text-center">Contact Us Today to Learn More About Our Mobile Car Crushing Services!</p>\n      </div>\n    ',
  },
  "roll-off": {
    id: "roll-off",
    title: "Roll-Off Container Services",
    description: "Take Full Advantage of Our Commercial & Industrial Roll-Off Containers. If you have large piles of metal that you need to get rid of, contact us to learn more about our roll-off containers.",
    image: "/assets/services/roll-off/kl-recycling-roll-off-container-full.jpeg",
    details: ["Multiple container sizes (20–40 yd³)", "Flexible rental terms", "Weather-resistant construction", "Customized delivery and pickup schedules"],
    benefits: ["We offer roll-off containers for businesses, construction sites, oil fields, manufacturing companies, and more!", "Simple process - we deliver, you fill, we pick up", "Multiple sizes available for any metal load", "Safe and professional hauling services"],
    icon: "fas fa-box",
    content:
      "\n      <h3>Take Full Advantage of Our Commercial & Industrial Roll-Off Containers</h3>\n      <p>Contact K&L Recycling today to learn more about our scrap metal recycling facilities and mobile services. K&L Recycling has metal recycling facilities in Tyler, Crockett, Mineola, Palestine, Nacogdoches, Jasper and Jacksonville, TX, as well as Great Bend, KS. We also provide mobile car crushing, mobile demolition & scrap metal recycling throughout Texas, Oklahoma, Louisiana, New Mexico, Kansas and Arkansas.</p>\n\n      <p>If you have large piles of metal that you need to get rid of contact us to learn more about our roll-off containers.</p>\n\n      <h4>We offer roll-off containers for:</h4>\n      <ul>\n        <li>Businesses</li>\n        <li>Construction sites</li>\n        <li>Oil fields</li>\n        <li>Manufacturing companies</li>\n        <li>And more!</li>\n      </ul>\n\n      <p>We try to make the process as easy as possible for our clients. All you have to do is contact us to inquire about our roll-off containers services. One of our experienced representatives will get to know your roll-off needs and handle the rest from there. Once your roll-off container is delivered you simply start filling it and contact us to pick it up. We offer roll-off dumpsters in multiple sizes and are able to safely haul away any size metal load!</p>\n    ",
  },
  "oilfield-demolition": {
    id: "oilfield-demolition",
    title: "Oilfield & Gas Demolition",
    description: "We Bring Our 50 Years of Experience To Your Demolition Site. WE CONCENTRATE ON TEXAS, OKLAHOMA, KANSAS, LOUISIANA, ARKANSAS & NEW MEXICO, BUT WITH OUR MOBILE CREWS, WE CAN TRAVEL ALMOST ANYWHERE IN THE U.S.",
    image: "/assets/oilfield demo/oil-and-gas-demo-in-action.jpeg",
    details: ["Specialized oilfield equipment recovery", "Complete demolition and site cleanup", "DISA-certified operations", "Heavy equipment handling expertise"],
    benefits: ["When major oil & gas companies need to remove a bulk crude tank, many of them call on K&L to do the job safely, efficiently and professionally", "Our demolition team has the necessary experience and equipment needed to remove and process tanks from 400 bbl and up", "K&L regularly demolishes 100,000 bbl tanks in refineries and in the oilfield"],
    icon: "fas fa-oil-can",
    operationalDetails: {
      permits: ["DISA Waste Management Certification", "Texas Railroad Commission Permitting", "EPA Hazardous Waste Handling", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-12 personnel depending on project scope",
      equipment: ["Heavy-duty cranes and excavators", "Hazardous material containment units", "Specialized oilfield equipment recovery", "Transport trailers for oversized loads", "Environmental monitoring"],
      notes: "Pre-demolition assessment required. Specialized training for oilfield equipment handling.",
    },
    availableLocations: ["texas", "oklahoma", "kansas", "louisiana", "arkansas", "new-mexico"],
    content: '\n      <h3>We Bring Our 50 Years of Experience To Your Demolition Site</h3>\n      <p class="text-center font-bold text-orange-600 mb-4">WE CONCENTRATE ON TEXAS, OKLAHOMA, KANSAS, LOUISIANA, ARKANSAS & NEW MEXICO, BUT WITH OUR MOBILE CREWS, WE CAN TRAVEL ALMOST ANYWHERE IN THE U.S.</p>\n\n      <p>When major oil & gas companies need to remove a bulk crude tank, many of them call on K&L to do the job safely, efficiently and professionally. Our demolition team has the necessary experience and equipment needed to remove and process tanks from 400 bbl and up. K&L regularly demolishes 100,000 bbl tanks in refineries and in the oilfield.</p>\n    ',
  },
  "public-services": {
    id: "public-services",
    title: "Public Services & Community Recycling",
    description: "Recycle Metal the K&L Way. TRUST US WITH ALL OF YOUR FERROUS AND NON-FERROUS RECYCLING NEEDS. Are you searching for a facility that provides ferrous and non-ferrous metal recycling?",
    image: "/assets/equipment/in-action.png",
    details: ["Nine locations across East Texas and beyond", "Community-focused approach", "Educational outreach programs", "Municipal partnerships"],
    benefits: ["We have ferrous and non-ferrous metal recycling facilities in Tyler, Crockett, Mineola, Palestine, Nacogdoches, Jasper and Jacksonville, TX and Great Bend, KS", "We accept ferrous and non-ferrous metal items of all sizes", "Simply bring them down to one of our facilities, and we'll handle the rest and pay you CASH!"],
    icon: "fas fa-wrench",
    content:
      '\n      <h3>Recycle Metal the K&L Way</h3>\n      <p class="text-center font-bold text-green-600 mb-6">TRUST US WITH ALL OF YOUR FERROUS AND NON-FERROUS RECYCLING NEEDS</p>\n\n      <p>Are you searching for a facility that provides ferrous and non-ferrous metal recycling? We have ferrous and non-ferrous metal recycling facilities in Tyler, Crockett, Mineola, Palestine, Nacogdoches, Jasper and Jacksonville, TX and Great Bend, KS. We accept ferrous and non-ferrous metal items of all sizes. Simply bring them down to one of our facilities, and we\'ll handle the rest and pay you CASH!</p>\n\n      <div class="bg-green-50 p-6 rounded-lg my-6">\n        <h4 class="font-bold text-green-800 mb-3">Industrial Services Include:</h4>\n        <ul class="text-green-700">\n          <li>• K&L is the one to call for laydown yard clean outs</li>\n          <li>• Asset recovery/disposal</li>\n          <li>• Frac tank disposal</li>\n          <li>• Pipeline removal and other types of industrial demolition or disposal</li>\n        </ul>\n        <p class="mt-4 text-green-700 italic">Our processes do not require "HOT WORK"!</p>\n\n        <div class="mt-6 pt-4 border-t border-green-200">\n          <p class="font-bold text-green-800">K&L is an ISNetworld Member Contractor!</p>\n        </div>\n      </div>\n    ',
  },
};
