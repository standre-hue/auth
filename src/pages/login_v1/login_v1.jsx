

import React, { useState } from 'react'
import './login_v1.css'
import bg from './assets/bg.jpg'
import fb from './assets/fb.png'
import al from './assets/al.png'
import tw from './assets/tw.png'


/////not responsive

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isWorking, setIsWorking] = useState(false)

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }
    const updateEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = () => {
        setIsWorking(true)
        console.log(email)
        console.log(password)
        setIsWorking(false)
    }
    return (
        <div className='container'>
            {/*<img src={bg} alt='' />*/}
            <div className='box'>
                <h2 className='title'>Welcome</h2>
                <div>
                    <input onChange={updateEmail} type='text' className='input' />
                </div>
                <div>
                    <input onChange={updatePassword} type="password" className='input' />
                </div>
                <input onClick={handleSubmit} type='submit' className='submit' value='Log in' />
                <div className='social'>
                    <img src={fb} alt='Facebook' />
                    <img src={al} alt='Google' />
                    <img src={tw} alt='Twitter' />
                </div>
            </div>
        </div>
    )
}

export default Login
