import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import VendorCarousel from "../components/VendorCarousel"
import Recommendations from "../components/Recommendations"
import VideoBlock from "../components/VideoBlock"
import StoryCarousel from "../components/StoryCarousel"
import ContactBlock from "../components/ContactBlock"

class ProductListPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Homepage" />
        <main className="w-full xl:xl:w-10/12 mx-2 xl:mx-auto text-gray-900 antialiased border-red-500 border-2 h-20"></main>
      </Layout>
    )
  }
}

export default ProductListPage
