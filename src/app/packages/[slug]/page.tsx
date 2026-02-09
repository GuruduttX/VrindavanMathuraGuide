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
import PackageTestimonials from "@/components/PackageDetail/PackageTestimonial";
import { supabase } from "@/lib/supabase/SupabaseConfig";

const getPackageData = async (slug : string) => {
  const {data , error} = await supabase.from("Package").select("*").eq("slug", slug).single();

  if(error){
    console.log("There is some of the error I have get : ");
    console.log(error);
  }
  
  return data;
}

const page = async ({params} : {params : Promise<{slug : string }>}) => {

  const {slug} = await params;
  console.log("The slug is : ");
  console.log(slug);
  const PackageData = await getPackageData(slug);
  console.log(PackageData);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <PackageHero PackageData = {PackageData}/>

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

              <PackageHighlights PackageData={PackageData}/>

              <ItineraryAccordion PackageData={PackageData}/>

              <InclusionExclusion PackageData={PackageData}/>

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
      <GroupCta />
      <ProductRatings />
      <PackageTestimonials PackageData={PackageData}/>
      <Policies PackageData={PackageData}/>
      <FooterCTA/>
      <Footer />
    </>
  );
};

export default page;
