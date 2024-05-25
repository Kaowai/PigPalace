import React from 'react'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <div className='flex flex-row w-full z-10 fixed h-16 border-b px-1 justify-between items-center  bg-white'>
      {/* Profile */}
      <div className='flex flex-row gap-5'>
        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww' alt='avatar' className='w-10 h-10 rounded-full' />
        <div className='flex flex-col items-start'>
          <span className='text-xs text-textprimary font-bold '>Hello, David</span>
          <span className='text-xs text-textprimary'>Manager</span>
        </div>
      </div>
      <div className='flex flex-row gap-2 items-center pr-2'>
        <div className='flex bg-other30 rounded-lg p-2'>
          <IoNotificationsOutline className='text-other20' size={20} />
        </div>
        <div className='flex bg-other30 rounded-lg p-2'>
          <IoSettingsOutline className='text-other20' size={20} />
        </div>
        <select className='bg-other20 rounded-lg p-2 w-36 text-sm text-white font-semibold'>
          <option className='py-2 bg-white text-textprimary h-12'>Piggy Farmmy 1</option>
          <option className='py-2 bg-white text-textprimary h-12'>Piggy Farmmy 2</option>
        </select>
      </div>
    </div>
  )
}
