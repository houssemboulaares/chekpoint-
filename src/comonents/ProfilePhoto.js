import React from 'react'
import img from './photo.jpg'
import './profilephoto.css'
function ProfilePhoto() {
  return (
    <div className='cc'> 
        <img className='img' src={img}></img>
    </div>
  )
}

export default ProfilePhoto