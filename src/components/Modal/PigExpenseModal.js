import React from 'react'
import { CheckCircle } from 'lucide-react'
import SubModal from './ModalMain/SubModal'
import { Link } from 'react-router-dom'

export default function PigExpenseModalView({ name, isvisible, isConfirm, onClose, data }) {
    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                {
                    !isConfirm ? (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>Approved</span>
                        </div>
                    ) : (
                        <Link
                            to={`/Invoice/Expenses/ExpensesOverview/ExpensesEditPig/:expensesId`} className='button-edit'>
                            Edit
                        </Link>
                    )
                }
                <div className='sm:grid grid-cols-2 gap-2'>
                    <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                        <span>ID Invoice:</span>
                        <span>Type:</span>
                        {data?.name && <span>Name:</span>}
                        <span>Quantity:</span>
                        <span>Cost:</span>
                        <span>Invoice Date:</span>
                        <span>Purchase Date:</span>
                    </div>
                </div>
            </div>
        </SubModal>
    )
}
