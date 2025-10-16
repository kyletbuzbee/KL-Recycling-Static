import { sanityClient } from './sanity';
import { SERVICES_DATA } from '@/data/services';

// Migration utility to import existing static service data into Sanity CMS
export async function migrateServicesToCMS() {
  console.log('Starting services migration to Sanity CMS...');

  const services = Object.values(SERVICES_DATA);
  let migratedCount = 0;
  let skippedCount = 0;

  for (const service of services) {
    try {
      // Check if service already exists
      const existingService = await sanityClient.fetch(
        `*[_type == "service" && category == $category][0]`,
        { category: service.id }
      );

      if (existingService) {
        console.log(`Service ${service.title} already exists, skipping...`);
        skippedCount++;
        continue;
      }

      // Transform the static data to CMS format
      const cmsService = {
        _type: 'service',
        title: service.title,
        slug: { current: service.id },
        description: service.description,
        content: service.content,
        details: service.details,
        benefits: service.benefits,
        category: service.id,
        icon: service.icon,
        image: service.image.startsWith('/assets/') ? service.image : undefined,
        operationalDetails: service.operationalDetails,
        availableLocations: service.availableLocations,
        isActive: true,
        order: Object.keys(SERVICES_DATA).indexOf(service.id),
        seoTitle: service.title,
        seoDescription: service.description,
      };

      // Create the service in Sanity
      await sanityClient.create(cmsService);
      console.log(`✅ Migrated: ${service.title}`);
      migratedCount++;

    } catch (error) {
      console.error(`❌ Failed to migrate ${service.title}:`, error);
    }
  }

  console.log(`Migration complete: ${migratedCount} services migrated, ${skippedCount} skipped`);
  return { migratedCount, skippedCount };
}

// Migration utility for locations
export async function migrateLocationsToCMS() {
  // This would require the locations data to be imported from wherever it's stored
  // For now, this is a placeholder
  console.log('Location migration not implemented yet - requires location data source');
}

// Migration utility for case studies (placeholder)
export async function createSampleCaseStudies() {
  console.log('Creating sample case studies...');

  const sampleCaseStudies = [
    {
      _type: 'caseStudy',
      title: 'Downtown Tyler Office Complex Demolition',
      slug: { current: 'tyler-office-demolition' },
      client: 'Tyler Properties LLC',
      clientIndustry: 'construction-demolition',
      location: 'Tyler, TX',
      servicesUsed: [], // Will be populated with service references after services are migrated
      challenge: 'A 15-story office building needed complete demolition within a 90-day timeframe to clear land for a new residential development. The site was in downtown Tyler with strict noise and dust control requirements.',
      solution: 'K&L deployed a combination of our oilfield demolition expertise and urban demolition techniques. We used selective demolition methods to preserve adjacent structures while achieving complete building removal ahead of schedule.',
      results: 'Project completed in 73 days, recovered 2,100 tons of recyclable steel at $285,000 value. Zero safety incidents and full compliance with city noise ordinances.',
      testimonial: 'K&L\'s professional team made what could have been a disruptive project seamless. Their attention to safety and the community was exceptional.',
      testimonialName: 'Sarah Johnson, Project Manager - Tyler Properties LLC',
      projectDate: '2024-08-15',
      projectValue: '2,100 tons of steel • $285,000 recovered value',
      environmentalImpact: '100% of materials recycled, preventing 3,400 tons of landfill waste',
      featured: true,
      isPublished: true,
    },
    {
      _type: 'caseStudy',
      title: 'East Texas Oilfield Tank Farm Cleanup',
      slug: { current: 'east-texas-tank-farm' },
      client: 'Barnett Oil & Gas',
      clientIndustry: 'oil-gas',
      location: 'Kilgore, TX',
      servicesUsed: [], // Will be populated with service references
      challenge: 'Abandoned refinery with 12 large crude oil storage tanks spanning 50 acres required environmental cleanup and asset recovery before property redevelopment.',
      solution: 'Utilized our specialized oilfield demolition crew with DISA certification and environmental containment systems. Performed controlled tank deconstruction with complete hazardous material handling.',
      results: 'Successfully processed all tanks, recovered $420,000 in steel value, and achieved EPA compliance for site redevelopment.',
      testimonial: 'K&L\'s expertise in handling complex oilfield decommissioning made this project possible. Their safety protocols and regulatory knowledge were invaluable.',
      testimonialName: 'Robert Chen, Operations Director - Barnett Oil & Gas',
      projectDate: '2024-06-30',
      projectValue: '45,000 bbl tank farm • $420,000 steel recovery',
      environmentalImpact: 'Proper disposal of 50,000 gallons of hazardous liquids • Zero environmental violations',
      featured: true,
      isPublished: true,
    },
  ];

  let createdCount = 0;
  for (const caseStudy of sampleCaseStudies) {
    try {
      await sanityClient.create(caseStudy);
      console.log(`✅ Created case study: ${caseStudy.title}`);
      createdCount++;
    } catch (error) {
      console.error(`❌ Failed to create ${caseStudy.title}:`, error);
    }
  }

  console.log(`Sample case studies creation complete: ${createdCount} created`);
  return { createdCount };
}
