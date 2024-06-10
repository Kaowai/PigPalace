import React from 'react'
import { IoMdClose } from 'react-icons/io';

function EventModal({name, isvisible, onClose, children}) {
    if (!isvisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 z-[1000] flex justify-center top-0 items-center'>
            <div className={`w-1/3 scroll-auto flex flex-col rounded-lg bg-white animate-slide-in-from-top`}>
                <div className='w-full flex flex-row border-textdisable py-2 px-2 border-b  items-center justify-between '>
                    <span className=' text-lg font-semibold text-textprimary place-content-start'>{name}</span>
                    <button className='text-textprimary text-xl place-self-end' onClick={onClose}>
                        <IoMdClose size={24}/>
                    </button>
                </div>
                <div className='p-2 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100'>
                    {children}
                </div>
            </div>
        </div>
        
    );
}

export default EventModal
