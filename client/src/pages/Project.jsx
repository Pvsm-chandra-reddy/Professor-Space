import {CallToAction } from '../components/CallToAction';

export default function Project() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Works</h1>
      <p className='text-md text-gray-500'>Here, you will find a comprehensive collection of my professional works and research papers, reflecting my dedication and contributions to the field.

</p>
      <CallToAction />
    </div>
  )
}