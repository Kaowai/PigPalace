import React, { useState } from 'react'
import { Input } from '../components/Input'
import { FaFacebook, FaGoogle } from 'react-icons/fa6'
import Layout from '../Layout/LoginLayout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { registerService } from '../APIs/UserService'

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
        <Layout>
            <div className='container mx-auto my-20 pt-0 flex-col px-20'>
                <div className='flex-colo gap-3 mb-4'>
                    <h1 className='text-4xl text-other20 font-semibold'>Sign Up</h1>
                    <p className='text-sm text-other20'>Let's get started with your pig farm </p>
                </div>
                <form className='w-full gap-2 flex-colo  py-2  rounded-2xl'>
                    <div className="w-full">
                        <Input label="Name" type="text" placeholder="Taylor Mark Son" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='w-full'>
                        <Input label="Email" type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='w-full'>
                        <Input label="Password" type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button className='w-full h-full p-3 rounded-lg mt-8 bg-other20 text-sm font-medium text-white align-middle hover:bg-primary30' type='submit' onClick={handleSignUp}>Sign Up</button>
                    <div className='flex-colo mt-2'>
                        <p className='text-sm font-semibold cursor-pointer text-other20  right-0 '>Already have an account? <spam className='font-bold'><Link className='nav-link' to='/login'>Log In</Link></spam></p>
                    </div>
                    <div className='grid grid-cols-7 mt-8 gap-1 w-full h-full justify-between items-center'>
                        <div className='h-px col-span-3 bg-other20'></div>
                        <p className='col-span-1 text-center text-sm text-other20'>or</p>
                        <div className='h-px col-span-3 bg-other20'></div>
                    </div>
                </form>
                <div className='w-full h-full border cursor-pointer border-other20 p-3 font-medium rounded-lg grid grid-cols-3 gap-2 mt-4 bg-other30 text-sm text-other20 hover:bg-other20 hover:text-white'>
                    <div className='grid-col-span-3 flex justify-end items-center'>
                        <FaFacebook className='h-4 w-4' />
                    </div>
                    <div>
                        Sign up with Facebook
                    </div>
                </div>
                <div className='w-full h-full border cursor-pointer border-other20 p-3 font-medium rounded-lg grid grid-cols-3 gap-2 mt-2 bg-other30 text-sm text-other20 hover:bg-other20 hover:text-white'>
                    <div className='grid-col-span-1 flex justify-end items-center'>
                        <FaGoogle className='h-4 w-4' />
                    </div>
                    <div>
                        Sign up with Google
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup