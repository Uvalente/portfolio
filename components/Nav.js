import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [isClose, setIsClose] = useState(true)

  const handleClick = () => {
    setIsClose(!isClose)
  }

  return (
    <nav className='fixed w-full z-50 bg-dark-blue text-gray-100 bg-opacity-75'>
      <div className='w-full flex justify-between items-center px-4 md:px-16 '>
        <Link href='/'>
          <a>
            <p className='font-mono text-5xl'>uValente</p>
          </a>
        </Link>
        <button className='w-10 h-auto focus:outline-none' onClick={handleClick}>
          <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
            {
              isClose ?
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                :
                <path d="M6 18L18 6M6 6l12 12"></path>
            }
          </svg>
        </button>
      </div>
      <div className={`${isClose && 'hidden'} px-2 pt-3 pb-4 font-semibold tracking-wider text-lg flex flex-col`}>
        <Link href='/'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1'>Home</a>
        </Link>
        <Link href='/projects'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1 mt-1'>Projects</a>
        </Link>
        <Link href='/#contacts'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1 mt-1'>Contacts</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
