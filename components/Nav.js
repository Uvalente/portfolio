import Link from 'next/link'

const Nav = () => (
  <nav className='fixed w-full flex justify-between items-center px-16 text-gray-100 z-50'>
    <Link href='/'>
      <a>
        <p className='font-mono text-5xl'>uValente</p>
      </a>
    </Link>
    <div className='space-x-4 text-xl'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>
      <Link href='/#contacts'>
        <a>Contacts</a>
      </Link>
    </div>
  </nav>
)


export default Nav