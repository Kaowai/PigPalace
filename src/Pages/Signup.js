import React, { useEffect, useState } from 'react'
import { Input, InputPassword } from '../components/Input'
import { FaFacebook, FaGoogle } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FcGoogle } from 'react-icons/fc'
import { registerService } from '../Redux/APIs/AccountService'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterValidation } from '../Validation/UserValidation'
import { InlineError } from '../Notifications/Error'
import toast from 'react-hot-toast'
import ClipLoader from 'react-spinners/ClipLoader'
import { facebookLoginAction, googleLoginAction, registerAction } from '../Redux/Actions/AccountActions'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError, userInfo, isSuccess } = useSelector(state => state.accountRegister);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(RegisterValidation)
    })

    const onSubmit = async (data) => {
        console.log(data);
        dispatch(registerAction(data.userName, data.email, data.password));
    }

    useEffect(() => {
        if (isError) {
            dispatch({ type: 'USER_REGISTER_RESET' });
        }
        if (isSuccess) {
            toast.success("Register Successfully!");
            navigate('/login');
        }
    }, [isError, isSuccess, userInfo, navigate, dispatch])

    const handleLoginGoogle = useGoogleLogin({
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
                console.log(res.data);

                // dispatch to reducter login successfully with google account
                await dispatch(googleLoginAction(res.data.sub, res.data.email));

                // create user with google account

                toast.success("Login with google successfully");
                navigate('/SelectedFarm');
            } catch (err) {
                toast.error("Login with google failed!");
            }
        }
    });

    const handleLoginFacebook = async (res) => {
        try {
            console.log(res);
            console.log(res.data.userID);
            await dispatch(facebookLoginAction(res.data.userID));


            toast.success("Login with facebook successfully");
            navigate('/SelectedFarm');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div
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
                        name={'userName'}
                        register={register('userName')}
                    />
                    {errors.userName && <InlineError text={errors.userName.message} />}
                </div>
                <div className='w-full items-center' >
                    <Input
                        placeholder="Email"
                        type={'email'}
                        name={'email'}
                        register={register('email')}
                    />
                    {errors.email && <InlineError text={errors.email.message} />}

                </div>
                <div className='w-full' >
                    <InputPassword
                        placeholder="Password"
                        type='password'
                        name={'password'}
                        register={register('password')}
                    />
                    {errors.password && <InlineError text={errors.password.message} />}
                </div>
                <div className='w-full' >
                    <InputPassword
                        placeholder="Confirm Password"
                        type='password'
                        name={'confirmPassword'}
                        register={register('confirmPassword')}
                    />
                    {errors.confirmPassword && <InlineError text={errors.confirmPassword.message} />}
                </div>
            </div>
            <div className="w-[22rem] h-12 items-center">
                {
                    isLoading ? <ClipLoader color='#3B82F6' loading={isLoading} size={25} className='m-auto items-center justify-center' /> : <button
                        className='bg-primary_main w-full h-full rounded-xl font-medium text-xs text-white button-hover'
                        onClick={handleSubmit(onSubmit)}
                    >
                        Login
                    </button>
                }
            </div>
            <div className='flex flex-row gap-2 px-4 items-center'>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
                <span className='text-textdisable font-normal text-xs text-center'>Or Signup With</span>
                <span className='w-16 outline-none border-t-[0.5px] border-textdisable'></span>
            </div>


            <div className='flex flex-row gap-3 items-center'>
                <button className='flex w-40 rounded-lg h-10 outline-none border border-opacity-50 border-textdisable flex-row gap-2 items-center justify-center button-social-hover' onClick={handleLoginGoogle}
                >
                    <FcGoogle size={20} />
                    <span className='text-xs text-textprimary font-medium'>Google</span>
                </button>
                <LoginSocialFacebook
                    appId="1621397548596001"
                    onResolve={(res) => handleLoginFacebook(res)}
                    onReject={(err) => toast.error("Login with facebook failed!")}
                >
                    <button
                        className='flex w-40 rounded-lg h-10 outline-none border border-opacity-50 border-textdisable flex-row gap-2 items-center justify-center button-social-hover'>
                        <FaFacebook size={20} className='text-facebook' />
                        <span className='text-xs text-textprimary font-medium'>Facebook</span>
                    </button>
                </LoginSocialFacebook>
            </div>
            <div className='w-full flex items-center justify-center'>
                <span className='text-textdisable items-end font-normal text-xs '>Already have an account? <span className='text-xs font-normal underline text-primary_main cursor-pointer' onClick={() => navigate('/login')
                }>Login</span></span>
            </div>
        </div>
    )
}

export default Signup