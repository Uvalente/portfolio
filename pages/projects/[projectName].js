import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

const Project = ({ data, body, ...props }) => {
  if (!data) return <></>

  return (
    <Layout pageTitle='uValente Projects NAME'>
      <div className='bg-dark-blue font-mono text-gray-100 py-24 px-10 lg:px-64' id='top'>
        <h1 className='text-center text-4xl font-mono font-semibold tr tracking-wide'>{data.title}</h1>
        <div className='mt-12'>
          <ReactMarkdown escapeHtml={false} source={body} />
        </div>
        <div>
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
