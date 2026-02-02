import EnquirySection from '@/components/Home/Enquiryform'
import GroupCta from '@/components/Home/GroupCta'
import HomeFAQSection from '@/components/Home/HomeFaqs'
import PhotoGallerySection from '@/components/Home/PhotoGallerySec'
import PopularTours from '@/components/Home/PopularPackages'
import ToursWeOperate from '@/components/Home/ToursWeOperateSection'
import TrustBuildingSection from '@/components/Home/TrustBuildSec'
import VrindavanTrustStats from '@/components/Home/VrindavanTrustStats'


const Home = () => {
  return (
    <>
    <div>Home</div>
    <EnquirySection/>
    <PopularTours/>
    <GroupCta/>
    <TrustBuildingSection/>
    <PhotoGallerySection/>
    <HomeFAQSection/>
    <ToursWeOperate/>
    <VrindavanTrustStats/>
    </>
  )
}

export default Home