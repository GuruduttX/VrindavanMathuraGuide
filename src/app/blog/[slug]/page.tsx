import { notFound } from "next/navigation";
import Navbar from "@/utils/Navbar";
import Foter from "@/utils/Footer"
import RelatedBlog from "@/components/Blog/RelatedBlog";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import AddCard from "@/components/Blog/AddCTA";
import BlogCategories from "@/components/Blog/BlogCategories";
import FinalCTASection from "@/components/Blog/FinalCTASection";
import LeftContent from "@/components/Blog/LeftContent";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import Script from "next/script";
import FooterCTA from "@/utils/FooterCTA";
import TrustBuildingSection from "@/components/Home/TrustBuildSec";
import GroupCta from "@/components/Home/GroupCta";




export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const { data } = await supabase
        .from("Blog")
        .select("*")
        .eq("slug", slug)
        .single();

    return {
        title: data?.meta?.title ?? "VrindavanTourGuide Blog",
        description: data?.meta?.description ?? "",
    };


}


const getBlogData = async (BlogId: string) => {
    const { data, error } = await supabase
        .from("Blog")
        .select("*")
        .eq("slug", BlogId)
        .single();

    if (error) {

        console.error(error);

    }

    return data;


}


const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;

    console.log("THE ID WE HAVE GOT IS : ");
    console.log(slug);

    const { data: blog, error } = await supabase
        .from("Blog")
        .select("id, slug")
        .eq("slug", slug)
        .maybeSingle();


    if (!blog || error) {

        notFound();

    }

    const Blogs = await getBlogData(slug);

    const articleSchema = {

        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": Blogs.schema?.title,
        "description": Blogs.schema?.description,
        "image": Blogs.image,
        "author": {
            "@type": "Person",
            "name": Blogs.author || "Course Unbox Editorial Team"
        },

        "publisher": {
            "@type": "Organization",
            "name": "Course Unbox",
            "logo": {
                "@type": "ImageObject",
                "url": " https://vrindavanmathuraguide.com/favicon.ico"
            }
        },

        "dateModified": Blogs.created_at,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": ` https://vrindavanmathuraguide.com/blog/${Blogs.slug}`
        },

        "url": ` https://vrindavanmathuraguide.com/blog/${Blogs.slug}`

    };

    const breadcrumbSchema = {

        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": " https://vrindavanmathuraguide.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": " https://vrindavanmathuraguide.com/blog" },
            { "@type": "ListItem", "position": 3, "name": Blogs.domain }
        ]

    };

    const faqSchema =
        Blogs.faqs?.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": Blogs.faqs.map((faq: any) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
            : null;


    return (

        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        [articleSchema, breadcrumbSchema, faqSchema].filter(Boolean)
                    )
                }}
            />

            <Navbar />

            <div className="w-full min-h-screen bg-slate-50"  >


                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10" >


                        <LeftContent Blogs={Blogs} />


                        <aside className="relative shadow-xs">

                            <div className="sticky top-44 space-y-6">

                                <AddCard />

                                <BlogCategories />

                            </div>

                        </aside>

                    </div>

                </div>

                <GroupCta />

                <BlogFAQ Blogs={Blogs} />

                <RelatedBlog slug={slug} />

                <FooterCTA />

            </div>

            <Foter />

        </>

    );
};

export default Page;
