import React from 'react'
import { CheckCircle } from 'lucide-react'
import SubModal from './ModalMain/SubModal'
import { Link } from 'react-router-dom'
import Table2 from '../TableAddPig'

export default function ExpenseModalView({ name, isvisible, isConfirm, onClose, data, isFarm }) {

    const handleSubmit = () => {
        onClose();
    }
    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose} isFarm={isFarm}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                {
                    !isConfirm ? (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>Approved</span>
                        </div>
                    ) : (
                        <Link
                            to={`/Invoice/Expenses/ExpensesOverview/ExpensesEditPig/${data?.id}`} className='button-edit'>
                            Edit
                        </Link>
                    )
                }
                <div className='sm:grid grid-cols-2 gap-20'>
                    <div className='flex flex-row gap-2 justify-between items-center '>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>ID Invoice:</span>
                            <span>Type:</span>
                            {data?.name && <span>Name:</span>}
                            <span>Quantity:</span>
                            <span>Cost:</span>
                            <span>Invoice Date:</span>
                            <span>Purchase Date:</span>
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{data.id}</span>
                            <span>{data.type}</span>
                            {data?.name && <span>{data?.name}</span>}
                            <span>{data.amount}</span>
                            <span>{data.cost}</span>
                            <span>{data.invoiceDate}</span>
                            <span>{data.purchaseDate}</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 justify-between items-top'>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>Client Company Name:</span>
                            <span>Client Name:</span>
                            <span>Client Address:</span>
                            <span>Client Telephone:</span>
                            <span>Client Email:</span>
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{data?.clientCompany}</span>
                            <span>{data?.clientName}</span>
                            <span>{data?.clientAddress}</span>
                            <span>{data?.clientTelephone}</span>
                            <span>{data?.clientEmail}</span>
                        </div>
                    </div>
                </div>
                {!isFarm && <Table2 isView={true} />}

                {isConfirm ? (
                    <div className='flex flex-row gap-2 justify-start item-center '>
                        <button
                            className='button-submit'
                            onClick={() => { handleSubmit(); }}>
                            Confirm
                        </button>
                        <button className='button-cancel' onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-row gap-2 justify-start item-center '>

                        <button className='button-close' onClick={onClose}>
                            Close
                        </button>
                    </div>
                )
                }
            </div>
        </SubModal>
    )
}
