import Navbar from "@/utils/Navbar";
import PackageHero from "@/components/Packages/PackageHero";
import AboutPackages from "@/components/Packages/AboutPackages";
import PackagesSlider from "@/components/Packages/PackagesSlider";
import PackagesCTA from "@/components/Packages/PackagesCTA";
import PackagesFaq from "@/components/Packages/PackageFaqs";
import PackagesGrid from "@/components/Packages/PackagesGrid";
import Footer from "@/utils/Footer";
import VrindavanTrustStats from "@/components/Home/VrindavanTrustStats";
import FooterCTA from "@/utils/FooterCTA";
import type { Metadata } from "next";
import Script from "next/script";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import TrustBuildingSection from "@/components/Home/TrustBuildSec";


export const metadata: Metadata = {
  title: "Vrindavan Tour Packages | Mathura Vrindavan Yatra",
  description:
    "Explore the best Vrindavan tour packages including Mathura, Govardhan Parikrama and spiritual yatras. Well-planned itineraries, trusted guides, and affordable pricing.",
}
const faqs = [
  {
    question: "Which Mathura Vrindavan tour package is best for first-time visitors?",
    answer:
      "For first-time visitors, we recommend our 1 Day or 2 Days Mathura Vrindavan tour packages. These cover major temples like Krishna Janmabhoomi, Banke Bihari Ji, ISKCON Temple, Prem Mandir, and Yamuna Ghats at a comfortable pace.",
  },
  {
    question: "Are Mathura Vrindavan tour packages suitable for senior citizens?",
    answer:
      "Yes, our Mathura Vrindavan packages are designed to be senior-citizen friendly. We provide AC vehicles, slow-paced itineraries, minimal walking options, and assistance during temple darshan wherever possible.",
  },
  {
    question: "Do your packages include pickup and drop?",
    answer:
      "Yes, most of our Mathura Vrindavan tour packages include pickup and drop services from Mathura Railway Station, hotels, or nearby locations. Pickup points can be customized as per your requirement.",
  },
  {
    question: "Can I customize a Mathura Vrindavan tour package?",
    answer:
      "Absolutely. All our packages can be customized based on your time, group size, darshan preference, and comfort level. You can also include Govardhan Parikrama, Barsana, Nandgaon, or Gokul in your itinerary.",
  },
  {
    question: "What is the best time to visit Mathura and Vrindavan?",
    answer:
      "The best time to visit Mathura and Vrindavan is from October to March when the weather is pleasant. Festivals like Janmashtami and Holi are spiritually vibrant but attract large crowds.",
  },
  {
    question: "Are guides included in Mathura Vrindavan tour packages?",
    answer:
      "Yes, experienced local Braj guides are available with most of our packages. They help with temple history, darshan timings, and navigating crowded areas efficiently.",
  },
];



 async function  getAllPackages(){
   const {data , error} = await supabase.from('Package').select('*');
   
   if(error){
      console.log("package", error.message)
      return [];
   }

   return data;
}



export default async function Page() {
  const packages = await getAllPackages();

  console.log("packages", packages)
  return (
    <div>

      

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Vrindavan Tour Packages",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": "https://vrindavanmathuraguide.com/packages/mathura-vrindavan-tour"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": "https://vrindavanmathuraguide.com/packages/govardhan-parikrama"
              }
            ]
          })
        }}
      />

      <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://vrindavanmathuraguide.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Packages",
              "item": "https://vrindavanmathuraguide.com/packages"
            }
          ]
        })
      }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
        })
      }}
    />



      <Navbar />

      <PackageHero
        badge="Most Popular Vrindavan Yatra"
        title="Vrindavan Tour Package"
        description="Experience the divine land of Shri Krishna with a peaceful and well-planned Vrindavan tour. This package covers major temples, sacred ghats, and spiritual landmarks with comfort, devotion, and local guidance."
        image="/images/Packages/package-hero.webp"
        
      />

      <AboutPackages />
      <PackagesGrid packages={packages}/>
      <PackagesCTA />
       <TrustBuildingSection/>
      <VrindavanTrustStats />
      <PackagesFaq />
      <FooterCTA />
      <Footer />
    </div>
  );
}
