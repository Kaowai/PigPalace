import React from 'react'
import MainModal from './MainModal'

export default function PigExpenseModal({ name, isvisible, isConfirm, onClose }) {
    return (
        <MainModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='w-full px-6 py-6 flex flex-col gap-5'>
                {
                    isConfirm && (
                        <button className='tracking-wide text-sm font-semibold text-warningmain w-24 px-2 py-1 rounded border border-warningmain hover:bg-warningmain hover:text-white'>
                            Edit
                        </button>
                    )
                }

            </div>
        </MainModal>
    )
}
