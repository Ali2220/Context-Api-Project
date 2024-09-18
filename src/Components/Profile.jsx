import React from 'react'

const Profile = ({username, setUsername}) => {
  

    if(!username){
        return(
            <h1 className='text-lg text-center m-3 font-semibold'>Please Login</h1>
        )
    }

    return (
        <h1 className='text-lg text-center m-3 font-semibold'>Welcome {username}</h1>
    )
    

}

export default Profile