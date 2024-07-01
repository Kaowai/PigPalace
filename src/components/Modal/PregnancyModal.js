import React, { useState } from 'react'
import SubModal from './ModalMain/SubModal';
import { CheckCircle } from 'lucide-react';
import { FaRegWindowClose } from 'react-icons/fa';
import { CiNoWaitingSign } from 'react-icons/ci';
import { formatDate, isMoreThan100Days } from '../../Functionalities/GlobalFunctions';
import EventModal from './ModalMain/EventsModal';
import { DateTimeInput, Input2 } from '../Input';
import { useDispatch } from 'react-redux';
import { confirmFarrowingFailureService, confirmFarrowingSuccessService, confirmPregnancyService } from '../../Redux/APIs/PregnancyScheduleService';
import toast from 'react-hot-toast';
import { InlineError } from '../../Notifications/Error';
import { useForm } from 'react-hook-form';
import { PregnancyFailureValidation, PregnancySuccessValidation } from '../../Validation/PigValidation';
import { yupResolver } from '@hookform/resolvers/yup';

export default function PregnancyModal({ name, isvisible, isConfirm, onClose, data, refreshData }) {
    const [status, setStatus] = useState('Success');
    const [statusFarrowing, setStatusFarrowing] = useState('Select...');
    const [dateFarrowing, setDateFarrowing] = useState('');
    const [isErrorDateFarrowing, setIsErrorDateFarrowing] = useState(false);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(statusFarrowing === 'Success' ? PregnancySuccessValidation : PregnancyFailureValidation) });


    const handleConfirm = async () => {
        if (data.trangThai === 'Waiting Pregnancy') {
            try {
                await confirmPregnancyService(data.maLich, data.ngayPhoi, status === 'Success' ? true : false, JSON.parse(localStorage.getItem('farmID')));
                if (status === 'Success') {
                    toast.success('Confirm successfully');
                } else {
                    toast.success('Fail successfully');
                }
            } catch (error) {
                console.log(error);
                toast.error('Confirm failed');
            }
        } else if (data.trangThai === 'Waiting Farrowing') {

        }
        onClose();
    }

    const onSubmit = async (data2) => {
        if (statusFarrowing === 'Success') {
            if (!isMoreThan100Days(data.ngayPhoi, dateFarrowing)) {
                toast.error('Farrowing date must be within 100 days from mating date');
                return;
            }
            if (dateFarrowing === '') {
                setIsErrorDateFarrowing(true);
                return;
            }
            if (data.SoHeoCai === 0 && data.SoHeoDuc === 0 && data.SoHeoChet === 0 && data.SoHeoTat === 0) {
                toast.error('Please enter amount of piglet');
                return;
            }
            data2.SoHeoConSong = data2.SoHeoCai + data2.SoHeoDuc;
            try {
                await confirmFarrowingSuccessService(data.maLich, dateFarrowing, data2.SoHeoConSong, data2.SoHeoDuc, data2.SoHeoCai, data2.SoHeoChet, data2.SoHeoTat);
                toast.success('Confirm successfully');
            } catch (error) {
                console.log(error);
                toast.error('Confirm failed');
            }
            onClose();
        } else if (statusFarrowing === 'Fail') {
            console.log(data2);
            try {
                await confirmFarrowingFailureService(data.maLich, data2.NguyenNhan, data2.CachGiaiQuyet, data2.GhiChuTaiSaoThatBai);
                toast.success('Confirm successfully');
            } catch (error) {
                console.log(error);
                toast.error('Confirm failed');
            }
            onClose();

        }

    }

    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose} isFarm={true}>
            <div className='w-full px-3 py-3 flex flex-col gap-5'>
                {

                    data.trangThai === 'Farrowing Successful' ? (
                        <div className='w-full flex flex-row gap-2'>
                            <CheckCircle size={20} className='text-successlight' />
                            <span className='text-sm font-medium text-successlight'>{data.trangThai}</span>
                        </div>
                    ) : (data.trangThai === 'Farrowing Fail' || data.trangThai === 'Pregnancy Fail') ? (
                        <div className='w-full flex flex-row gap-2'>
                            <FaRegWindowClose size={20} className='text-warning10' />
                            <span className='text-sm font-medium text-warning10'>{data.trangThai}</span>
                        </div>
                    ) : (
                        <div className='w-full flex flex-row gap-2'>
                            <CiNoWaitingSign size={20} className='text-warningmain' />
                            <span className='text-sm font-medium text-warningmain'>{data.trangThai}</span>
                        </div>
                    )
                }
                <div className='flex flex-col gap-20'>
                    <div className='flex flex-row gap-2 justify-between items-center '>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-bold'>
                            <span>ID: </span>
                            <span>Sows/Glit:</span>
                            <span>Boars:</span>
                            <span>Type of crossing:</span>
                            <span>Mating Date:</span>
                            {data.trangThai === 'Farrowing Successful' && (
                                <span>Farrowing Date: </span>
                            )}
                        </div>
                        <div className='flex flex-col gap-3 text-xs text-textprimary font-normal text-left'>
                            <span>{data.maLich}</span>
                            <span>{data.maHeoNai}</span>
                            <span>{data.maHeoDuc}</span>
                            <span>{data.loaiPhoiGiong}</span>
                            <span>{formatDate(data.ngayPhoi)}</span>
                            {data.trangThai === 'Farrowing Successful' && (
                                <span>{formatDate(data.ngayDeChinhThuc)}</span>
                            )}
                        </div>
                    </div>
                </div>
                {
                    data.trangThai === 'Farrowing Successful' && (
                        <div className='md:grid grid-cols-2 gap-4 justify-center items-center'>
                            <Input2
                                label='Amount of Female: '
                                value={data.soHeoCai}
                            />
                            <Input2
                                label='Amount of Male: '
                                value={data.soHeoDuc}
                            />
                            <Input2
                                label='Amount of Dead: '
                                value={data.soHeoChet}
                            />
                            <Input2
                                label='Amount of disabilities:'
                                value={data.soHeoTat}
                            />
                        </div>
                    )
                }
                {
                    data.trangThai === 'Farrowing Fail' && (
                        <div className='md:grid grid-cols-2 gap-4 justify-center items-center'>
                            <Input2
                                label='Reason Farrowing Fail: '
                                value={data.nguyenNhanThatBai}
                            />
                            <Input2
                                label='Solution: '
                                value={data.cachGiaiQuyet}
                            />
                            <Input2
                                label='Note: '
                                value={data.ghiChuTaiSaoThatBai}
                            />
                        </div>
                    )
                }
                {
                    data.trangThai === 'Waiting Pregnancy' && (
                        <div className='w-1/2'>
                            <div className="text-xs w-full relative">
                                <label className="text-secondary60 font-bold text-xs">Status: *</label>
                                <select
                                    placeholder={"Select sows..."}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                                    <option value={"Success"}>Success</option>
                                    <option value={"Fail"}>Fail</option>
                                </select>
                            </div>
                        </div>
                    )
                }
                {
                    data.trangThai === 'Waiting Farrowing' && (
                        <div className='flex flex-col gap-5 w-full'>
                            <div className="text-xs w-1/2 relative ">
                                <label className="text-secondary60 font-bold text-xs">Status: *</label>
                                <select
                                    placeholder={"Select sows..."}
                                    onChange={(e) => setStatusFarrowing(e.target.value)}
                                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                                    <option value={"Select..."}>Select...</option>
                                    <option value={"Success"}>Success</option>
                                    <option value={"Fail"}>Fail</option>
                                </select>
                            </div>

                            {
                                statusFarrowing === 'Success' && (
                                    <div className='md:grid grid-cols-2 gap-5 justify-center items-center'>
                                        <div className='w-full'>
                                            <DateTimeInput
                                                label='Farrowing Date: *'
                                                placeholder={"Select date..."}
                                                setDate={setDateFarrowing}
                                                setError={setIsErrorDateFarrowing}
                                            />
                                            {isErrorDateFarrowing && <InlineError text='Please select a date' />}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Amount of male piglet: '}
                                                placeholder='Enter amount...'
                                                type={'number'}
                                                register={register("SoHeoDuc")}
                                            />
                                            {errors.SoHeoDuc && <InlineError text={errors.SoHeoDuc.message}></InlineError>}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Amount of female piglet: '}
                                                placeholder='Enter amount...'
                                                type={'number'}
                                                register={register("SoHeoCai")}
                                            />
                                            {errors.SoHeoCai && <InlineError text={errors.SoHeoCai.message}></InlineError>}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Amount of dead piglet: '}
                                                placeholder='Enter amount...'
                                                type={'number'}
                                                register={register("SoHeoChet")}
                                            />
                                            {errors.SoHeoChet && <InlineError text={errors.SoHeoChet.message}></InlineError>}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Amount of disability piglet: '}
                                                placeholder='Enter amount...'
                                                type={'number'}
                                                register={register("SoHeoTat")}
                                            />
                                            {errors.SoHeoTat && <InlineError text={errors.SoHeoTat.message}></InlineError>}
                                        </div>
                                    </div>
                                )
                            }
                            {
                                statusFarrowing === 'Fail' && (
                                    <div className='md:grid grid-cols-2 gap-5 justify-center items-center'>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Reson Farrowing Fail: '}
                                                placeholder='Enter...'
                                                register={register("NguyenNhan")}
                                            />
                                            {errors.NguyenNhan && <InlineError text={errors.NguyenNhan.message}></InlineError>}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Solution Farrowing Fail: '}
                                                placeholder='Enter...'
                                                register={register("CachGiaiQuyet")}
                                            />
                                            {errors.CachGiaiQuyet && <InlineError text={errors.CachGiaiQuyet.message}></InlineError>}
                                        </div>
                                        <div className='w-full'>
                                            <Input2
                                                label={'Note: '}
                                                placeholder='Enter...'
                                                register={register("GhiChuTaiSaoThatBai")}
                                            />
                                            {errors.GhiChuTaiSaoThatBai && <InlineError text={errors.GhiChuTaiSaoThatBai.message}></InlineError>}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {isConfirm ? (
                    <div className='flex flex-row gap-2 justify-start item-center '>
                        <button
                            className='button-submit'
                            onClick={data.trangThai === 'Waiting Pregnancy' ? handleConfirm
                                : handleSubmit(onSubmit)
                            }>
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
    )
}
