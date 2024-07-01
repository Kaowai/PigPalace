import React, { useEffect, useState } from 'react'
import EventModal from './ModalMain/EventsModal'
import { CheckCircle } from 'lucide-react'
import { Select } from 'antd';
import { DateTimeInput } from '../Input';
import { formatDate } from '../../Functionalities/GlobalFunctions';

export default function VaccineConfirmModal({ name, isvisible, onClose, data, isConfirm, dataPig, handleSubmit }) {
    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                {
                    !isConfirm && (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>Approved</span>
                        </div>
                    )
                }
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Vaccine Schedule ID: *</label>
                        <input
                            placeholder={"Select..."}
                            value={data?.maLichTiem}
                            disabled={true}
                            className={`text-xs border bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                        </input>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <label className="text-secondary60 font-semibold text-xs">Pig: *</label>
                        </div>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                                borderRadius: '4px'
                            }}
                            disabled={true}
                            className="mt-2"
                            value={dataPig}
                            defaultValue={[]}
                            placeholder="Please select"
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-3 justify-between items-center w-full'>
                    <div className='w-full'>
                        <div className="text-xs flex-col gap-2 flex w-full relative">
                            <label className="text-secondary60 font-semibold text-xs">Vaccine: *</label>
                            <input
                                placeholder={"Select..."}
                                value={data?.maHangHoa}
                                disabled={true}
                                className={`text-xs border bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >

                            </input>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-xs flex-col flex w-full relative">
                            <label className="text-secondary60 font-semibold text-xs">Quantity: *</label>
                            <input
                                type={'number'}
                                value={data?.lieuLuong}
                                disabled={true}
                                placeholder={'Quantity...'}
                                className={`w-full text-xs border mt-2 bg-white bor8der-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 focus:ring-blue-500`} />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <DateTimeInput label={"Vaccine Date: *"} placeholder={data && formatDate(data?.ngayTiem)} isDisable={true} />
                </div>
                <div className='flex justify-start items-start w-full'>
                    {
                        isConfirm ? (
                            <button className='button-submit' onClick={handleSubmit}>
                                Submit
                            </button>
                        ) : (
                            <button className='button-close' onClick={onClose}>
                                Close
                            </button>
                        )
                    }
                </div>
            </div>
        </EventModal>
    )
}
