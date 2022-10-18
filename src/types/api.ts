export type LandingPageProps = {
  data: {
    landingPage: {
      data: {
        attributes: {
          logo: {
            data: [
              {
                attributes: {
                  alternativeText
                  url
                }
              }
            ]
          }
        }
      }
    }
  }
}

export type LogoProps = {
  data: {
    alternativeText: string
    url: string
  }
}
