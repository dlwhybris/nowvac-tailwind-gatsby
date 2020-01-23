import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import VendorCarousel from "../components/VendorCarousel"
import Recommendations from "../components/Recommendations"
import VideoBlock from "../components/VideoBlock"
import StoryCarousel from "../components/StoryCarousel"
import ContactBlock from "../components/ContactBlock"

const IndexPage = location => {
  return (
    <Layout location={location}>
      <SEO title="Homepage" />
      <main className="w-full text-gray-900 antialiased">
        <Hero />
        <VendorCarousel />
        <Recommendations />
        <VideoBlock />
        <StoryCarousel />
        <ContactBlock />
      </main>
    </Layout>
  )
}

export default IndexPage
