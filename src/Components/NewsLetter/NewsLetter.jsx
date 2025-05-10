import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get notification via email</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div>
            <input type="email" placeholder='your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
