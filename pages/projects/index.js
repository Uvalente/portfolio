import Layout from '../../components/Layout'
import Project from '../../components/Project'
import matter from 'gray-matter'
import Link from 'next/link'

const Projects = ({ projects, ...props }) => {
  const projectsList = projects.map((project) => {
    return (
      <Link href='/projects/[projectName]' as={`/projects/${project.slug}`} key={project.slug} >
        <a className='my-8'>
          <Project title={project.data.title} description={project.data.description} stack={project.data.tech} imgSrc={project.data.imgSrc} />
        </a>
      </Link>
    )
  })


  return (
    <Layout pageTitle='~/uValente/Projects'>
      <div className='relative z-0'>
        <div className='relative h-24 bg-dark-blue' />
        <div className='relative h-64 -mt-40 mt- bg-dark-blue -skew-y-6 transform xxl:-skew-y-3' />
      </div>
      <div className='font-mono text-gray-100 py-24 px-2 md:px-8 lg:px-40 -mt-48 relative z-20 xxl:min-h-screen xxl:-mb-56' id='top'>
        <h1 className='text-center text-4xl font-mono font-semibold tr tracking-wide'>Projects</h1>
        <div className='flex flex-wrap justify-around mt-6'>
          {projectsList}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        data: document.data,
        slug,
      }
    })
    return data
  })(require.context('../../projects', true, /\.md$/))

  return {
    props: {
      projects
    },
  }
}

export default Projects