import * as React from 'react'
import Layout from '../componentes/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Inicio">
      <p>Bienvenidos a RaccoonWeb</p>
      <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
    </Layout>
  )
}

export const Head = () => <title>Inicio</title>
export default IndexPage