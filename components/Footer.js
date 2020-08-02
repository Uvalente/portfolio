const Footer = () => (
  <>
    <div className='pt-16 bg-dark-blue skew-y-3 text-gray-100 transform flex flex-col justify-center' >
      <a href='#top' className='self-center -skew-y-3 transform'>
        <svg className='h-8 animate-bounce' fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
      </a>
      <div className='bg-dark-blue text-sm px-4 md:px-16 lg:px-32 mt-8 flex flex-col space-y-1'>
        <p>
          Icons by <a href='https://fontawesome.com/license/free' target='_blank'>Font Awesome</a> && <a href='https://github.com/tailwindlabs/heroicons' target='_blank'>Heroicons</a>
        </p>
        <p>
          Hero Photo by <a href="https://unsplash.com/@christianw">Christian Wiediger</a> on <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </div>
    </div>
    <div className='bg-dark-blue -mt-10 h-16 lg:h-20 xxl:h-40 xxl:-mt-20' />
  </>
)

export default Footer
