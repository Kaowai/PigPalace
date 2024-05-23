import React, { useState } from 'react'
import { Input, InputPassword } from '../components/Input'
import { FaFacebook, FaGoogle } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { registerService } from '../APIs/UserService'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FcGoogle } from 'react-icons/fc'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        e.preventDefault();
        if (!name) {
            alert('Name is required');
            return;
        } else if (!email) {
            alert('Email is required')
            return;
        } else if (!password) {
            alert('Password is required');
            return;
        }
        try {
            const res = await registerService(name, email, password);
            console.log(res);
            alert('Sign up successfully');
            navigate('/login');
        } catch(err) {
            alert(err.response.data);
        }
    }
    return (
        <form
            onSubmit={handleSignUp}
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 items-center'
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide'>Sign Up</span>
                <span className='text-textdisable font-normal text-xs text-center'> Please sign up to start manage your farm</span>
            </div>
            <div className='flex flex-col gap-3 w-full '>
                <div className='w-full items-center' >
                    <Input
                        placeholder="User Name"
                        type={'text'}
                    />
                </div>
                <div className='w-full items-center' >
                    <Input
                        placeholder="Email"
                        type={'email'}
                    />
                </div>
                <div className='w-full' >
                    <InputPassword
                        placeholder="Password"
                        type='password'
                    />
                </div>
                <div className='w-full' >
                    <InputPassword
                        placeholder="Confirm Password"
                        type='password'
                    />
                </div>
            </div>
            <div className="w-[22rem] h-12 items-center">
                <button
                    className='bg-primary_main w-full h-full rounded-xl font-medium text-xs text-white button-hover'>
                    Login
                </button>
            </div>
            <div className='flex flex-row gap-2 px-4 items-center'>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
                <span className='text-textdisable font-normal text-xs text-center'>Or Signup With</span>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
            </div>


            <div className='flex flex-row gap-3 items-center'>
                <LoginSocialFacebook
                    appId="1621397548596001"
                    // onResolve={handleLoginFacebook}
                    onReject={(err) => console.log(err)}
                >
                    <button className='flex w-40 rounded-lg h-10 outline-none border border-opacity-50 border-textdisable flex-row gap-2 items-center justify-center button-social-hover'>
                        <FcGoogle size={20} />
                        <span className='text-xs text-textprimary font-medium'>Google</span>
                    </button>
                </LoginSocialFacebook>
                <button className='flex w-40 rounded-lg h-10 outline-none border border-opacity-50 border-textdisable flex-row gap-2 items-center justify-center button-social-hover'>
                    <FaFacebook size={20} className='text-facebook' />
                    <span className='text-xs text-textprimary font-medium'>Facebook</span>
                </button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <span className='text-textdisable items-end font-normal text-xs '>Already have an account? <span className='text-xs font-normal underline text-primary_main cursor-pointer' onClick={() => navigate('/login')
                }>Login</span></span>
            </div>
        </form>
    )
}

export default Signup