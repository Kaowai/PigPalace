import React from 'react'
import { IoMdClose } from "react-icons/io";
export default function ModalPopup({ name, isvisible, onClose, children }) {
    if (!isvisible) return null;
    return (
        <div className='fixed inset-0 flex justify-center -top-[16rem] bg-black/20 items-center'>
            <div className='w-1/3 flex flex-col bg-white  rounded-md outline-none border border-textdisable animate-slide-in-from-top'>
                <div className='w-full flex flex-row border-textdisable py-2 px-2 border-b  items-center justify-between'>
                    <span className=' text-lg font-semibold text-textprimary place-content-start'>{name}</span>
                    <button className='text-textprimary text-xl place-self-end' onClick={onClose}>
                        <IoMdClose size={24} />
                    </button>
                </div>
                <div className='p-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}
