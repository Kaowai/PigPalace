import React, { useEffect } from 'react'
import { logoutAccountAction } from '../Redux/Actions/AccountActions';
import { TiSocialSkype } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFarmAction } from '../Redux/Actions/FarnAction';
import ClipLoader from 'react-spinners/ClipLoader';
import { SelectedFarm, UserRoles } from '../components/Input';
import { getUserByFarmIDAction } from '../Redux/Actions/UserActions';
import toast from 'react-hot-toast';

export default function SelectedRoles() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, success, users, error } = useSelector(state => state.getUserByFarmID);
    const handleLogout = () => {
        dispatch(logoutAccountAction());
        toast.success("Logout Successfully!");
        navigate('/Login')
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('farmID'));
        console.log(token);
        dispatch(getUserByFarmIDAction(token));
        console.log(users);
    }, [dispatch])

    const handleFarmClick = (userID, name) => {
        console.log(userID);
        localStorage.setItem('userID2', JSON.stringify(userID));
        localStorage.setItem('name', JSON.stringify(name));
        navigate('/InputPassword');
    }

    const handleCreateUser = () => {

    }
    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-[52px] '
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Choose your role</span>
                <span className='text-textdisable font-normal text-xs text-center'>Please selected your role</span>
            </div>


            {
                loading ? <div className='flex justify-center items-center'>
                    <ClipLoader color='#FFD700' loading={true} size={50} />
                </div> : users?.length > 0
                    ? <div className='w-full items-start flex-col flex gap-2 justify-start' >
                        {
                            users?.map((user) => (
                                <UserRoles
                                    key={user.userID}
                                    name={user.name}
                                    onHandle={() => handleFarmClick(user.userID, user.name)}
                                />
                            ))
                        }
                    </div>
                    : <div className='flex flex-col gap-2 justify-center items-center py-6'>
                        <span className='text-center text-textdisable text-xs'>You have no role</span>
                        <button className='button-submit' onClick={handleCreateUser}>
                            Create One
                        </button>
                    </div>

            }
            <div className='flex justify-center items-center place-items-end'>
                <span className='text-center text-textprimary hover:text-primary_main text-sm cursor-pointer ' onClick={() => handleLogout()}>Logout</span>
            </div>
        </div>
    )
}
