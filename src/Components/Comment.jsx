import React from 'react'
import { FaUserPen } from 'react-icons/fa6';

function Comment({comment}) {
    const {email,body} = comment;
  return (
    <div className='p-4 ml ml-16 mr-4 bg-orange-100 my-4 rounded-lg'>
        <p className='text-gray-400 pb-2 text-xs font-bold flex gap-1 items-center'><FaUserPen className='text-blue-500'></FaUserPen> {email}</p>
        <p>{body}</p>
    </div>
  )
}

export default Comment