import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";
function Button({title="Get Started"}) {
  return (
    <div className='w-40 px-4 py-2 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <MdSubdirectoryArrowRight />
    </div>

  )
}

export default Button;