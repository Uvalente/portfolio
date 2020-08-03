import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'
import Main from '../components/Main'
import Contacts from '../components/Contacts'

const Index = () => (
  <Layout pageTitle='uValente Index'>
    <HeroImage imgSrc='/keyboard.jpg' />
    <Main />
    <Contacts />
  </Layout>
)

export default Index
