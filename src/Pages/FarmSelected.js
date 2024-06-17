import React, { useEffect } from 'react'
import { SelectedFarm } from '../components/Input'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutAccountAction } from '../Redux/Actions/AccountActions';
import { getFarmAction } from '../Redux/Actions/FarnAction';
import { getFarmService } from '../Redux/APIs/FarmService';
import ClipLoader from 'react-spinners/ClipLoader';
export default function FarmSelected() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, farmInfo } = useSelector(state => state.farmGet);
    const { userInfo } = useSelector(state => state.accountLogin);
    const { userInfo2 } = useSelector(state => state.accountFacebookLogin);
    const { userInfo3 } = useSelector(state => state.accountLogin);
    const handleLogout = () => {
        dispatch(logoutAccountAction());
        toast.success("Logout Successfully!");
        navigate('/Login')
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userInfo'));
        dispatch(getFarmAction(token));
    }, [userInfo, dispatch])

    const handleFarmClick = (farmID, name) => {
        localStorage.setItem('farmID', JSON.stringify(farmID));
        localStorage.setItem('farmName', JSON.stringify(name));
        navigate('/SelectedRole');
    }

    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-[100px] '
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Choose your farm</span>
                <span className='text-textdisable font-normal text-xs text-center'>Please selected your farm</span>
            </div>


            {
                isLoading ? <div className='flex justify-center items-center'>
                    <ClipLoader color='#FFD700' loading={true} size={50} />
                </div> : farmInfo?.length > 0
                    ? <div className='w-full items-start flex-col flex gap-2 justify-start' >
                        {
                            farmInfo?.map((farm) => (
                                <SelectedFarm
                                    key={farm.farmID}
                                    farmName={farm.name}
                                    handleClick={() => handleFarmClick(farm.farmID, farm.name)}
                                />
                            ))
                        }
                    </div>
                    : <div className='flex flex-col gap-2 justify-center items-center py-6'>
                        <span className='text-center text-textdisable text-xs'>You have no farm</span>
                        <button className='button-submit'>
                            Create new
                        </button>
                    </div>

            }
            <div className='flex justify-center items-center place-items-end'>
                <span className='text-center text-textprimary hover:text-primary_main text-sm cursor-pointer ' onClick={() => handleLogout()}>Logout</span>
            </div>
        </div>
    )
}
