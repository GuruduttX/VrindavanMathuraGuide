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
  title: "Mathura Vrindavan Blogs | Travel, Temples, Darshan & Spiritual Guides",
  description:
    "Read our latest blogs on Mathura and Vrindavan covering temples, darshan timings, travel tips, festivals, Krishna leelas, tour guides, and spiritual experiences."
};


const page = async () => {

    
    const webPageSchema = {

        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Blog",
        "description":
            "Read the latest articles on digital marketing, technology, careers, and skill development from Course Unbox.",
        "url": " https://vrindavanmathuraguide.com/blog"

    };

    const breadcrumbSchema = {

        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": " https://vrindavanmathuraguide.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": " https://vrindavanmathuraguide.com/blog"
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