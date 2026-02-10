'use client';

import PackagesCTA from "@/components/Packages/PackagesCTA";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import VrindavanTrustStats from "@/components/Home/VrindavanTrustStats";
import TrustBuildingSection from "@/components/Home/TrustBuildSec";
import FooterCTA from "@/utils/FooterCTA";
import EnquiryPopup from "@/utils/EnquiryForm";
import FilterGrid from "./FilterGrid";


export default function FilteredPackagesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [packages, setPackages] =  useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const destination = searchParams.get("destination");
  const duration = searchParams.get("duration");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPackages = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("Package")
        .select("*")
        .eq("destination", destination)
        .eq("category", duration); 

      if (error) {
        throw error;
      }

      setPackages(data || []);
    } catch (err: any) {
      console.error("Error fetching packages:", err.message);
      setError("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

    // redirect safety
    useEffect(() => {
      if (!destination || !duration) {
        return;
      }

      getPackages();

    }, [destination, duration, router]);

    if (!destination || !duration || !packages) return <div>
      
         Packages Not Found
     
    </div>;

  const readableTitle = `${duration} Day ${destination} Tour Package`;

  

      return (
        <>
         <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
        <Navbar/>
        <section className="bg-[#FFF7ED] py-16">
            <div className="max-w-7xl mx-auto px-6">

              {/* BREADCRUMBS */}
              <nav className="text-sm text-gray-500 mb-6">
                <span className="hover:text-orange-600 cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span className="hover:text-orange-600 cursor-pointer">Packages</span>
                <span className="mx-2">/</span>
                <span className="text-orange-600 font-medium capitalize">
                  {duration} Day {destination}
                </span>
              </nav>

              {/* PAGE TITLE */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {readableTitle}
              </h1>

              {/* SUBTITLE */}
              <p className="mt-3 text-gray-700 max-w-3xl">
                Explore our best {duration}-day {destination} tour packages,
                designed for peaceful darshan, comfortable travel, and a
                spiritually fulfilling journey.
              </p>

              {/* DIVIDER */}
              <div className="mt-4 h-[3px] w-48 bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />

              <p className="mt-6 text-sm text-gray-500">
                Showing tour packages for{" "}
                <span className="font-medium text-gray-700 capitalize">
                  {destination}
                </span>{" "}
                ({duration} Day)
              </p>

            
              <div className="mt-10">
                <FilterGrid packages = {packages} setIsOpen={setIsOpen}/>
              </div>

              <PackagesCTA/>
              <VrindavanTrustStats/>
              <TrustBuildingSection/>
             
            </div>
          </section>
           <FooterCTA/>

          <Footer/>
          
        </>
      );
    }
