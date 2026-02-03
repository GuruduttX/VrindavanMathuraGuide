import AboutHero from '@/components/About/AboutHero'
import AboutMissionSection from '@/components/About/AboutMissionSection'
import PhotoGalleryCarousel from '@/components/About/AboutPhotoGallery'
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
      <PhotoGalleryCarousel />
      <FooterCTA/>
      <Footer />
    </>
  )
}

export default About