import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div >
      <header  >
        <nav>
      
            <ul className='flex flec-col sm:flex-row  justify-center items-center mt-10  space-x-10'>
            <Image src={"/group 11.png"} width={70} height={43.71} alt='logo png here' className='text-gray-900 mr-44 font-semibold opacity-100 '/>
                <Link href="/" className='text-sm  text-opacity-100  hover: border-t  border-gray-900 border-b transition-300 transform hover:scale-105 hover:bg-slate-100 '><li> MAIN</li></Link>
                <Link href="/photo" className='text-sm text-opacity-100  hover:transition-300 transform hover:scale-105 hover:bg-gray-100 hover:border-t  border-gray-900 hover:border-b '><li>GALLERY</li></Link>
                <Link href="/work" className='text-sm  text-opacity-100 hover:transition-300 transform hover:scale-105 hover:bg-gray-100 hover:border-t  border-gray-900 hover:border-b'><li> PROJECTS</li></Link>
                <Link href="/card" className='text-sm text-opacity-100  hover:transition-300 transform hover:scale-105 hover:bg-gray-100 hover:border-t  border-gray-900 hover:border-b'><li> CERTIFICATION</li></Link>
                <Link href="/rabta" className='text-sm  text-opacity-100 hover:transition-300 transform hover:scale-105 hover:bg-gray-100 hover:border-t  border-gray-900 hover:border-b '><li>CONTACTS</li></Link>
            </ul>
        </nav>
      </header>
    </div> 
  )
}

export default Navbar