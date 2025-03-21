import React from 'react'
import { Routes } from 'react-router-dom'

const Home  =() =>{
    return(
        <div>
            <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'> 
                <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
                <div className='bg-white'>
                    <h2>Get Started with Uber</h2>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Home