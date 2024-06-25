import React from 'react'
import { Button } from 'flowbite-react';

export const CallToAction = () => {
  return (
       <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
        Interested in exploring my projects? 
        </h2>
        <p className='text-gray-500 my-2'>
        Dive in and discover more about my projects, research, and professional endeavors.




        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="https://www.researchgate.net/" target='_blank' rel='noopener noreferrer'>
            Click Here.!
            </a>
        </Button>
    </div>
    <div className="p-7 flex-1">
        <img src="https://th.bing.com/th/id/OIP.n3HvxjCXz1jYQBSmpjYgRgHaEw?w=202&h=130&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
    </div>
</div>

  )
}
