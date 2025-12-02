import React, { use, useState, useContext } from 'react'
import { Routes } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup =() =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') 
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser ={
            fullname:{
                firstname:firstName,
                lastname:lastName   
        },
            email:email,
            password:password
        }
        // setUserData({
        //     fullName:{
        //         firstName:firstName,
        //         lastName:lastName
        //     },
        //     email:email,
        //     password:password
        // })
        // console.log(userData);

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201){
            const data = response.data
            setUser(data.user)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return(
        <div>
            <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
                <form onSubmit={(e)=>{
                    submitHandler(e)
                    }}>

                    <h3 className='text-lg font-medium mb-2'>What's Your Name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input 
                            required 
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'  
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            type="text" 
                            placeholder='First Name' />
                        <input 
                            required 
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'  
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            type="text" 
                            placeholder='Last Name' />
                    </div>


                    <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
                    <input 
                        required 
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-bas' 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} 
                        type="email" 
                        placeholder='email@example.com' />
                    
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input 
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) => {  
                            setPassword(e.target.value)
                        }}
                        required type="password" 
                        placeholder='password' />

                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Account</button>
                </form>
                    <p className='text-center'>Already have a Account? <Link to='/login' className='text-blue-600' >Login here</Link></p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span> apply.
                </p>
            </div>
        </div>
        </div>
    )
}
export default UserSignup