import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from './Footer'

const Layout = ({ children, pageTitle, ...props }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="~/uValente/Portfolio" />
      <meta property="og:description" content="My personal portfolio, click me and have a look at my latest projects" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://uvalente.dev/" />
      <meta property="og:image" content="https://uvalente.dev/keyboard.jpg" />
      <title>{pageTitle}</title>
    </Head>
    <Nav />
    {children}
    <Footer />
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
    `}</style>
  </>
)

export default Layout
