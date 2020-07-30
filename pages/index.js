import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
// IMPORT useEffect and useState
// check Prerendered page badge
// to see if anything change

const Index = () => {
  const [test, setTest] = useState('false')

  const change = () => {
    setTest('true')
  }
  useEffect(() => {
    console.log('HI')
  }, [])

  return (
    <Layout pageTitle='uValente Index'>
      <p className='pt-16 text-green-700 text-4xl'>
        Hello world!
        <button onClick={change}>CLICK</button>
        state: {test}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </p>
    </Layout>
  )
}

export default Index
