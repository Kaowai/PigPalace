import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import SubModal from './ModalMain/SubModal';
import Table2 from '../TableAddPig';
import { useDispatch, useSelector } from 'react-redux';
import { getListPigInInvoiceImportAction } from '../../Redux/Actions/InvoicePigActions';
import { getPigByIDAction } from '../../Redux/Actions/PigActions';
import { FaRegWindowClose } from "react-icons/fa";
import { formatDate } from '../../Functionalities/GlobalFunctions';

export default function ExpenseModalView({ name, isvisible, isConfirm, onClose, data, isFarm, dataPig, handleConfirm, isExport }) {
    const handleSubmit = () => {
        handleConfirm();
        onClose();
    };

    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose} isFarm={isFarm}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                {
                    !isConfirm && (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>Approved</span>
                        </div>
                    )
                }
                <div className='sm:grid grid-cols-2 gap-20'>
                    <div className='flex flex-row gap-2 justify-between items-center '>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>ID Schedule:</span>
                            <span>Quantity:</span>
                            <span>Cost:</span>
                            <span>Invoice Date:</span>
                            <span>Purchase Date:</span>
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{data.maHoaDon}</span>
                            <span>{data.soLuong}</span>
                            <span>{data.tongTien}</span>
                            <span>{formatDate(data.ngayLap)}</span>
                            <span>{formatDate(data.ngayMua)}</span>
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
                            <span>{data?.tenCongTy}</span>
                            <span>{data?.tenKhachHang}</span>
                            <span>{data?.diaChi}</span>
                            <span>{data?.sdt}</span>
                            <span>{data?.email}</span>
                        </div>
                    </div>
                </div>
                {!isFarm && <Table2 isView={true} data={dataPig} isExport={isExport}/>}

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
                )}
            </div>
        </SubModal>
    );
}
