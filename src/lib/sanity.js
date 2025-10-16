import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

// Query helpers
export async function getBlogs() {
  return sanityClient.fetch(`*[_type == "blog"] | order(publishedAt desc){
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    seoTitle,
    seoDescription
  }`);
}

export async function getBlogBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    body,
    excerpt,
    seoTitle,
    seoDescription
  }`,
    { slug },
  );
}

export async function getCareers() {
  return sanityClient.fetch(`*[_type == "career" && isActive == true] | order(postedAt desc){
    _id,
    title,
    slug,
    location,
    employmentType,
    department,
    description,
    requirements,
    benefits,
    salaryRange,
    contactEmail,
    applicationDeadline,
    isActive,
    postedAt
  }`);
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(publishedAt desc){
    _id,
    name,
    company,
    role,
    content,
    rating,
    image,
    projectType,
    location,
    featured,
    verified,
    publishedAt
  }`);
}

export async function getFeaturedTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial" && featured == true] | order(publishedAt desc)`);
}

// Service-related queries
export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc){
    _id,
    title,
    slug,
    description,
    image,
    details,
    benefits,
    operationalDetails,
    availableLocations,
    content,
    icon,
    category,
    isActive,
    order,
    seoTitle,
    seoDescription
  }`);
}

export async function getServiceBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    image,
    details,
    benefits,
    operationalDetails,
    availableLocations,
    content,
    icon,
    category,
    isActive,
    order,
    seoTitle,
    seoDescription
  }`,
    { slug },
  );
}

export async function getServicesByCategory(category) {
  return sanityClient.fetch(`*[_type == "service" && category == $category && isActive == true] | order(order asc)`, { category });
}

// Location-related queries
export async function getLocations() {
  return sanityClient.fetch(`*[_type == "location" && isActive == true] | order(state, city){
    _id,
    name,
    slug,
    city,
    state,
    type,
    address,
    phone,
    coordinates,
    hours,
    services[]->{
      _id,
      title,
      slug,
      category,
      icon
    },
    images[],
    description,
    specialties,
    equipment,
    isActive,
    seoTitle,
    seoDescription
  }`);
}

export async function getLocationBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "location" && slug.current == $slug && isActive == true][0]{
    _id,
    name,
    slug,
    city,
    state,
    type,
    address,
    phone,
    coordinates,
    hours,
    services[]->{
      _id,
      title,
      slug,
      category,
      icon,
      description
    },
    images[],
    description,
    specialties,
    equipment,
    isActive,
    seoTitle,
    seoDescription
  }`,
    { slug },
  );
}

export async function getLocationsByState(state) {
  return sanityClient.fetch(`*[_type == "location" && state == $state && isActive == true] | order(city)`, { state });
}

// Case study-related queries
export async function getCaseStudies(limit = 50) {
  return sanityClient.fetch(`*[_type == "caseStudy" && isPublished == true] | order(projectDate desc)[0...$limit]{
    _id,
    title,
    slug,
    client,
    clientIndustry,
    location,
    servicesUsed[]->{
      _id,
      title,
      slug,
      category,
      icon
    },
    challenge,
    solution,
    results,
    beforeImages[],
    afterImages[],
    inProgressImages[],
    testimonial,
    testimonialName,
    projectDate,
    projectValue,
    environmentalImpact,
    featured,
    isPublished,
    seoTitle,
    seoDescription
  }`, { limit });
}

export async function getCaseStudyBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug && isPublished == true][0]{
    _id,
    title,
    slug,
    client,
    clientIndustry,
    location,
    servicesUsed[]->{
      _id,
      title,
      slug,
      category,
      icon,
      description
    },
    challenge,
    solution,
    results,
    beforeImages[],
    afterImages[],
    inProgressImages[],
    testimonial,
    testimonialName,
    projectDate,
    projectValue,
    environmentalImpact,
    featured,
    isPublished,
    seoTitle,
    seoDescription
  }`,
    { slug },
  );
}

export async function getFeaturedCaseStudies() {
  return sanityClient.fetch(`*[_type == "caseStudy" && featured == true && isPublished == true] | order(projectDate desc)`)
}

export async function getCaseStudiesByIndustry(industry) {
  return sanityClient.fetch(`*[_type == "caseStudy" && clientIndustry == $industry && isPublished == true] | order(projectDate desc)`, { industry });
}

// Industry-related queries
export async function getIndustries(limit = 20) {
  return sanityClient.fetch(`*[_type == "industry"] | order(order asc)[0...$limit]{
    _id,
    name,
    slug,
    title,
    subtitle,
    description,
    heroImage,
    keyChallenges,
    ourSolutions,
    testimonial,
    materialsGenerated,
    contactCTA,
    isActive,
    order,
    seoTitle,
    seoDescription,
    seoKeywords,
    featuredCaseStudies[]->{
      _id,
      title,
      slug,
      client,
      results
    }
  }`, { limit });
}

export async function getIndustryBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "industry" && slug.current == $slug && isActive == true][0]{
    _id,
    name,
    slug,
    title,
    subtitle,
    description,
    heroImage,
    keyChallenges,
    ourSolutions,
    testimonial,
    materialsGenerated,
    contactCTA,
    isActive,
    order,
    seoTitle,
    seoDescription,
    seoKeywords,
    featuredCaseStudies[]->{
      _id,
      title,
      slug,
      client,
      results
    }
  }`,
    { slug },
  );
}

// Combined queries for industry pages
export async function getIndustryPageData(slug) {
  const [industry, caseStudies, services] = await Promise.all([
    getIndustryBySlug(slug),
    getCaseStudiesByIndustry(slug),
    getServices(), // Get all services for cross-referencing
  ]);

  return {
    industry,
    caseStudies,
    services,
  };
}
