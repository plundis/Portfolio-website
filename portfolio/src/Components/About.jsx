import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
            <p className='text-4xl font-bold border-b-8 border-fuchsia-400 inline'>About</p>
        </div>
        <p className='text-xl mt-10 text-gray-500'>
        Hi there! My name is Monil and I'm a first year undergraduate student studying Bachelors of Applied Science at University of British Coloumbia. Alongside my academic pursuits, I've been honing my skills as a frontend developer for the past 3 months.
        I'm passionate about creating visually stunning and user-friendly interfaces that enhance the user experience.
        </p>
        
        <p className='text-xl mt-8 text-gray-500'>
        Recently, I've been expanding my skill set to include backend development. I believe that having a strong understanding of both frontend and backend technologies will make me a more well-rounded and versatile developer.
        </p>
        </div>
    </div>
  )
}

export default About