import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowUp, IoMdMenu } from 'react-icons/io'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountIsUpgradedAction } from '../../../Redux/Actions/AccountActions';
import { getFarmAction } from '../../../Redux/Actions/FarnAction';

export default function Header({ open, onOpenMenu }) {
  const dispatch = useDispatch();
  const { isUpgraded } = useSelector(state => state.accountGetIsUpgraded);
  const { userInfo } = useSelector(state => state.accountLogin);
  const { farmInfo } = useSelector(state => state.farmGet);


  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userInfo'));
    dispatch(getAccountIsUpgradedAction(id));
    console.log(isUpgraded);
  }, []);

  return (
    <div className='flex flex-row w-full h-12 border-b px-1 justify-between items-center bg-white'>

      {/* Menu */}
      <div className={`flex md:hidden hover:bg-textdisable/50 transition-all duration-150 ease-in-out hover:rounded-full items-center p-2 mx-2`} onClick={() => { onOpenMenu(!open) }}>
        <IoMdMenu className='text-textprimary/80 icon z-[999] relative cursor-pointer' size={21} />
        <span className='absolute top-12 p-1 bg-textsecondary z-[999] text-white font-medium text-[9px] rounded hidden'>Navigation menu</span>
      </div>
      {/* Logo */}
      <div className='w-[18rem] px-3 hidden md:block'>
        <div className="flex items-center gap-3.5 font-medium  py-3 border-slate-300 mx-3">
          <span
            className="w-8 h-8 bg-primary_main rounded-full flex items-center justify-center cursor-pointer text-white text-2xl font-bold"
          >P</span>
          <span className={`text-xl whitespace-pre text-other20 font-semibold cursor-pointer `}>PigPalace</span>
        </div>
      </div>
      {/* Pig Farm */}
      <div className='flex flex-row items-center pr-2'>
        <div className='flex hover:bg-textdisable/50 transition-all duration-150 ease-in-out hover:rounded-full p-2'>
          <IoNotificationsOutline className='text-textprimary/80 relative icon' size={21} />
          <span className='absolute top-12 right-20 p-1 bg-textsecondary text-white font-medium text-[9px] rounded hidden'>Notifications</span>
        </div>
        <div className='flex hover:bg-textdisable/50 transition-all duration-150 ease-in-out hover:rounded-full p-2'>
          <IoSettingsOutline className='text-textprimary/80 relative icon' size={21} />
          <span className='absolute top-12 right-14 p-1 bg-textsecondary text-white font-medium text-[9px] rounded hidden'>Settings</span>
        </div>
        <div className='flex flex-row gap-5 p-[2px] rounded-full border boder-disablebg'>
          <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-9 h-9 rounded-full' />
        </div>
      </div>
    </div>
  )
}
