import React from 'react'
import { BsArchiveFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
        <a href='#'>FaceBook</a>
        </li>
        <li>
        <a href='#'>InstaGram</a>
        </li>
        <li>
        <a href='#'>LinkedIN</a>
        </li>
        </ul>
        <div className='flex gap-2'>
            <img src=".\src\assets\Help-Avatar.svg" alt="Help" />
            <div>
                <p className='font-playfair font-thin'>Have any Questions</p>
                <a href='#' className='font-lato font-medium'>Talk to a speacialist</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
