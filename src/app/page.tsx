import Navbar from '@/utils/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-[200vh] bg-gradient-to-b from-orange-50 to-white px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">
          Discover Beautiful Places 🌄
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore hand-picked tour packages, breathtaking destinations,
          and unforgettable adventures.
        </p>
      </section>
    </>
  )
}

export default Home