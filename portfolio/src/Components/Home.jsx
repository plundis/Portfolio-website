import React from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='w-full h-screen' name='Home'>
            <div className='flex flex-col justify-center mx-auto px-8 h-full max-w-[1000px]'>
                <h6 className='text-gray-500 text-md pb-2 md:mt-24 lg:mt-0' >Hi,Myself</h6>
                <h2 className='text-fuchsia-400 text-5xl md:text-7xl font-bold '>Monil Arora</h2>
                <h2 className='text-fuchsia-300 text-5xl md:text-7xl  font-semibold'>I am a Front-end developer</h2>
                <p className='py-3 max-w-[700px] text-lg md:text-xl font-semibold text-gray-500'>
                    Hey!I am a frontend developer,currently trying my hands on full stack development.I like to make responsive as well as creative user interfaces
                </p>
            
            </div>
      </div>
  )
}

export default Home