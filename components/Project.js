const Project = ({ imgSrc, title, description, stack, ...props }) => (
  <div className="max-w-sm w-full md:max-w-xs lg:max-w-lg lg:flex lg:h-full">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imgSrc})` }} title={title} >
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-gray-900 font-bold text-xl mb-2">{title}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 text-sm">{stack}</p>
      </div>
    </div>
  </div>
)

export default Project
