import React, { useEffect, useState } from 'react'
import { Input } from '../components/Input'
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import Layout from '../Layout/LoginLayout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { loginFacebookService, loginGoogleService, loginService } from '../APIs/UserService';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { LoginSocialFacebook } from 'reactjs-social-login'


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle login normal
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email, password);
        if (!email) {
            toast.error("Email is required");
            return;
        } else if (!password) {
            toast.error("Password is required");
            return;
        }
        try {
            let res = await loginService(email, password);
            alert("Login successfully");
            navigate('/');
        } catch (err) {
            alert(err.response.data);
        }

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

    const handleLoginFacebook = async(res) => {
        try {
            const resDb = await loginFacebookService(res.data.userID);
            alert("Login with google successfully");
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    }

    // check login
    useEffect(()=> {
        localStorage.clear();
    }, [])

    return (
        <Layout>

            <form
                onSubmit={handleSubmit}
                className='container mx-auto my-20 pt-0 flex-col px-20'
            >
                <div className='flex-colo gap-3 mb-4'>
                    <h1 className='text-4xl text-other20 font-semibold'>Welcomeback</h1>
                    <p className='text-sm text-other20'>Sign in to continue to <spam className='font-bold text-other20 italic cursor-pointer hover:underline'>PigPalace</spam></p>
                </div>
                <form className='w-full gap-2 flex-colo  py-2  rounded-2xl'>
                    <div className="w-full">
                        <Input label="Email" type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full'>
                        <Input label="Password" type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='w-full flex justify-end'>
                        <p className='text-sm font-semibold cursor-pointer text-other20  right-0 hover:underline '><Link className='nav-link' to='/forgotpassword'>Forgot our password?</Link></p>
                    </div>
                    <button className='w-full h-full p-3 rounded-lg mt-8 bg-other20 text-sm font-medium text-white align-middle hover:bg-primary30' type='submit' onClick={handleSubmit}>Log In</button>
                    <div className='flex-colo mt-2'>
                        <p className='text-sm font-semibold cursor-pointer text-other20  right-0 '>Don't have an account? <spam className='font-bold'><Link className='nav-link' to='/signup'>Create an account</Link></spam></p>
                    </div>
                    <div className='grid grid-cols-7 mt-8 gap-1 w-full h-full justify-between items-center'>
                        <div className='h-px col-span-3 bg-other20'></div>
                        <p className='col-span-1 text-center text-sm text-other20'>or</p>
                        <div className='h-px col-span-3 bg-other20'></div>
                    </div>
                </form>
                <LoginSocialFacebook
                    appId="1621397548596001"
                    onResolve={handleLoginFacebook}
                    onReject={(err) => console.log(err)}
                >
                    <div className='w-full h-full border cursor-pointer border-other20 p-3 font-medium rounded-lg grid grid-cols-3 gap-2 mt-4 bg-other30 text-sm text-other20 hover:bg-other20 hover:text-white'>
                        <div className='grid-col-span-3 flex justify-end items-center'>
                            <FaFacebook className='h-4 w-4' />
                        </div>
                        <div>
                            Login with Facebook
                        </div>
                    </div>
                </LoginSocialFacebook>

                <div className='w-full h-full border cursor-pointer border-other20 p-3 font-medium rounded-lg grid grid-cols-3 gap-2 mt-2 bg-other30 text-sm text-other20 hover:bg-other20 hover:text-white'
                    onClick={() => login()}
                >
                    <div className='grid-col-span-1 flex justify-end items-center'>
                        <FaGoogle className='h-4 w-4' />
                    </div>
                    <div>
                        Login with Google
                    </div>
                </div>

            </form>
        </Layout>

    )
}

export default Login