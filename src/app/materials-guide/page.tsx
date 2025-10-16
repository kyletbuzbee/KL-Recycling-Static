import { Metadata } from "next";
import { redirect } from "next/navigation";
import MaterialsGuideApp from "@/features/materials-guide/components/MaterialsGuideApp";

export const metadata: Metadata = {
  title: "Materials We Buy | K&L Recycling Pricing Guide",
  description: "Search our comprehensive materials guide. See real-time pricing, accepted materials, and calculate your recycling environmental impact. East Texas.",
  keywords: "scrap metal prices, recycling materials, steel prices, copper prices, aluminum prices, environmental impact calculator",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <MaterialsGuideApp />
    </div>
  );
}

// Redirect old pages to app router version
export async function generateStaticParams() {
  return [{ slug: "materials-guide" }];
}

// Revalidate data every hour
export const revalidate = 3600;
