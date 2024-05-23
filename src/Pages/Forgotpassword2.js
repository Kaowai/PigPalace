import React, { useState } from 'react'
import Layout from '../Layout/LoginLayout/Layout'
import { Input, InputPIN } from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { FcRight } from 'react-icons/fc';

function Forgotpassword2() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Forgotpassword3')
    }
    const [arrayPIN, setArrayPIN] = useState(Array(6).fill(''));
    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-20'
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Forget Password</span>
                <span className='text-textdisable font-normal text-xs text-center'>Please enter your PIN</span>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className='w-full items-center' >
                    <InputPIN arrayPIN={arrayPIN} setArrayPIN={setArrayPIN}/>
                </div>
            </div>
            <div className="w-[22rem] h-12 items-center flex justify-center">
                <button
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-medium text-xs outline-none c border-2 border-login ${arrayPIN.join('').length === 6 ? 'bg-primary_main text-white cursor-pointer button-hover' : 'bg-white text-slate-300 ursor-not-allowed'}`}
                    onClick={handleSubmit}>
                    <FaArrowRight size={24} />
                </button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <span className='text-textdisable font-normal text-xs text-center hover:text-primary_main cursor-pointer'>Send code again</span>
            </div>
            <div className='w-full flex items-center justify-center text-center'>
                <span className='text-textdisable items-end font-normal text-xs '>Back to <Link className='text-xs font-normal underline text-primary_main cursor-pointer'
                    to='/Login'
                >Login</Link></span>
            </div>
        </div>

    )
}

export default Forgotpassword2