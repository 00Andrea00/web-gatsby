import * as React from 'react'
import Layout from '../componentes/layout'

const IndexPage = () => {
  return(
    <Layout pageTitle="Inicio">
      <p>Bienvenidos a RaccoonWeb</p>
    </Layout>
  )
}

export const Head = () => <title>Inicio</title>
export default IndexPage