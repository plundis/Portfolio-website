import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import solidity from '../assets/solidity.png'
import firebase from '../assets/firebase.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
const Skills = () => {
    const techs=[
        {
                id:1,
                imgSrc:html,
                text:'HTML',
                style: "shadow-orange-500",
        },
        {
            id:2,
            imgSrc:css,
            text:'CSS',
            style: "shadow-blue-500",
        },
        {
            id:3,
            imgSrc:tailwind,
            text:'Tailwind',
            style: "shadow-sky-400",
        },
        {
            id:4,
            imgSrc:javascript,
            text:'Javascript',
            style: "shadow-yellow-500",
        },
        {
            id:5,
            imgSrc:react,
            text:'React.js',
            style: "shadow-blue-600",
        },
        {
            id:6,
            imgSrc:github,
            text:'Github',
            style: "shadow-gray-400",
        },
        {
            id:7,
            imgSrc:node,
            text:'Node.js',
            style: "shadow-green-500",
        },
        {
            id:8,
            imgSrc:solidity,
            text:'Solidity',
            style: "shadow-gray-400",
        },
        {
         id:9,
         imgSrc:express,
         text:'Express.js',
         style: "shadow-gray-500 pt-12",
        },
        {
         id:10,
         imgSrc:mongo,
         text:'MongoDB',
         style: "shadow-green-500",
        },
        {
         id:10,
         imgSrc:c,
         text:'C',
         style: "shadow-blue-500",
        },
        {
         id:10,
         imgSrc:cpp,
         text:'C++',
         style: "shadow-blue-500 pt-2",
        },
        {
         id:10,
         imgSrc:java,
         text:'Java',
         style: "shadow-red-500",
        }
        
        
        


    ]
  return (
    
    <div name='Skills' className='orange w-full h-auto bg-gradient-to-b from-black to-gray-800 '>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='mt-52 md:mt-0'>
          <p className=" text-4xl sm:pt-10 font-bold border-b-8 border-fuchsia-400 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-gray-400">These are the tech I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, imgSrc, text, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={imgSrc} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-gray-400 font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
    
    
  )
}

export default Skills