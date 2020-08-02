import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from './Footer'

const Layout = ({ children, pageTitle, ...props }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
