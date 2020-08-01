import Layout from '../../components/Layout'
import Project from '../../components/Project'
import matter from 'gray-matter'
import Link from 'next/link'

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."

const Projects = ({ projects, ...props }) => {
  const projectsList = projects.map((project) => {
    console.log(project)
    return (
      <Link href='/projects/[projectName]' as={`/projects/${project.slug}`} key={project.slug} >
        <a>
          <Project title={project.data.title} description={project.data.description} stack='ruby javascript' imgSrc='/stock-mock.PNG' />
        </a>
      </Link>
    )
  })


  return (
    <Layout pageTitle='uValente Projects'>
      <div className='bg-dark-blue font-mono text-gray-100 pb-20'>
        {projectsList}
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