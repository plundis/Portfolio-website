import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
import {SiLeetcode} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed text-white'>
   <ul>
    {/* <li className='flex justify-between items-center  w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-blue-600'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400'
         href="https://www.linkedin.com/in/shobhnik-wadhwa-9986b6203/">
        LinkedIn <FaLinkedin size={30}/>
        </a>
    </li> */}

    <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-gray-700'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="https://github.com/plundis">
            Github <FaGithub size={30}/>
            </a>
         </li>

    {/* <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-blue-600'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="https://twitter.com/Shobhnik__13">Twitter <FaTwitter size={30}/>
        </a>
    </li> */}
    {/* <li className='flex justify-between items-center w-[235px] h-[60px] px-4 ml-[-175px]  hover:ml-[-10px]  duration-300  bg-yellow-700'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="https://leetcode.com/Shobhnik_1326/">Leetcode<SiLeetcode size={50}/>
        </a>
    </li> */}
    <li className='flex justify-between items-center w-[220px] h-[60px] px-4 ml-[-160px]  hover:ml-[-10px]  duration-300  bg-red-500'>
        <a target='_blank' 
        className='flex justify-between items-center gap-x-2 w-full text-gray-400' 
        href="mailto:monilarora2003@@gmail.com">G-mail<MdOutlineMail size={30}/>
        </a>
    </li>
    
   </ul>
   </div>
  )
}

export default Socials