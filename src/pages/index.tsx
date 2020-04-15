import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GreetingText from "../components/GreetingText"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <GreetingText />
  </Layout>
)

export default IndexPage
