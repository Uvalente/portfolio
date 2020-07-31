import Head from 'next/head'
import Nav from '../components/Nav'

const Layout = ({ children, pageTitle, ...props }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{pageTitle}</title>
    </Head>
    <Nav />
    {children}
  </>
)

export default Layout
