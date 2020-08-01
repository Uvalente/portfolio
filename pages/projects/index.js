import Layout from '../../components/Layout'
import Project from '../../components/Project'

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."


const Projects = () => (
  <Layout pageTitle='uValente Projects'>
    <div className='bg-dark-blue font-mono text-gray-100 pb-20'>
      hi
      <br /><br /><br /><br /><br /><br /><br />

      <Project title='Test project' description={description} stack='ruby javascript' imgSrc='/stock-mock.PNG' />
    </div>

  </Layout>
)

export default Projects