const Contacts = () => (
  <div className='mt-10 lg:mt-48 flex justify-center flex-col lg:flex-row'>
    <div className='w-full lg:w-1/3'>
h
    </div>
    <form name="contact" method="POST" data-netlify="true" className='w-full lg:w-1/3 px-4'>
      <div className='border relative rounded'>
        <label for='name' className='absolute -mt-3 ml-1 px-1 bg-white uppercase text-xs tracking-wide text-gray-600'>Name</label>
        <input type="text" name="name" id='name' className='py-2 px-2 text-gray-900 w-full focus:outline-none focus:shadow-outline rounded' />
      </div>
      {/* h-full? */}

      <div className='border relative rounded mt-6'>
        <label for='email' className='absolute -mt-3 ml-1 px-1 bg-white uppercase text-xs tracking-wide text-gray-600'>Email</label>
        <input type="email" name="email" id='email' className='py-2 px-2 text-gray-900 w-full focus:outline-none focus:shadow-outline rounded' />
      </div>

      <div className='border relative rounded mt-6'>
        <label for='message' className='absolute -mt-3 ml-1 px-1 bg-white uppercase text-xs tracking-wide text-gray-600'>Message</label>
        <textarea name="message" id='message' className='py-2 px-2 text-gray-900 w-full focus:outline-none focus:shadow-outline rounded'/>
      </div>

      
      <button type="submit" className='mt-8 rounded-full text-gray-100 w-10 h-10 p-2 bg-dark-blue hover:shadow-inner hover:bg-blue-800 transition-all duration-300 uppercase text-sm tracking-wider'>
      <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </button>
    </form>
  </div>
)

export default Contacts