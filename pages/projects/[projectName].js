import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

const Project = ({ data, body, ...props }) => {
  if (!data) return <></>

  return (
    <Layout pageTitle={'~/uValente/Projects/' + data.title}>
      <div className='relative z-0'>
        <div className='relative h-24 bg-dark-blue' />
        <div className='relative h-64 -mt-40 mt- bg-dark-blue -skew-y-6 transform xxl:-skew-y-3' />
      </div>
      <div className='font-mono text-gray-900 py-24 px-10 md:flex md:justify-center -mt-48 relative z-20' id='top'>
        <div className='lg:flex lg:flex-col w-full lg:max-w-5xl'>
          <h1 className='text-center text-4xl font-mono font-semibold tr tracking-wide text-gray-100'>{data.title}</h1>
          <img src={data.imgSrc} className='rounded-lg shadow-2xl mt-8' />
          <div className='mt-16'>
            <ReactMarkdown escapeHtml={false} source={body} />
          </div>
          <div className='mt-8 flex space-x-4'>
            <div className='flex h-full flex-col text-center'>
              <p>GitHub</p>
              <a href={data.gitHub} target='_blank'>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" className="w-16 h-auto text-dark-blue hover:text-blue-800 transition-all duration-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg></a>
            </div>
            <div className='flex h-full flex-col text-center'>
              <p>Link</p>
              <a href={data.url} target='_blank'>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mt-1 w-16 h-auto text-white rounded-lg p-2 bg-dark-blue hover:bg-blue-800 transition-all duration-300"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
              </a>
            </div>
          </div>
          <Link href='/projects'>
            <a>
              <button type="submit" className='mt-8 rounded-full text-gray-100 w-12 h-12 p-2 bg-dark-blue hover:shadow-inner hover:bg-blue-800 transition-all duration-300'>
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { projectName } = ctx.params

  const content = await import(`../../projects/${projectName}.md`)
  const data = matter(content.default)

  return {
    props: {
      data: data.data,
      body: data.content
    }
  }
}

export async function getStaticPaths() {
  const projectSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../projects', true, /\.md$/))

  const paths = projectSlugs.map((slug) => `/projects/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export default Project
