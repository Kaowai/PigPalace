import React, { useEffect } from 'react'
import { SelectedFarm } from '../components/Input'
import { useDispatch, useSelector } from 'react-redux';
export default function FarmSelected() {
    const dispatch = useDispatch();
    const {userInfo} = useSelector(state => state.userLogin);
    const handleLogout = () => {
        
    }

    useEffect(() => {
        console.log(userInfo);
    }, [])

    const farm = [
        {
            farmId: "1",
            farmName: 'Piggy Farmy1',
        },
        {
            farmId: "2",
            farmName: 'Piggy Farmy2',
        },
        {
            farmId: "3",
            farmName: 'Piggy Farmy3',
        },
        {
            farmId: "4",
            farmName: 'Piggy Farmy4',
        },
        {
            farmId: "5",
            farmName: 'Piggy Farmy5',
        }
    ]

    return (
        <div
            className='w-full h-full flex animate-slide-in-from-right flex-col gap-5 py-[72px] '
        >
            <div className='flex flex-row items-center justify-center gap-3'>
                <span className='text-xl text-white px-4 py-2 font-bold h-10 w-10 rounded-full  bg-primary_main'>P</span>
                <span className='text-black font-semibold text-xl'>Pig Palace</span>
            </div>
            <div className='flex flex-colo gap-2 items-center'>
                <span className='text-3xl text-black font-semibold tracking-wide text-center'>Choose your farm</span>
                <span className='text-textdisable font-normal text-xs text-center'>Please selected your farm</span>
            </div>
            <div className='w-full items-center justify-center flex gap-2 py-12' >
                {
                    farm.map((farm) => (
                        <SelectedFarm key={farm.farmId} farmName={farm.farmName} />
                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
                <span className='text-center text-textprimary hover:text-primary_main text-sm cursor-pointer ' onClick={() => handleLogout()}>Logout</span>
            </div>
        </div>
    )
}
