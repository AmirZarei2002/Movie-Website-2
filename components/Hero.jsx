import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../public/undraw_Movie_night_re_9umk.png'

const Hero = () => {
    return (
        <div className='text-center bg-white pb-10'>
            <div className="w-60 mx-auto">
                <Image src={img} width={300} height={200} layout='responsive' alt="/" />
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to WatchMe</h1>
            <p className="text=gray-50">Produce FILM feature, TELEVISION and GAME.</p>
            <Link href='/contact'>
            <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT US</button>
            </Link>
        </div>
    )
}

export default Hero