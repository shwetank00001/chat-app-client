import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'
import { initialState } from 'stream-chat-react/dist/components/Channel/channelState'


const Auth = () => {

    const [ isSignup, setIsSignup ] = useState(true)

    const [ data, setData] = useState({
        fullName:"",
        userName:"",
        contact:"",
        avatarURL:"",
        password:"",
        confirmPassword:"",

        
    })

    function handleChange(e){
        const { name, value } = e.target
        setData(function(item){
            return {
                ...item,
                [name] : value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
    }

    function switchMode(){
        setIsSignup((item) => !item)
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{ isSignup ? "Sign Up" : "Sign In"}</p>
                <form onSubmit={handleSubmit}>
                    { isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input id='fullName' type='text' placeholder='Full Name'  name='fullName' value={data.fullName} onChange={handleChange} required />
                        </div>
                    )}

                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='userName'>User Name</label>
                            <input id='userName' type='text' placeholder='User Name' name='userName' value={data.userName} onChange={handleChange} required />
                        </div>

                    { isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='contact'>Contact</label>
                            <input id='contact' type='text' placeholder='Contact' name='contact' value={data.contact} onChange={handleChange} required />
                        </div>
                    )}

                    { isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='avatarURL'>Avatar URL</label>
                            <input id='avatarURL' type='text' placeholder='Avatar URL' name='avatarURL' value={data.avatarURL} onChange={handleChange} required />

                        </div>
                    )}

                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='text' placeholder='Password' name='password' value={data.password} onChange={handleChange} required />
                        </div>

                    { isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input id='confirmPassword' type='text' placeholder='Password' name='confirmPassword' value={data.confirmPassword} onChange={handleChange} required />

                        </div>
                    )}
                    <div className='auth__form-container_fields-content_button'>
                        <button>{ isSignup ? "Sign Up" : "Sign In"}</button>
                    </div>
                </form>

                <div className='auth__form-container_fields-account'>
                    <p>{ isSignup ? "ALREADY HAVE AN ACCOUNT ?" : "DON'T HAVE AN ACCOUNT ?"}<span onClick={switchMode}>{ isSignup ? "Sign In" : "Sign Up"}</span></p>


                </div>
            </div>

        </div>
        <div className='auth__form-container_image'>
            <img src={signinImage} alt='sign' />
        </div>
    </div>
  )
}

export default Auth