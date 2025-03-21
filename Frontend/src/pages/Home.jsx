import React from 'react'
import { Routes } from 'react-router-dom'

const Home  =() =>{
    return(
        <div>
            <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'> 
                <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                    <button className='w-full bg-black text-white py-3 rounded mt-5'>Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Home