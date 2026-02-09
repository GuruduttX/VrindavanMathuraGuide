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
import PackageFaqSection from "@/components/PackageDetail/PackageFaqSection";

const page = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <PackageHero />

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

              <PackageHighlights
                highlights={[
                  "Begin your spiritual journey at Shri Krishna Janmabhoomi, the birthplace of Lord Krishna, and experience the divine atmosphere of Mathura.",
                  "Seek blessings at the revered Banke Bihari Temple in Vrindavan, known for its unique darshan style and devotional energy.",
                  "Witness the grandeur of Prem Mandir during the evening aarti, beautifully illuminated with lights and spiritual hymns.",
                  "Enjoy a peaceful walk along the sacred Yamuna Ghats and experience the serene evening aarti by the river.",
                  "Travel comfortably with an AC vehicle and local Braj guide ensuring smooth darshan and cultural insights throughout the tour.",
                ]}
              />

              <ItineraryAccordion />

              <InclusionExclusion
                inclusions={[
                  "Pickup & drop from Mathura Railway Station or hotel",
                  "AC vehicle for all transfers and sightseeing",
                  "Local Braj guide assistance during temple darshan",
                  "Visit to Shri Krishna Janmabhoomi, Banke Bihari Temple & Prem Mandir",
                  "All parking, tolls, and driver allowances",
                ]}
                exclusions={[
                  "Personal expenses such as shopping or tips",
                  "Meals not mentioned in the itinerary",
                  "Entry fees for special temple darshan (if any)",
                  "Travel insurance",
                  "Anything not mentioned under inclusions",
                ]}
              />

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
      <PackageFaqSection/>
      <Policies />
      <FooterCTA/>
      <Footer />
    </>
  );
};

export default page;
