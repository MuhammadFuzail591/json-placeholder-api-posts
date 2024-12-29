import React from 'react'

type cardProps = {
  id: number
  title: string
  body: string
}

const Card = ({ id, title, body }: cardProps) => {
  return (
    <div className='p-4 h-full max-w-sm bg-white shadow-sm shadow-black rounded-lg font-sans'>
      {/* Header Section */}
      <div className='mt-4'>
        {/* Image Section */}
        <div className='w-full h-36 rounded bg-blue-100 p-2 relative'>
          <span className='absolute top-2 left-2 text-white capitalize bg-black bg-opacity-50 px-2 py-1 rounded'>
            Post Id : {id}
          </span>
        </div>
        {/* Date Section */}
        <div className='flex items-center text-xs mt-2'>
          <span>Latest</span>
        </div>
      </div>

      {/* Info Section */}
      <div className='mt-4'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='block text-lg font-semibold pb-1.5 pt-3.5'
        >
          {title}
        </a>
        <p className='leading-relaxed text-gray-600 line-clamp-3'>{body}</p>
      </div>
    </div>
  )
}

export default Card
