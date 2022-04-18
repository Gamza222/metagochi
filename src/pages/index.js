import * as React from "react"
import BuyNow from "./components/BuyNow/BuyNow"
import Layout from "./components/Layout/Layout"
import RoadMap from "./components/RoadMap/RoadMap"
import Section3 from "./components/Section3/Section3"
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/Section5/Section5"
import Section6 from "./components/section6/Section6"
import Section7 from "./components/section7/Section7"
import Section8 from "./components/section8/Section8"
import Tokenomics from "./components/Tokenomics/Tokenomics"



const IndexPage = () => {
  return (
    <Layout>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Tokenomics />
      <RoadMap />
      <BuyNow />
    </Layout>
  )
}

export default IndexPage
