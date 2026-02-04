import Navbar from "@/utils/Navbar";
import PackageHero from "@/components/Packages/PackageHero";
import AboutPackages from "@/components/Packages/AboutPackages";
import PackagesSlider from "@/components/Packages/PackagesSlider";
import PackagesCTA from "@/components/Packages/PackagesCTA";
import PackagesFaq from "@/components/Packages/PackageFaqs";
import PackagesGrid from "@/components/Packages/PackagesGrid";
import Footer from "@/utils/Footer";
import VrindavanTrustStats from "@/components/Home/VrindavanTrustStats";


export default function Page() {
  return (
    <div>
      <Navbar />

      <PackageHero
        badge="Most Popular Vrindavan Yatra"
        title="Vrindavan Tour Package"
        description="Experience the divine land of Shri Krishna with a peaceful and well-planned Vrindavan tour. This package covers major temples, sacred ghats, and spiritual landmarks with comfort, devotion, and local guidance."
        image="/images/Packages/package-hero.webp"
        price="4999"
      />
      
      <AboutPackages/>

      {/* <PackagesSlider/> */}
      <PackagesGrid/>
      <PackagesCTA/>
      <VrindavanTrustStats/>
      <PackagesFaq/>
      <Footer/>
      



    </div>
  );
}
