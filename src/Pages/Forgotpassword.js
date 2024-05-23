
import React from 'react'
import { Input } from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'

function Forgotpassword() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Forgotpassword2')
    }   
    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-20 items-center'
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Forget Password</span>
                <span className='text-textdisable font-normal text-xs text-center'>Please verify your email</span>
            </div>
            <div className='flex flex-col gap-3 w-full '>
                <div className='w-full items-center' >
                    <Input
                        placeholder="Email"
                        type={'email'}
                    />
                </div>
            </div>
            <div className="w-[22rem] h-12 items-center">
                <button
                    className='bg-primary_main w-full h-full rounded-xl font-medium text-xs text-white button-hover'
                    onClick={handleSubmit}>
                    Send PIN
                </button>
            </div>
            <div className='flex flex-row gap-2 px-4 items-center'>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
                <span className='text-textdisable font-normal text-xs text-center'>or</span>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
            </div>


            <div className='w-full flex items-center justify-center text-center'>
                <span className='text-textdisable items-end font-normal text-xs '>Back to <Link className='text-xs font-normal underline text-primary_main cursor-pointer'
                    to='/Login'
                >Login</Link></span>
            </div>
        </div>
    )
}

export default Forgotpassword