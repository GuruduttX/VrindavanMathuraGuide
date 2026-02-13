import Navbar from '@/utils/Navbar';
import Footer from '@/utils/Footer';
// import Content from '@/components/blog/Content';
import FooterCTA from "@/utils/FooterCTA";
// import LetsConnect from "@/components/Home/LetsConnect";
// import { supabase } from '@/lib/supabse/supabaseConfig';
import type { Metadata } from 'next';
import LetsConnect from '@/components/Blog/LetsConnect';
import VrindavanTrustStats from '@/components/Home/VrindavanTrustStats';
import GroupCta from '@/components/Home/GroupCta';
import PopularTours from '@/components/Home/PopularPackages';
import BlogArchive from '@/components/Blog/BlogArchive';
import Script from 'next/script';


export const metadata: Metadata = {
  title: "Mathura Vrindavan Blog | Temple Darshan, Travel & Spiritual Guides",
  description:
    "Explore detailed guides on Mathura & Vrindavan temples, darshan timings, travel tips, festivals, Govardhan Parikrama and Krishna leelas.",
  alternates: {
    canonical: "https://vrindavanmathuraguide.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mathura Vrindavan Blog",
    description:
      "Temple darshan guides, travel tips, festival updates and spiritual insights from Mathura & Vrindavan.",
    url: "https://vrindavanmathuraguide.com/blog",
    type: "website",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Mathura Vrindavan Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Blog",
    description:
      "Temple darshan timings, Govardhan Parikrama guide and travel tips.",
    images: ["https://vrindavanmathuraguide.com/og-blog.jpg"],
  },
};



const page = async () => {

    
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://vrindavanmathuraguide.com/blog#webpage",
        "name": "Mathura Vrindavan Blog",
        "description":
            "Read travel guides, temple information, darshan timings and spiritual articles about Mathura and Vrindavan.",
        "url": "https://vrindavanmathuraguide.com/blog"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://vrindavanmathuraguide.com/blog#breadcrumb",
        "itemListElement": [
            {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vrindavanmathuraguide.com/"
            },
            {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://vrindavanmathuraguide.com/blog"
            }
        ]
    };



    return (

        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([webPageSchema, breadcrumbSchema])
                }}
            />

            <Navbar />

            <LetsConnect />

            <BlogArchive />

            <PopularTours />

            <GroupCta />

            <VrindavanTrustStats />

            <FooterCTA />

            <Footer />
        </>
    );

}

export default page