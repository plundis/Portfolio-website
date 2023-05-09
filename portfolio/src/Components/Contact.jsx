import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
import {SiLeetcode} from 'react-icons/si'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b w-full text-gray-400 from-black to-gray-800' name='Contact'>
        <div className='flex flex-col p-4 justify-center pt-28 max-w-screen-lg mx-auto'>
            <div>
                <p className='text-4xl md:text-6xl font-bold text-white border-b-8 border-fuchsia-400 inline'>Contact Me</p>
                <p className='text-3xl py-10 md:text-5xl font-semibold text-gray-500'>Submit the below form to get in touch with me</p>
            </div>
            <div className='lg:hidden flex mx-auto pb-12 gap-4 max-w-screen-lg'>
                <a  target='_blank' href="https://github.com/plundis" className='cursor-pointer hover:scale-110 duration-200 text-gray-500'><FaGithub/></a>  
                <a target='_blank' href="mailto:monilarora2003@gmai.com" className='cursor-pointer hover:scale-110 duration-200 text-red-400'><MdOutlineMail size={40}/></a>
            </div> 
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/b8aa5daa-d916-46fb-b2c4-d5c703077ae9" method="POST" className='flex flex-col w-[200px] md:w-1/2'>
                <input type="text" name="name" id="" placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-gray-400 focus:outline-none text-sm md:text-2xl' />
                <input type="text" name="email" id="" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-gray-400 focus:outline-none text-sm md:text-2xl' />
                <textarea name=""rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounde-md text-gray-400 focus:outline-none text-sm md:text-2xl'></textarea>
                <button className='text-black bg-gradient-to-r from-fuchsia-400 to-fuchsia-300 hover:cursor-pointer hover:scale-110 duration-200 px-6 py-3 my-8 font-semibold rounded-lg mx-auto flex items-center text-sm md:text-2xl'>Let's talk</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Contact