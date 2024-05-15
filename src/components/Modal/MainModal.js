import React from 'react'

export default function MainModal({name, isvisible, onClose, children }) {
    if (!isvisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center top-0 items-center'>
            <div className='w-3/4 flex flex-col rounded bg-white'>
                <div className='w-full flex flex-row border-textdisable py-1 px-2 border-b  items-center justify-between'>
                    <span className=' text-sm font-semibold text-textprimary place-content-start'>{name}</span>
                    <button className='text-textprimary text-xl place-self-end' onClick={onClose}>
                        X
                    </button>
                </div>
                <div className='p-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}
