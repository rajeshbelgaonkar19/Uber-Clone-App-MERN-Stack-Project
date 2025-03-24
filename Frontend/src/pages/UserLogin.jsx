import React from 'react'
import { Routes } from 'react-router-dom'

const UserLogin =() =>{
    return(
        <div className='p-7'>
            <form>
                <h3 className='text-xl mb-2'>What's Your Email</h3>
                <input required type="email" placeholder='email@example.com' />
                <h3>Enter Password</h3>
                <input required type="password" placeholder='password' />
                <button>Login</button>

            </form>
        </div>
    )
}
export default UserLogin