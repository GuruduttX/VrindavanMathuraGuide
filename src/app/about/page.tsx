import AboutHero from '@/components/About/AboutHero'
import AboutMissionSection from '@/components/About/AboutMissionSection'
import PhotoGalleryCarousel from '@/components/About/AboutPhotoGallery'
import PopularTours from '@/components/Home/PopularPackages'
import TrustBuildingSection from '@/components/Home/TrustBuildSec'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import Footer from '@/utils/Footer'
import FooterCTA from '@/utils/FooterCTA'
import Navbar from '@/utils/Navbar'
import React from 'react'

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutMissionSection />
      <WhyChooseUs/>
      <PhotoGalleryCarousel />
      <TrustBuildingSection/>
      <PopularTours/>
      <FooterCTA/>
      <Footer />
    </>
  )
}

export default About