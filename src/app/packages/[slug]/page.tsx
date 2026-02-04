import GroupCta from '@/components/Home/GroupCta'
import DestinationRoute from '@/components/PackageDetail/DestinationRoute'
import ItineraryAccordion from '@/components/PackageDetail/ItineraryAccordion'
import PackageHero from '@/components/PackageDetail/PackageHero'
import Policies from '@/components/PackageDetail/Policies'
import ProductRatings from '@/components/PackageDetail/ProductRatings'
import Footer from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <PackageHero />
            <DestinationRoute />
            <ItineraryAccordion />
            <GroupCta />
            <ProductRatings />
            <Policies/>
            <Footer />
        </>
    )
}

export default page