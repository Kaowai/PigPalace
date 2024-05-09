/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import profile from '../../public/profile.png'
import logo from '../../public/logo.png'
import { BsJustifyRight, BsThreeDots } from 'react-icons/bs'
export default function SideBar({ children }) {
  return (
    <>
      <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
          <div className='p-4 pb-2 flex justify-between items-center'>
            <img src={logo} className='w-32' />
            <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
              <BsJustifyRight />
            </button>
          </div>
          <ul className='flex-1 px-3'>
            {children}
          </ul>
          <div className='border-t flex p-3'>
            <img src={profile} className='w-10 h-10 rounded-md' />
            <div className='flex justify-between items-center overflow-hidden'>
              <div className='leading-4'>
                <h4 className='font-semibold'>constGenius</h4>
                <span className='text-xs text-gray-600'>constgenius@gmail.com</span>
              </div>
              <BsThreeDots size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export function SideBarItem({ icon, text, active, alert }) {
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group`}>
      {icon}
      <span>{text}</span>
    </li>
  );
}