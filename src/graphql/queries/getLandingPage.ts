import { gql } from 'graphql-request'

export const getLandingPage = gql`
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
