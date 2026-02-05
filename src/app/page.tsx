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


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DestinationFilter />
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