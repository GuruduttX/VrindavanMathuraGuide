import Navbar from '@/utils/Navbar'
import React from 'react'
import EnquirySection from '@/components/Home/Enquiryform'
import GroupCta from '@/components/Home/GroupCta'
import HomeFAQSection from '@/components/Home/HomeFaqs'
import PhotoGallerySection from '@/components/Home/PhotoGallerySec'
import PopularTours from '@/components/Home/PopularPackages'
import ToursWeOperate from '@/components/Home/ToursWeOperateSection'
import TrustBuildingSection from '@/components/Home/TrustBuildSec'
import VrindavanTrustStats from '@/components/Home/VrindavanTrustStats'
import HeroSection from '@/components/Home/Hero'
import Footer from '@/utils/Footer'
import FooterCTA from '@/utils/FooterCTA'
import DestinationFilter from '@/components/Home/DestinationFilter'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import type { Metadata } from "next";
import { supabase } from '@/lib/supabase/SupabaseConfig'
import Script from 'next/script'
import DestinationRoute from '@/components/PackageDetail/DestinationRoute'

export const metadata: Metadata = {
  title: "Mathura Vrindavan Tour Packages | Local Guide, Taxi & Temple Darshan",
  description:
    "Explore Mathura & Vrindavan with trusted local tour guides. Book temple darshan, taxi services and customized spiritual tour packages at the best price.",
  keywords: [
    "Mathura Vrindavan tour package",
    "Vrindavan local guide",
    "Mathura taxi service",
    "Temple darshan package",
    "Mathura Vrindavan travel guide",
  ],
  alternates: {
    canonical: "https://vrindavanmathuraguide.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mathura Vrindavan Tour Packages | Local Guide & Darshan",
    description:
      "Discover Mathura & Vrindavan with expert local guides. Taxi, temple darshan & spiritual tour packages available.",
    url: "https://vrindavanmathuraguide.com/",
    siteName: "Mathura Vrindavan Tour Guide",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/og-mathura-vrindavan-tour.jpg",
        width: 1600,
        height: 900,
        alt: "Mathura Vrindavan Tour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Tour Packages",
    description:
      "Book Mathura Vrindavan tours with local guides, taxi & darshan services.",
    images: ["https://vrindavanmathuraguide.com/og-mathura-vrindavan-tour.jpg"],
  },
};


const getPackageData = async () => {

  const {data , error} = await supabase.from("Package").select("*");

  if(error) {
    console.log("This is the error I have get in the Home Page Packages Filter : ");
    console.log(error);
  }

  return data;
}



const Home = async () => {

  const PackageData = await getPackageData();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mathura Vrindavan Tour Guide",
    "url": " https://vrindavanmathuraguide.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": " https://vrindavanmathuraguide.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Mathura Vrindavan Tour Guide",
    "url": "https://vrindavanmathuraguide.com/",
    "logo": " https://vrindavanmathuraguide.com/Experience_my_India.webp",
    "description":
      "Mathura Vrindavan Tour Guide offers local guides, taxi services, temple darshan assistance and customized spiritual tour packages.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mathura",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan"
    },
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Mathura Vrindavan Temples",
    "description":
      "Sacred Krishna temples in Mathura and Vrindavan including Banke Bihari Temple, ISKCON Temple and Shri Krishna Janmabhoomi.",
    "touristType": "Spiritual Travelers",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best tour guide for Mathura and Vrindavan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The best Mathura Vrindavan tour guide is one who provides local expertise, flexible tour planning, temple darshan assistance and reliable taxi services. A trusted local guide ensures a peaceful and well-organized spiritual journey."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in Mathura Vrindavan tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Mathura Vrindavan tour packages usually include local sightseeing, temple darshan assistance, taxi services, guided tours, and customized itineraries based on your travel duration."
        }
      },
      {
        "@type": "Question",
        "name": "Is one day enough for Mathura Vrindavan tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "One day is sufficient for a quick Mathura Vrindavan tour covering major temples, but a 2–3 day tour is recommended for a relaxed and complete spiritual experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide taxi services for Mathura Vrindavan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, reliable taxi services are available for Mathura and Vrindavan sightseeing, including pickup from Delhi, Agra and nearby cities."
        }
      }
    ]
  };
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            touristAttractionSchema,
            faqSchema
          ])
        }}
      />
      <Navbar />
      <HeroSection />
      <DestinationFilter PackageData={PackageData}/>
      <EnquirySection />
      <PopularTours />
      <GroupCta />
      <WhyChooseUs />
      <TrustBuildingSection />
      <PhotoGallerySection />
      <HomeFAQSection />
      <ToursWeOperate />
      <VrindavanTrustStats />
      <FooterCTA />
      <Footer />
    </>
  )
}

export default Home