import InclusionExclusion from "@/components/PackageDetail/InclusionExclusion";
import PackageDurationStrip from "@/components/PackageDetail/PackageDurationStrip";
import PackageHighlights from "@/components/PackageDetail/PackageHighlights";
import PackageInclusionsStrip from "@/components/PackageDetail/PackageInclusionsStrip";
import GroupCta from "@/components/Home/GroupCta";
import DestinationRoute from "@/components/PackageDetail/DestinationRoute";
import ItineraryAccordion from "@/components/PackageDetail/ItineraryAccordion";
import PackageHero from "@/components/PackageDetail/PackageHero";
import Policies from "@/components/PackageDetail/Policies";
import ProductRatings from "@/components/PackageDetail/ProductRatings";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import SideForm from "@/components/PackageDetail/SideForm";
import FooterCTA from "@/utils/FooterCTA";
import PackageTestimonial from "@/components/PackageDetail/PackageTestimonial";
import PackageFaqSection from "@/components/PackageDetail/PackageFaqSection";
import PackageTestimonials from "@/components/PackageDetail/PackageTestimonial";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import KnowBeforeYouGo from "@/components/PackageDetail/KnowBeforeYouGo";
import TrustBuildingSection from "@/components/Home/TrustBuildSec";
import Script from "next/script";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const { data } = await supabase
        .from("Package")
        .select("*")
        .eq("slug", slug)
        .single();

    return {
        title: data?.meta?.title ?? "Trvel Package",
        description: data?.meta?.description ?? "",
    };


}

const getPackageData = async (slug: string) => {
  const { data, error } = await supabase.from("Package").select("*").eq("slug", slug).single();

  if (error) {
    console.log("There is some of the error I have get : ");
    console.log(error);
  }

  return data;
}




const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;
 
  const PackageData = await getPackageData(slug);

   const { data: packages, error } = await supabase
          .from("Package")
          .select("id, slug")
          .eq("slug", slug)
          .maybeSingle();
  
  
      if (!packages || error) {
  
          notFound();
  
      }

const baseUrl = "https://vrindavanmathuraguide.com";
const packageUrl = `${baseUrl}/packages/${PackageData?.slug}`;



  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${packageUrl}#tour`,
    "name": PackageData?.schema?.title || "Mathura Vrindavan Tour Package",
    "description": PackageData?.schema?.description,
    "touristType": "Religious Tour",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": PackageData?.itinerary?.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": item.title,
          "description": item.description
        }
      }))
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Vrindavan Mathura Guide",
      "url": baseUrl
    }
  };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${packageUrl}#product`,
  "name": PackageData?.schema?.title,
  "image": PackageData?.heroImage,
  "description": PackageData?.schema?.description,
  "category": "Tour Package",
  "brand": {
    "@type": "Brand",
    "name": "Vrindavan Mathura Guide"
  },
  "offers": {
    "@type": "Offer",
    "url": packageUrl,
    "priceCurrency": "INR",
    "price": PackageData?.price,
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": PackageData?.rating && {
    "@type": "AggregateRating",
    "ratingValue": PackageData.rating,
    "reviewCount": PackageData.reviewCount
  }
};

const faqSchema = PackageData?.faqs?.length
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${packageUrl}#faq`,
      "mainEntity": PackageData.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  : null;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${packageUrl}#breadcrumb`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Packages",
      "item": `${baseUrl}/packages`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": PackageData?.title,
      "item": packageUrl
    }
  ]
};

return (
  <>
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          [packageSchema, productSchema, faqSchema, breadcrumbSchema].filter(Boolean)
        ),
      }}
    />
      <Navbar />

      {/* HERO */}
      <PackageHero PackageData={PackageData} />

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="w-full min-h-screen bg-white  ">
        <div className="max-w-7xl mx-auto  py-12 ">

          {/* GRID */}
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10  ">

            {/* LEFT CONTENT */}
            <main className="space-y-12">

              <PackageDurationStrip
                duration="4D / 3N"
                breakdown={[
                  { days: 1, location: "Mathura" },
                  { days: 2, location: "Vrindavan" },
                  { days: 1, location: "Govardhan" },
                ]}
              />

              <PackageInclusionsStrip />

              <DestinationRoute />

              <PackageHighlights PackageData={PackageData} />

              <ItineraryAccordion PackageData={PackageData} />

              <InclusionExclusion PackageData={PackageData} />

            </main>

            {/* RIGHT SIDEBAR */}

            <aside className="hidden lg:block ">
              <div className="sticky top-28">
                <SideForm />
              </div>
            </aside>



          </div>
        </div>
      </section>

      {/* BELOW CONTENT */}
      <KnowBeforeYouGo PackageData={PackageData}/>
      <GroupCta />
      <ProductRatings />
      <PackageTestimonials PackageData={PackageData} />
      <TrustBuildingSection/>
      <PackageFaqSection PackageData={PackageData}/>
      <Policies PackageData={PackageData} />
      <FooterCTA />
      <Footer />
    </>
  );
};

export default page;
