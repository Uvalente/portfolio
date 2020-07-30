const HeroImage = ({imgSrc, ...props}) => (
  <div className='relative w-full h-screen bg-gray-800 font-mono'>
    <img src={imgSrc} className='relative w-full h-full object-cover object-top opacity-75 z-0' />
    <div className='absolute top-0 z-10 w-full h-full flex justify-center items-center text-gray-100 flex-col divide-y-2 divide-opacity-50 divide-blue-500'>
      <h1 className='font-semibold text-4xl md:text-6xl'>
        Umberto Valente
        </h1>
      <h2 className='italic text-xl md:text-3xl md:pt-1'>
        Full Stack Software Developer
        </h2>
    </div>
  </div>
)

export default HeroImage
