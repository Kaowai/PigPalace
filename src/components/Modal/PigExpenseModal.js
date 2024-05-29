import React from 'react'
import MainModal from './ModalMain/MainModal'
import { CheckCircle } from 'lucide-react'

export default function PigExpenseModal({ name, isvisible, isConfirm, onClose }) {
    return (
        <MainModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                <div className='w-full flex flex-row gap-2'>
                    <CheckCircle size={20}  className='text-successlight'/>
                    <span className='text-sm font-medium text-successlight'>Approved</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='w-1/2 flex flex-row gap-2 items-center justify-between'>
                        <span className='text-xs font-semibold text-textprimary'>ID Invoice</span>
                        <span className='text-xs font-normal text-textprimary'>INV04052024</span>
                    </div>
                    <div className='w-1/2 flex flex-row gap-2 items-center justify-between'>
                        <span className='text-xs font-semibold text-textprimary'>ID Invoice</span>
                        <span className='text-xs font-normal text-textprimary'>INV04052024</span>
                    </div>
                </div>
            </div>
        </MainModal>
    )
}
