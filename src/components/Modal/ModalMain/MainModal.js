import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function MainModal({name, isvisible, onClose, children }) {
    if (!isvisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25  flex justify-center top-0 items-center '>
            <div className='w-3/4 flex flex-col rounded bg-white animate-slide-in-from-top'>
                <div className='w-full flex flex-row border-textdisable py-2 px-2 border-b  items-center justify-between '>
                    <span className=' text-lg font-semibold text-textprimary place-content-start'>{name}</span>
                    <button className='text-textprimary text-xl place-self-end' onClick={onClose}>
                        <IoMdClose size={24}/>
                    </button>
                </div>
                <div className='p-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}
