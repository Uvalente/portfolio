import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis dui. Duis lobortis, justo sed gravida faucibus, risus enim hendrerit ante, mollis egestas eros leo sit amet nibh. Nullam interdum euismod nibh, in mattis risus suscipit quis. Praesent feugiat metus sit amet quam laoreet faucibus. Sed faucibus, metus a lobortis iaculis, ligula erat egestas nulla, et dictum arcu augue tristique neque. Suspendisse porta, ante sed congue scelerisque, ipsum ante vehicula nulla, nec porttitor neque ipsum eget risus. Fusce ullamcorper rhoncus arcu non tristique. Praesent tempor tempus convallis Curabitur pretium odio eget purus cursus sodales. Mauris egestas nisl arcu, eget porttitor tellus rutrum ac. Morbi eu posuere ligula. Nullam varius vehicula turpis sit amet blandit. Pellentesque condimentum purus vel dolor fringilla, non suscipit leo feugiat. Pellentesque nibh ex, commodo id magna sit amet, facilisis condimentum arcu. Fusce quis vestibulum turpis. Aliquam eu magna sed nisi dictum facilisis<br>\n Duis vitae velit imperdiet, porttitor ipsum id, volutpat nisl. Cras convallis rhoncus massa ut accumsan. Etiam congue nulla vel libero volutpat pharetra. Nulla sodales, massa sed sagittis congue, orci leo ullamcorper mauris, ac cursus velit augue in ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue lectus, feugiat sed ultrices id, molestie at magna. Morbi et malesuada libero."


const Index = () => (
  <Layout pageTitle='uValente Index'>
    <HeroImage imgSrc='/medium-test.jpg' />
    <div className='relative z-10 flex flex-col items-center lg:flex-row justify-center bg-dark-blue text-gray-100 pt-32' >
      <div className='lg:w-1/2 xl:w-1/3'>
        <img className='h-64 w-64 rounded-full object-cover object-top overflow-hidden lg:h-auto lg:w-full lg:rounded-none' src='/umberto.jpg' />
      </div>
      <div className='pt-16 px-8 lg:w-1/2 xl:w-1/3'>
        <h3>TITLE</h3>
        {lorem}
      </div>
    </div>
  </Layout>
)

export default Index
