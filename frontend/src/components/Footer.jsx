import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Pranacare is designed to bridge the gap between doctors and patients, Avoiding the rush hours and saving everyone's time</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <button className='cursor-pointer flex' onClick={() =>{navigate('/')}}>Home</button>
            <button onClick={() => navigate('/about')} className='cursor-pointer flex'>About Us</button>
            {/* <button className='cursor-pointer flex'>About us</button> */}
            <button className='cursor-pointer flex'>Delivery</button>
            <button className='cursor-pointer flex'>Privacy Policy</button>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-6303-565-***</li>
            <li>koona.rajarshi@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @pranacare.com - All Right Reserved.</p>
      </div>


      <div className='flex justify-center' >
        <img className='mb-5 w-5 pr-1' src={assets.github_icon} alt="" />
        <p className='mb-5 pl-1'>rishhh-e</p>
      </div>



    </div>
  )
}

export default Footer
