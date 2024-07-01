import React, { useEffect, useState } from 'react'
import SubModal from './ModalMain/SubModal';
import { CheckCircle } from 'lucide-react';
import { calculateAge, formatDate } from '../../Functionalities/GlobalFunctions';
import TableVaccine from '../TableVaccine';
import TablePregnancy from '../TablePregnancy';
import { useDispatch } from 'react-redux';
import {  getVaccineScheduleByPigIDService } from '../../Redux/APIs/VaccineScheduleService';
import { getPigByIDService } from '../../Redux/APIs/PregnancyScheduleService';

export default function PigInfoModal({ name, isvisible, onClose, data, barns, breedInfo, maHeo }) {
    const dispatch = useDispatch();

    const [schedules, setSchedules] = useState([]);
    const [shcedulesPregnancy, setSchedulesPregnancy] = useState([]);   
    useEffect(() => {
        getVaccineByPig();
        getPregnancyScheduleByPig();
    }, [isvisible]);

    const getVaccineByPig = async () => {
        console.log(maHeo);
        try {
            const vaccine = await getVaccineScheduleByPigIDService(maHeo);
            setSchedules(vaccine);
        } catch (error) {
            console.log(error);
        }
    }

    const getPregnancyScheduleByPig = async () => {
        try {
            const pregnancy = await getPigByIDService(maHeo);
            console.log(pregnancy)
            setSchedulesPregnancy(pregnancy);
        } catch (error) { 
            console.log(error);
        }
    }

    const [selectedTab, setSelectedTab] = useState('History Injection');
    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                {data?.isThuanChung === 1
                    && (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>Full breed</span>
                        </div>
                    )
                }
                <div className='sm:grid grid-cols-2 gap-20'>
                    <div className='flex flex-row gap-2 justify-between items-center '>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>PigID: </span>
                            <span>Breed: </span>
                            <span>Age: </span>
                            <span>Gender: </span>
                            <span>Weight: </span>
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{data?.maHeo}</span>
                            <span>{breedInfo?.find(b => b.maGiongHeo === data?.maGiongHeo)?.tenGiongHeo}</span>
                            <span>{calculateAge(data?.ngaySinh)} Months</span>
                            <span>

                                {data?.gioiTinh === 'Đực' || data?.gioiTinh === 'Male' ? "Male" : "Female"}

                            </span>
                            <span>{data?.trongLuong} Kg</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 justify-between items-top'>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>Barns: </span>
                            <span>Father ID: </span>
                            <span>Mother ID: </span>
                            <span>Cost: </span>
                            <span>Date to farm: </span>
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{barns?.find(b => b.maChuong === data?.maChuong)?.ghiChu}</span>
                            <span>{data?.maHeoCha ? data?.maHeoCha : "None"}</span>
                            <span>{data?.maHeoMe ? data?.maHeoMe : "None"}</span>
                            <span>{data?.donGiaNhap}</span>
                            <span>{formatDate(data?.ngayDenTrangTrai)}</span>
                        </div>
                    </div>
                </div>


                <div className='flex flex-row gap-10 items-center p-2 border-b-2 border-textdisable/20'>
                    <div
                        className={`flex flex-col cursor-pointer tab ${selectedTab === 'History Injection' ? 'selected' : ''}`}
                        onClick={() => setSelectedTab('History Injection')}
                    >
                        <div className='flex flex-row gap-2 items-center'>
                            <span className={`text-xs font-medium ${selectedTab === 'History Injection' ? 'text-textprimary' : 'text-textdisable'}`}>History Injection</span>

                        </div>
                    </div>
                    <div
                        className={`flex flex-col cursor-pointer tab ${selectedTab === 'History Pregnancy' ? 'selected' : ''}`}
                        onClick={() => setSelectedTab('History Pregnancy')}
                    >
                        <div className='flex flex-row gap-2 items-center'>
                            <span className={`text-xs font-medium ${selectedTab === 'History Pregnancy' ? 'text-textprimary' : 'text-textdisable'}`}>History Pregnancy</span>

                        </div>
                    </div>
                </div>

                {
                    selectedTab === 'History Injection' ? (
                        <TableVaccine data={schedules} isView={true}/> 
                    ) : (
                        <TablePregnancy data={shcedulesPregnancy} isView={true}/>
                    )
                }
            </div>
        </SubModal>
    )
}
