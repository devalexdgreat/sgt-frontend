'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='fixed top-0 w-full bg-black h-screen flex justify-center items-center text-center flex-col text-white gap-2'>
      <h2>Something went wrong!</h2>
      <button
        className='bg-green-500 text-white rounded-md py-1.5 px-6'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}