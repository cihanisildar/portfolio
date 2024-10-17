import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-3xl text-gray-400 mx-auto pt-10 px-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 text-sm'>
        <Link href={"/"} className='hover:text-blue-700 transition-all duration-200 ease-in-out'>twitter</Link>
        <Link href={"/"} className='hover:text-blue-700 transition-all duration-200 ease-in-out'>github</Link>
        <Link href={"/"} className='hover:text-blue-700 transition-all duration-200 ease-in-out'>linkedin</Link>
    </div>
  )
}

export default Footer