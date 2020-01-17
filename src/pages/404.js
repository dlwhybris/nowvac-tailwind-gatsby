import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => {
  const { data, location } = props
  const { title: siteTitle } = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <div className="xl:w-10/12 mx-2 xl:mx-auto">
        <h1>Not Found</h1>
        <p className="text-4xl">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <div className="flex flex-wrap"></div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
