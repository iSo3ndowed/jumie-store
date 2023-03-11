import React from 'react'

const User = () => {
  return (
    <div className='user-page'>
        <div className="user-flex">
            <h1>What's your email address?</h1>
            <p>Type your email to log in or create a Jumie account.</p>
            <input type="text" placeholder='Email' className='mail-input'/>
            <button className='user-btn'>continue</button>
            <button className='login-btn'>Log in or register with phone number</button>
            <button className='fb-btn'>Log in with Facebook</button>
        </div>
    </div>
  )
}

export default User