import * as React from 'react'
import Layout from '../componentes/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="Sobre nosotros">
            <p>Somos un grupo de amigos que ha decidido aventurarse en el mundo del emprendimiento web</p>
        </Layout>
    )
}

export const Head = () => <title>Sobre nosotros</title>
export default AboutPage