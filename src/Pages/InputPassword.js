import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserByFarmIDAction, getUserByIDAction, signInAction } from '../Redux/Actions/UserActions';
import ClipLoader from 'react-spinners/ClipLoader';
import { Input2 } from '../components/Input';
import { InlineError } from '../Notifications/Error';
import { logoutAccountAction } from '../Redux/Actions/AccountActions';
import toast from 'react-hot-toast';

export default function InputPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.getUserByID);
    const { loading, success, user2, error } = useSelector(state => state.signIn);
    const [password, setPassword] = useState('a');
    const handleLogout = () => {
        dispatch(logoutAccountAction());
        localStorage.clear();
        toast.success("Logout Successfully!");
        navigate('/Login')
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userID2'));
        dispatch(getUserByIDAction(token));
    }, [dispatch])

    const handleSubmit = async () => {
        if (password === '') {
            return;
        }
        console.log(password);
        const token = JSON.parse(localStorage.getItem('userID2'));
        dispatch(signInAction(token, password));
    }

    useEffect(() => {
        if (success) {
            toast.success("Access Farm Successfully!");
            navigate('/Dashboard');
        } 
        if (error) {
            toast.error("Access Farm Failed! Please try again");
        }
    }, [user2, success, error, dispatch, navigate])

    const handleBack = () => {
        localStorage.removeItem('userID2');
        navigate('/SelectedRole');
    }
    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-[72px] '
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Welcome {user.name} </span>
                <span className='text-textdisable font-normal text-xs text-center'>Please input your password</span>
            </div>

            <div className='w-full items-start flex-col flex gap-2 justify-start' >
                <div className="w-full flex flex-col gap-1 justify-center items-center">
                    <label className='relative cursor-pointer items-center'>
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Input"
                            className='h-12 w-[22rem] px-5 text-xs text-textprimary bg-white border-textdisable border rounded-xl border-opacity-50 outline-none focus:border-other20 placeholder-gray-300 placeholder-opacity-0 transition duration-200'

                        />
                        <span className='text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text'>{"Password"}</span>
                    </label>
                </div>
                {password === '' && <InlineError text='Password is required' />}
            </div>

            <div className="w-[22rem] h-12 items-center flex">
                {
                    loading ? <ClipLoader color='#3B82F6' loading={loading} size={25} className='m-auto items-center justify-center' /> : <button
                        className='bg-primary_main w-full h-full rounded-xl font-medium text-xs text-white button-hover'
                        onClick={handleSubmit}
                    >
                        Access Farm
                    </button>
                }

            </div>
            <div className='flex justify-center flex-row gap-2 items-center place-items-end'>
                <span className='text-center text-textprimary hover:text-primary_main text-sm cursor-pointer ' onClick={() => handleLogout()}>Logout</span>
                <span className='text-center text-textprimary hover:text-primary_main text-sm cursor-pointer ' onClick={() => handleBack()}>Back</span>
            </div>
        </div>
    )
}
