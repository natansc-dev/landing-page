import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import { GetStaticProps } from 'next'
import { client } from 'graphql/client'
import { getLandingPage } from 'graphql/queries/getLandingPage'
import { LogoProps } from 'types/api'

const Index = ({ data }: LogoProps) => (
  <>
    <SectionHero data={data} />
    <SectionAboutProject />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.request(getLandingPage)

  const data = response.landingPage.data.attributes.logo.data[0]?.attributes

  return {
    props: {
      data
    }
  }
}

export default Index
