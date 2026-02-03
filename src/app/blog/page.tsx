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


export const metadata: Metadata = {

    title: "Course Unbox Blogs | Digital Marketing, Tech & Career Insights",
    description: "Explore expert-written blogs on digital marketing, technology, online courses, and career growth. Stay updated with the latest learning insights from Course Unbox."

}


// const getBlogData = async() => { 

//     const {data , error} = await supabase.from("Blog").select("*"); 

//     if(error){
//         console.log("This is the error I have get in the Blog Archive Page : ");
//         console.log(error);
//     }

//     return data;
// }


const page = async () => {

    // const blog = await getBlogData();

    const webPageSchema = {

        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Blog",
        "description":
            "Read the latest articles on digital marketing, technology, careers, and skill development from Course Unbox.",
        "url": "https://courseunbox.com/blog"

    };

    const breadcrumbSchema = {

        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://courseunbox.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://courseunbox.com/blog"
            }
        ]

    };


    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([webPageSchema, breadcrumbSchema])
                }}
            />

            <Navbar />

            <LetsConnect />

            <PopularTours />

            {/* <Content /> */}

            <GroupCta />

            <VrindavanTrustStats />

            <FooterCTA />

            <Footer />
        </>
    );

}

export default page