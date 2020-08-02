import Link from 'next/link'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [isClose, setIsClose] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleClick = () => {
    setIsClose(!isClose)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY > 250
      if (isScrolled !== scroll) {
        setIsScrolled(scroll)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <nav className={`fixed w-full z-50 ${isScrolled && 'bg-dark-blue shadow-lg'} text-gray-100 bg-opacity-75 md:flex md:items-center md:justify-between transition-all duration-300`}>
      <div className='w-full flex justify-between items-center px-4 md:pl-16 md:pr-0 md:w-auto'>
        <Link href='/'>
          <a>
            <p className='font-mono text-5xl'>uValente</p>
          </a>
        </Link>
        <button className='w-10 h-auto focus:outline-none md:hidden' onClick={handleClick}>
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
      <div className={`${isClose && 'hidden'} px-2 pt-3 pb-4 font-semibold tracking-wider text-lg flex flex-col md:block md:pr-16 md:space-x-3`}>
        <Link href='/'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1 md:px-4'>Home</a>
        </Link>
        <Link href='/projects'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1 mt-1 md:px-4'>Projects</a>
        </Link>
        <Link href='/#contacts'>
          <a className='hover:shadow-inner hover:bg-blue-800 transition-all duration-300 rounded px-2 py-1 mt-1 md:px-4'>Contacts</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
