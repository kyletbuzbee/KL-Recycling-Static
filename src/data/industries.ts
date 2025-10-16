interface IndustryPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  keyChallenges: string[];
  ourSolutions: {
    service: string;
    description: string;
    benefit: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
  materialsGenerated: string[];
  contactCTA: string;
  seoKeywords: string[];
}

export const industryPages: IndustryPageData[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    subtitle: "Efficient Metal Waste Management Solutions for Manufacturers",
    description: "Manufacturing operations generate significant amounts of metal scrap that need efficient collection and recycling. We understand the production schedules and material flows in manufacturing environments, offering tailored solutions that minimize downtime and maximize returns.",
    heroImage: "/images/Construction.jpg",
    keyChallenges: ["Managing scrap metal generation during production runs", "Minimizing facility downtime for scrap removal", "Ensuring compliance with environmental regulations", "Maximizing value from mixed metal waste streams", "Scheduling pickups around manufacturing operations"],
    ourSolutions: [
      {
        service: "Scheduled Roll-Off Containers",
        description: "Dedicated containers placed strategically around your facility for convenient scrap deposition",
        benefit: "Eliminate delays in production while ensuring continuous scrap collection",
      },
      {
        service: "Material Sorting Support",
        description: "Expert guidance on separating ferrous and non-ferrous materials for optimal pricing",
        benefit: "Increase value recovery by up to 20% through proper material segregation",
      },
      {
        service: "On-Site Processing",
        description: "Mobile equipment for on-site crushing and processing of large metal components",
        benefit: "Reduce transportation costs and improve operational efficiency",
      },
      {
        service: "Compliance Reporting",
        description: "Detailed reporting on recycled tonnage for environmental and regulatory compliance",
        benefit: "Maintain strong environmental stewardship documentation",
      },
    ],
    testimonial: {
      quote: "K&L's scheduled pickup service fits perfectly into our production schedule. We never have to worry about overflow containers disrupting our operations, and their sorting recommendations have increased our scrap value significantly.",
      name: "Mike Rodriguez",
      title: "Plant Manager",
      company: "Texas Metal Works",
    },
    materialsGenerated: ["Steel machine shavings and turnings", "Aluminum extrusions and castings", "Copper wire and electrical components", "Stainless steel tooling and fixtures", "Mixed ferrous scrap from machinery"],
    contactCTA: "Streamline your manufacturing waste management today",
    seoKeywords: ["manufacturing scrap metal recycling", "industrial metal waste management Texas", "factory scrap metal pickups", "manufacturing waste recycling", "industrial scrap collection services"],
  },
  {
    slug: "demolition",
    title: "Demolition & Construction",
    subtitle: "Safe and Efficient Scrap Metal Removal During Demolition Projects",
    description: "Demolition projects generate large volumes of mixed metals that require specialized handling and processing. Our experienced teams work alongside demolition contractors to ensure safe removal, proper sorting, and maximum value recovery from structural steel, wiring, and miscellaneous metal components.",
    heroImage: "/images/demolition-safety.png",
    keyChallenges: ["Handling large volumes of mixed construction waste", "Separating metals from concrete and other construction debris", "Managing safety hazards from unstable structures", "Meeting tight project timelines for metal removal", "Coordinating with demolition crews and schedules"],
    ourSolutions: [
      {
        service: "Pre-Demolition Assessment",
        description: "Expert evaluation of metal content and value potential before project start",
        benefit: "Plan for maximum recovery and identify high-value metal components",
      },
      {
        service: "Dedicated Demolition Teams",
        description: "Experienced personnel trained in safe practices for metal salvage during active demolition",
        benefit: "Ensure safety while efficiently removing and sorting metals in progress",
      },
      {
        service: "Heavy Equipment Support",
        description: "Large-capacity roll-off containers and loaders for handling bulky construction scrap",
        benefit: "Efficient handling of rebar, structural steel, and concrete-embedded metals",
      },
      {
        service: "Post-Demolition Cleanup",
        description: "Comprehensive metal removal and processing after major demolition activities",
        benefit: "Complete site cleanup and maximum value recovery from all metal materials",
      },
    ],
    testimonial: {
      quote: "Working with K&L on our demolition projects has been outstanding. Their team understands the hazards and timing constraints unique to demolition work. We've seen significant improvements in our project margins thanks to their expertise.",
      name: "Jennifer Torres",
      title: "Operations Manager",
      company: "City Demo Services",
    },
    materialsGenerated: ["Structural steel beams and rebar", "Copper wiring and electrical systems", "Aluminum windows and framing", "Stainless steel fixtures and equipment", "Mixed ferrous scrap from construction"],
    contactCTA: "Make your demolition projects more profitable",
    seoKeywords: ["demolition scrap metal recycling", "construction metal salvage Texas", "demolition waste recycling", "construction scrap metal removal", "building demolition metal recovery"],
  },
  {
    slug: "electrical-contractors",
    title: "Electrical Contractors",
    subtitle: "Streamlined Copper and Wire Recycling for Electrical Professionals",
    description: "Electrical contractors generate significant amounts of copper wiring, cables, and electrical components during installation and maintenance work. We specialize in recovering maximum value from electrical scrap while providing compliant handling of hazardous materials and environmentally responsible processing.",
    heroImage: "/images/electric_motors.jpg",
    keyChallenges: ["Handling insulated copper wire and cable", "Managing mixed electrical components", "Dealing with hazardous materials in electrical equipment", "Maximizing value from various copper wire gauges", "Maintaining compliance with electrical waste regulations"],
    ourSolutions: [
      {
        service: "Copper Wire Processing",
        description: "Advanced stripping and processing of insulated copper wire and cables",
        benefit: "Recover maximum value from copper content while properly handling insulation",
      },
      {
        service: "Electrical Component Salvage",
        description: "Specialized handling and recycling of transformers, motors, and switchgear",
        benefit: "Safe processing of potentially hazardous electrical equipment",
      },
      {
        service: "Project-Based Collections",
        description: "Scheduled pickup services coordinated with project timelines",
        benefit: "Remove scrap throughout projects without interrupting work schedules",
      },
      {
        service: "Material Testing Services",
        description: "Copper purity and conductivity testing to ensure fair pricing",
        benefit: "Guarantee you're receiving market value for high-grade copper",
      },
    ],
    testimonial: {
      quote: "The value we get from our copper wire scrap through K&L is incredible. Their processing equipment and expertise in electrical materials ensure we get top dollar for our waste.",
      name: "David Chen",
      title: "CEO",
      company: "Precision Electrical Contractors",
    },
    materialsGenerated: ["Copper wire and cable (various gauges)", "Insulated electrical cables", "Copper busbar and grounding systems", "Electrical motors and transformers", "Aluminum electrical components"],
    contactCTA: "Turn your electrical scrap into profits",
    seoKeywords: ["electrical contractor scrap metal", "copper wire recycling Texas", "electrical equipment salvage", "contractor copper waste recycling", "electrical scrap metal collection"],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Comprehensive Metal Recycling Solutions for Energy Operations",
    description: "The oil and gas industry generates significant metal waste from drilling operations, tank farms, and facility maintenance. Our specialized teams are equipped to handle the unique challenges of energy sector scrap metal recycling, including hazardous materials compliance and remote location services.",
    heroImage: "/assets/services/oilfield demo/oil-and-gas-demo-in-action.jpeg",
    keyChallenges: ["Managing remote oilfield locations and access constraints", "Handling contaminated equipment and hazardous materials", "Meeting EPA compliance for tank and vessel disposal", "Coordinating with drilling/production schedules", "Managing large-scale decommissioning projects"],
    ourSolutions: [
      {
        service: "Oilfield Equipment Decommissioning",
        description: "Complete removal and recycling of drilling rigs, tanks, and production equipment",
        benefit: "Maximize asset recovery while ensuring environmental compliance",
      },
      {
        service: "Tank Farm Cleanup",
        description: "Specialized decontamination and dismantling of crude oil storage facilities",
        benefit: "Safe handling of hazardous materials with regulatory expertise",
      },
      {
        service: "Pipeline Right-of-Way Clearance",
        description: "Efficient scrap removal during pipeline construction and maintenance",
        benefit: "Minimize project downtime while ensuring safety standards",
      },
      {
        service: "Regulatory Compliance Support",
        description: "Expert assistance with environmental permits and documentation",
        benefit: "Navigate complex EPA and state regulations confidently",
      },
    ],
    testimonial: {
      quote: "K&L understands the oilfield industry like no one else. Their teams are equipped for remote locations, know the regulations, and deliver the best value for our scrap assets. They've been instrumental in our decommissioning projects.",
      name: "Robert Harding",
      title: "Operations Director",
      company: "Texas Energy Resources Inc",
    },
    materialsGenerated: ["Structural steel from rigs and platforms", "Large capacity storage tanks", "Pipeline sections and fittings", "Wellhead equipment and valves", "Heavy drilling machinery components"],
    contactCTA: "Optimize your oil and gas decommissioning process",
    seoKeywords: ["oil gas scrap metal recycling", "oilfield equipment disposal Texas", "tank farm cleanup services", "pipeline construction scrap removal", "energy sector metal salvage"],
  },
  {
    slug: "government-municipal",
    title: "Government & Municipal",
    subtitle: "Reliable Metal Waste Management for Public Sector Operations",
    description: "Government agencies and municipalities have unique requirements for scrap metal recycling, including public accountability, environmental compliance, and budget-conscious operations. We provide comprehensive solutions tailored to the specific needs of public sector clients.",
    heroImage: "/assets/equipment/public-works.png",
    keyChallenges: ["Managing public scrutiny and accountability requirements", "Working within strict municipal budgets", "Meeting environmental compliance standards", "Handling diverse facility types and locations", "Coordinating with multiple departments and stakeholders"],
    ourSolutions: [
      {
        service: "Fleet Vehicle Disposal",
        description: "Complete vehicle recycling from municipal and county vehicle fleets",
        benefit: "Maximize asset value while following disposal regulations",
      },
      {
        service: "Facility Maintenance Support",
        description: "Ongoing scrap collection from public buildings and facilities",
        benefit: "Regular service without disrupting public operations",
      },
      {
        service: "Disaster Recovery Services",
        description: "Rapid response metal debris removal after storms and emergencies",
        benefit: "Quick cleanup to restore community infrastructure",
      },
      {
        service: "Public Works Equipment",
        description: "Recycling and disposal of heavy machinery and equipment",
        benefit: "Efficient handling of municipal equipment lifecycle",
      },
    ],
    testimonial: {
      quote: "K&L has been our trusted partner for municipal fleet disposal for over 15 years. Their professionalism, compliance, and competitive pricing make them the perfect choice for government agencies with tight budgets and strict accountability requirements.",
      name: "Maria Gonzalez",
      title: "Fleet Services Manager",
      company: "Harris County Department of Transportation",
    },
    materialsGenerated: ["Municipal vehicle frames and components", "Street signs and traffic signals", "Public works heavy equipment", "Facility maintenance scrap", "Infrastructure project debris"],
    contactCTA: "Serve your community while generating revenue",
    seoKeywords: ["municipal scrap metal recycling", "government fleet disposal Texas", "public sector metal waste management", "municipal vehicle recycling", "county equipment salvage"],
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial Property",
    subtitle: "Streamlined Metal Waste Solutions for Property Operations",
    description: "Commercial property owners, facility managers, and industrial property operators need efficient metal waste management solutions that minimize disruption and maximize returns. We specialize in property-specific recycling programs that integrate seamlessly with facility operations.",
    heroImage: "/assets/services/roll-off/kl-recycling-roll-off-container-full.jpeg",
    keyChallenges: ["Minimizing disruption during business hours", "Managing tenant and customer space constraints", "Handling mixed waste from multiple tenants", "Maintaining property aesthetics during collections", "Dealing with various building types and layouts"],
    ourSolutions: [
      {
        service: "Building Renovation Support",
        description: "Strategic metal waste removal during construction and renovations",
        benefit: "Keep projects on schedule while capturing scrap value",
      },
      {
        service: "Facility Maintenance Programs",
        description: "Regular collection schedules for ongoing property operations",
        benefit: "Consistent service without major disruptions",
      },
      {
        service: "Warehouse Cleanouts",
        description: "Efficient processing of accumulated industrial scrap",
        benefit: "Transform storage problems into revenue streams",
      },
      {
        service: "Multi-Tenant Coordination",
        description: "Expert handling of shared spaces and mixed tenant waste",
        benefit: "Provide single-point service for complex properties",
      },
    ],
    testimonial: {
      quote: "As a commercial property manager, I need reliability and professionalism. K&L delivers both while actually saving us money through their excellent scrap pricing. Their understanding of commercial operations makes them invaluable.",
      name: "Steven Wallace",
      title: "Vice President of Operations",
      company: "Metro Properties Texas",
    },
    materialsGenerated: ["HVAC system components", "Electrical wiring and fixtures", "Steel framing and supports", "Roofing materials with metal", "Manufacturing equipment and tooling"],
    contactCTA: "Transform property waste into property value",
    seoKeywords: ["commercial property scrap metal", "industrial facility waste management Texas", "property management metal recycling", "commercial building cleanout services", "industrial property scrap collection"],
  },
  {
    slug: "automotive-transportation",
    title: "Automotive & Transportation",
    subtitle: "Fleet Management and Vehicle Recycling Expertise",
    description: "The automotive and transportation sectors generate substantial metal waste from fleet operations, maintenance, and vehicle disposition. Our specialized services are designed for auto dealerships, fleet managers, transportation companies, and salvage operations throughout Texas.",
    heroImage: "/assets/car crushing/car-crushing.png",
    keyChallenges: ["Managing fleet vehicle lifecycles and disposal", "Handling contaminated vehicle components", "Maintaining compliance with vehicle disposal regulations", "Optimizing value from auto salvage operations", "Coordinating large-volume fleet disposals"],
    ourSolutions: [
      {
        service: "Fleet Vehicle Disposal",
        description: "Complete end-of-life vehicle processing for commercial fleets",
        benefit: "Maximize returns while ensuring environmental compliance",
      },
      {
        service: "Auto Salvage Enhancement",
        description: "Value-added processing for salvage yard operations",
        benefit: "Increase salvage value through expert dismantling and sorting",
      },
      {
        service: "Mobile Crushing Services",
        description: "On-site vehicle processing to reduce transportation costs",
        benefit: "Efficient handling of large volumes without facility constraints",
      },
      {
        service: "Component Recovery",
        description: "Specialized extraction of valuable auto components",
        benefit: "High-value recovery from engines, transmissions, and electronics",
      },
    ],
    testimonial: {
      quote: "Managing a large trucking fleet means we have constant vehicle turnover. K&L's expertise in automotive recycling, combined with their mobile services, makes fleet management much more efficient and profitable.",
      name: "Carlos Martinez",
      title: "Fleet Manager",
      company: "Southwest Trucking Solutions",
    },
    materialsGenerated: ["Vehicle frames and body panels", "Engine blocks and transmissions", "Aluminum wheels and radiators", "Copper wiring and batteries", "Steel from heavy trucks and trailers"],
    contactCTA: "Maximize your fleet's residual value",
    seoKeywords: ["automotive scrap metal recycling", "fleet vehicle disposal Texas", "auto salvage services", "transportation equipment recycling", "commercial vehicle scrap"],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    subtitle: "Specialized Metal Recycling for Agricultural Operations",
    description: "Agricultural operations, from small family farms to large commercial agribusinesses, generate significant metal waste from equipment, irrigation systems, and facility maintenance. We provide comprehensive recycling solutions tailored to the agricultural sector's unique needs and schedules.",
    heroImage: "/assets/equipment/hay-bale-equipment.png",
    keyChallenges: ["Dealing with seasonal operational demands", "Managing remote farm and ranch locations", "Processing large agricultural equipment", "Handling equipment contaminated with soil or chemicals", "Timing collections around harvest and planting seasons"],
    ourSolutions: [
      {
        service: "Farm Equipment Recycling",
        description: "Expert disposal and recycling of tractors, combines, and implements",
        benefit: "Maximize equipment residual value at end of useful life",
      },
      {
        service: "Irrigation System Upgrade",
        description: "Recovery and recycling during irrigation system replacements",
        benefit: "Capture value while upgrading to more efficient systems",
      },
      {
        service: "Grain Storage Facilities",
        description: "Metal scrap removal from storage structure maintenance",
        benefit: "Maintain facility efficiency while generating revenue",
      },
      {
        service: "Seasonal Collection Services",
        description: "Flexible pickup timing around agricultural calendars",
        benefit: "No interruption of critical farming operations",
      },
    ],
    testimonial: {
      quote: "K&L respects our seasonal schedule and understands agricultural operations. When we upgrade equipment or replace irrigation systems, they help us recover significant value from the old equipment. Excellent service.",
      name: "Linda Patterson",
      title: "Farm Manager",
      company: "Texas Valley Farms",
    },
    materialsGenerated: ["Farm tractor frames and implements", "Irrigation pipe and sprinkler systems", "Grain bin structures and ladders", "Fencing and livestock handling equipment", "Heavy agricultural machinery components"],
    contactCTA: "Turn farm upgrades into profit opportunities",
    seoKeywords: ["agricultural scrap metal recycling", "farm equipment disposal Texas", "irrigation system scrap", "grain storage metal salvage", "agricultural machinery recycling"],
  },
  {
    slug: "chemical-processing",
    title: "Chemical Processing",
    subtitle: "Safe and Compliant Metal Waste Management for Chemical Facilities",
    description: "Chemical processing facilities produce specialized metal waste that requires expert handling due to potential contamination, corrosion resistance, and regulatory compliance requirements. Our chemical processing expertise ensures safe, compliant, and valuable recycling solutions.",
    heroImage: "/assets/services/oilfield demo/oil-and-gas-demo-in-action.jpeg",
    keyChallenges: ["Managing chemically contaminated equipment", "Meeting strict environmental and safety regulations", "Handling corrosion-resistant alloys", "Coordinating with hazardous material protocols", "Maintaining facility safety during cleanup operations"],
    ourSolutions: [
      {
        service: "Process Equipment Decommissioning",
        description: "Specialized dismantling of chemical processing equipment",
        benefit: "Safe handling with full compliance expertise",
      },
      {
        service: "Corrosion-Resistant Alloy Processing",
        description: "Expert recycling of stainless steel and specialty alloys",
        benefit: "Maximize value from high-grade specialty materials",
      },
      {
        service: "Hazardous Waste Protocols",
        description: "Compliance with chemical decontamination requirements",
        benefit: "Complete environmental and regulatory compliance",
      },
      {
        service: "Facility Upgrade Support",
        description: "Metal waste management during plant modernization",
        benefit: "Continuous operations during facility improvements",
      },
    ],
    testimonial: {
      quote: "Safety and compliance are paramount in chemical processing. K&L's expertise in handling contaminated equipment and their knowledge of environmental regulations gives us confidence in their professional approach.",
      name: "Dr. Ahmed Hassan",
      title: "Environmental Compliance Officer",
      company: "Texas Chemical Solutions",
    },
    materialsGenerated: ["Stainless steel process tanks and vessels", "Corrosion-resistant piping systems", "Specialized alloy heat exchangers", "Containment equipment and trays", "Safety and monitoring equipment"],
    contactCTA: "Safely manage your chemical processing waste",
    seoKeywords: ["chemical processing scrap metal", "industrial chemical facility waste", "stainless steel recycling Texas", "corrosion resistant alloy salvage", "processing equipment disposal"],
  },
];

export const getIndustryPage = (slug: string): IndustryPageData | undefined => {
  return industryPages.find((industry) => industry.slug === slug);
};
