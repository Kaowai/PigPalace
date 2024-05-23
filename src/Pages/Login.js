import React, { useEffect, useState } from 'react'
import { Input, InputPassword } from '../components/Input'
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import Layout from '../Layout/LoginLayout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { loginFacebookService, loginGoogleService, loginService } from '../APIs/UserService';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FcGoogle } from 'react-icons/fc';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle login normal
    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (!email) {
        //     toast.error("Email is required");
        //     return;
        // } else if (!password) {
        //     toast.error("Password is required");
        //     return;
        // }
        // try {
        //     let res = await loginService(email, password);
        //     alert("Login successfully");
        //     navigate('/');
        // } catch (err) {
        //     alert(err.response.data);
        // }
        toast.success("Login successfully");
    }

    // handle login with gooogle 
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                // get information from user google
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                console.log(res.data.sub);

                // login into database
                const resDb = await loginGoogleService(res.data.sub);
                alert("Login with google successfully");
                navigate('/');
            } catch (err) {
                console.log(err);
            }
        }
    });

    const handleLoginFacebook = async (res) => {
        try {
            const resDb = await loginFacebookService(res.data.userID);
            alert("Login with google successfully");
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    // check login
    useEffect(() => {
        localStorage.clear();
    }, [])

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5  items-center'
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Welcome Back</span>
                <span className='text-textdisable font-normal text-xs text-center'> Please login to your account</span>
            </div>
            <div className='flex flex-col gap-3 w-full '>
                <div className='w-full items-center' >
                    <Input
                        placeholder="Email"
                        type={'email'}
                    />
                </div>
                <div className='w-full ' >
                    <InputPassword
                        placeholder="Password"
                        type='password'
                    />
                </div>
                <div className='w-full'>
                    <div className="w-full flex flex-col gap-1 justify-end items-center">
                        <Link className='w-[22rem] text-textdisable text-end font-normal text-xs cursor-pointer hover-link ' to={'/ForgotPassword'}>Forgot password?</Link>
                    </div>
                </div>
            </div>
            <div className="w-[22rem] h-12 items-center">
                <button
                    className='bg-primary_main w-full h-full rounded-xl font-medium text-xs text-white button-hover'
                    onClick={handleSubmit}>
                    Login
                </button>
            </div>
            <div className='flex flex-row gap-2 px-4 items-center'>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
                <span className='text-textdisable font-normal text-xs text-center'>Or Login With</span>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
            </div>


            <div className='flex flex-row gap-3 items-center'>
                <LoginSocialFacebook
                    appId="1621397548596001"
                    onResolve={handleLoginFacebook}
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
            <div className='w-full flex items-center justify-center text-center'>
                <span className='text-textdisable items-end font-normal text-xs '>Don't have an account? <span className='text-xs font-normal underline text-primary_main cursor-pointer'
                    onClick={() => navigate('/signup')}
                >Signup</span></span>
            </div>
        </form>
    )
}

export default Login