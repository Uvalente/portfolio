const HeroImage = ({ imgSrc, ...props }) => (
  <div className='relative w-full h-screen bg-gray-800 font-mono text-gray-100'>
    <img src={imgSrc} className='relative w-full h-full object-cover object-top opacity-75 z-0' />
    <div className='absolute top-0 z-10 w-full h-full flex justify-center items-center flex-col divide-y-2 divide-opacity-50 divide-blue-500'>
      <h1 className='font-semibold text-4xl md:text-7xl'>
        Umberto Valente
        </h1>
      <h2 className='italic text-xl md:text-3xl md:pt-1'>
        Full Stack Software Developer
      </h2>
    </div>
    <div className='absolute w-full bottom-0 pb-6 flex flex-col text-center z-10'>
      <p className='text-xl'>
        Learn more about what I do
      </p>
      <svg className='mt-2 h-8 animate-bounce' fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </div>
  </div>
)

export default HeroImage
