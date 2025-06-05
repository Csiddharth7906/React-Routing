import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
  const {name}=  useParams();
  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate(-1)
    // or navigate to a different page
  }
  return (
    <div className=' w-1/2 m-auto mt-10'>
      <h1 className='text-2xl text-red-400 mb-2 '>UserDetail</h1>
      <h1 className='text-2xl mt-3 '>Hii! {name}</h1>
      <button onClick={GoBackHandler} className='mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Go Back
      </button>

    </div>
  )
}

export default UserDetail