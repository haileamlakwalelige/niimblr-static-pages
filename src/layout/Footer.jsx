// import React from 'react'
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 min-h-[50vh] py-12 border-t-[0.5px] border-gray-400'>
        <div className='flex justify-between items-start flex-wrap gap-10 lg:flex-nowrap'>
            <div>
                <img src={logo} alt="" className='h-[60px] pb-2'/>
                <p className='font-extralight'>We simplify collaboration for creators and clients <br/> by making feedback easier and allowing teams to <br/> review all content types in a single platform.</p>
             </div>
            <div>
                <p className='font-semibold text-xl'>Product</p>
                <p className='py-2 text-lg text-white cursor-pointer font-extralight'>Community</p>
                <p className=' text-lg text-white cursor-pointer font-extralight'>Pricing</p>
                <p className='pt-2 text-lg text-white cursor-pointer font-extralight'>Blog</p>
            </div>
            <div>
                <p className='font-semibold text-xl'>Company</p>
                <p className='py-2 text-lg text-white cursor-pointer font-extralight'>Contact</p>
                <p className=' text-lg text-white cursor-pointer font-extralight'>Talent</p>
                <p className='pt-2 text-lg text-white cursor-pointer font-extralight'>Values</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-[15px] pb-8'>SUBSCRIBE TO NEWSLETTER</p>
                <form className='flex flex-col'>
                    <p className='pb-1'>Email <span className='text-red-700'>*</span></p>
                <input type="email" className='bg-white text-slate-950 lg:min-w-[350px] mb-6 py-2.5 px-2 focus:outline-none outline-none xl:min-w-[400px]'/>
                <button className='bg-blue-500 text-white px-8 mt-6 rounded py-2 max-w-fit'>Subscribe</button>
                </form>
                <div className='flex gap-4 items-center mt-8'>
                    <FaTwitter size={38} className='bg-gray-600 hover:bg-blue-700 rounded-full p-2 hover:text-white'/>
                    <FaFacebook size={38} className='bg-gray-600 hover:bg-blue-600 rounded-full p-2 hover:text-white'/>
                    <FaInstagram size={38} className='bg-gray-600 hover:bg-blue-600 rounded-full p-2 hover:text-white'/>
                    <FaLinkedin size={38} className='bg-gray-600 hover:bg-blue-600 rounded-full p-2 hover:text-white'/>
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className='w-full mt-32 border-t-[0.5px] pt-6 font-extralight px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20'>
            <div className='w-full flex justify-between items-center'>
                <p>Copyright @ 2024. Helder Technologies Solution</p>
            <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer