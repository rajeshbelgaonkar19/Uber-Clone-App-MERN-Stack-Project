import React from 'react'
import { Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home  =() =>{
    
    return(
        <div>
            <div className='bg-cover bg-center bg-[url(https://img.freepik.com/premium-photo/modern-traffic-light-showing-red-color-night-modern-city_153437-17.jpg?uid=R165339262&ga=GA1.1.1768963471.1725217503&semt=ais_keywords_boost)] h-screen pt-8 flex justify-between flex-col w-full'> 
                <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}
export default Home