import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <>
    <Link to={"/loginform"}><button className='flex m-auto mt-3 mr-14 bg-green-500 py-3 px-7 rounded-md font-bold text-md hover:bg-green-400 hover:font-semibold hover:border hover:border-gray-600 tracking-wide'>Login</button></Link>
    </>
  )
}

export default LoginBtn