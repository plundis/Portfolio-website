import React from 'react'
import todo from '../assets/todo_app.jpg'
import chat from '../assets/chat_app.jpg'
import crypto from '../assets/crypto_tracker.jpg'
import weekaway from '../assets/weekaway.jpg'
import food from '../assets/food_delivery_app.jpg'

const Work = () => {
    const data=[
        {
            id:1,
            imgSrc:todo,
            code:'https://github.com/Shobhnik13/todo-app',
            demo:'https://todo-app-rho-steel.vercel.app/',
        },
        {
            id:2,
            imgSrc:chat,
            code:'https://github.com/Shobhnik13/Chat-App',
            demo:'https://chat-app-red-sigma.vercel.app/',
        },
        {
            id:3,
            imgSrc:crypto,
            code:'https://github.com/Shobhnik13/crypto-app',
            demo:'https://crypto-app-blond.vercel.app/',
        },
        {
            id:4,
            imgSrc:weekaway,
            code:'https://github.com/Shobhnik13/Weekaway-ui',
            demo:'https://weekaway.vercel.app/',
        },
        {
            id:5,
            imgSrc:food,
            code:'https://github.com/Shobhnik13/Food-delivery-app',
            demo:'https://food-delivery-app-vyy5.vercel.app/',
        },

    ]
  return (
    <div name='Work' className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'>
            <div className='md:mt-32 mt-52'>
                <p className=' text-4xl md:text-6xl border-b-8 font-bold border-fuchsia-400 inline '>My Work</p>
                <p className='text-3xl py-6 md:text-5xl font-semibold text-gray-500'>Check out some of my work below</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 flex-1 justify-center'>
                {
                    data.map((item)=>{
                         return(
                            <div key={item.id} className='shadow-md shadow-gray-700 rounded-lg'>
                    <img src={item.imgSrc} alt="" className='w-full rounded-md hover:scale-110 duration-200' />
                    <div className='flex items-center justify-center'>
                        <button className='text-gray-400 font-semibold w-1/2 px-6 py-3 duration-200 hover:scale-110 cursor-pointer'><a target='_blank' href={item.demo}>Demo</a></button>
                    </div>
                </div>
                         )   
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Work