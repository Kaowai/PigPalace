import React, { useEffect, useState } from 'react'
import EventModal from './ModalMain/EventsModal';
import { DateTimeInput, DateTimeInput2, Input, Input2, MultiSelect } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { getPigAllAction, getPigByIDAction } from '../../Redux/Actions/PigActions';
import { Checkbox, Select } from 'antd';
import { getAllPigService, getPigByIDService } from '../../Redux/APIs/PigService';
import { createVaccineScheduleAction, getAllVacineAction } from '../../Redux/Actions/VaccineScheduleActions';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VaccineScheduleValidation } from '../../Validation/PigValidation';
import { InlineError } from '../../Notifications/Error';
import toast from 'react-hot-toast';
import { createVaccineScheduleService } from '../../Redux/APIs/VaccineScheduleService';
import { CheckCircle } from 'lucide-react';

export default function VaccineModal({ name, isvisible, onClose, isConfirm, data }) {
    const dispatch = useDispatch();
    const { barns } = useSelector(state => state.barnGetAll);
    const [date, setDate] = useState('');
    const [maChuongSelected, setMaChuongSelected] = useState('');
    const { pigs } = useSelector(state => state.getAllPig);
    const [pigSelected, setPigSelected] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isAll, setIsAll] = useState(false);
    const { vaccines } = useSelector(state => state.getAllVaccine);
    const [isErrorPig, setIsErrorPig] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(VaccineScheduleValidation) });

    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getAllBarnAction(farmID));
        dispatch(getPigAllAction(farmID));
        dispatch(getAllVacineAction(farmID));
        setSelected(false);
        setSelected(null);
        setDate('');
    }, [])

    const onSubmit = async (data) => {
        const userID = JSON.parse(localStorage.getItem('userID2'));
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        // handle choose all pig of barn
        if (isAll) {
            if (date === '') {
                setIsDateError(true);
                return;
            }
            console.log(data);
            const listMaHeo = pigSelected.map((pig) => {
                return {
                    maHeo: pig.value,
                }
            })


            try {
                await createVaccineScheduleService(date, data.maHangHoa, data.lieuLuong, userID, farmID, listMaHeo);
                toast.success('Create vaccine schedule successfully');
                onClose();
            } catch (error) {
                toast.error('Create vaccine schedule failed');
                onClose()
            }

        }
        else {
            if (!selected) {
                setIsErrorPig(true);
                return;
            }
            setIsErrorPig(false);
            const listMaHeo = selected.map((pig) => {
                return {
                    maHeo: pig,
                }
            })
            try {
                await createVaccineScheduleService(date, data.maHangHoa, data.lieuLuong, userID, farmID, listMaHeo);
                toast.success('Create vaccine schedule successfully');
                onClose();
            } catch (error) {
                toast.error('Create vaccine schedule failed');
                onClose()
            }
        }
        // handle choose specific pig
    }

    useEffect(() => {
        setSelected(null);
        const data = pigs.filter(pig => pig.maChuong === maChuongSelected).map((pig) => {
            return {
                label: pig.maHeo + ' - ' + (pig.gioiTinh === 'Đực' ? 'Male' : 'Female') + ' - ' + pig.trongLuong + 'kg',
                value: pig.maHeo
            }
        })
        setPigSelected(data);
    }, [maChuongSelected])

    useEffect(() => {
        setSelected(null);
    }, [isAll])

    const handleChange = (value) => {
        setSelected(value);
        if (!selected) {
            setIsErrorPig(true);
        } else {
            setIsErrorPig(false);
        }
    }

    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Barns: *</label>
                        <select
                            placeholder={"Select..."}
                            onChange={(e) => { setMaChuongSelected(e.target.value) }}
                            className={`text-xs border bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                            {
                                barns?.map((option, index) => {
                                    return (
                                        <option key={index} value={option.maChuong}>
                                            {option.ghiChu}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {errors.maChuong && <InlineError text={errors.maChuong.message} >{ }</InlineError>}
                </div>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <label className="text-secondary60 font-semibold text-xs">Pig: *</label>
                            <Checkbox className='font-semibold text-xs' onChange={() => setIsAll(!isAll)} >Choose all pigs?</Checkbox>
                        </div>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                                borderRadius: '4px'
                            }}
                            disabled={isAll}
                            onChange={(value) => { handleChange(value) }}
                            className="mt-2"
                            value={selected}
                            defaultValue={[]}
                            placeholder="Please select"
                            options={pigSelected}
                        />
                    </div>
                    {isErrorPig && <InlineError text={'Please choose at least one pig'}></InlineError>}
                </div>
                <div className='flex flex-row gap-3 justify-between items-center w-full'>
                    <div className='w-full'>
                        <div className="text-xs flex-col gap-2 flex w-full relative">
                            <label className="text-secondary60 font-semibold text-xs">Vaccine: *</label>
                            <select
                                {...register("maHangHoa")}
                                placeholder={"Select..."}
                                className={`text-xs border bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                                {vaccines?.length === 0 && <div value={null}>No vaccine available</div>}
                                {vaccines?.map((option, index) => {
                                    return option.loaiHangHoa === 'Vắc xin' && (
                                        <option key={index} value={option.id}>
                                            {option.tenHangHoa}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        {errors.maHangHoa && <InlineError text={errors.maHangHoa.message}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <div className="text-xs flex-col flex w-full relative">
                            <label className="text-secondary60 font-semibold text-xs">Vaccine: *</label>
                            <input
                                type={'number'}
                                placeholder={'Quantity...'}
                                {...register('lieuLuong')}
                                className={`w-full text-xs border mt-2 bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 focus:ring-blue-500`} />
                        </div>
                        {errors.lieuLuong && <InlineError text={errors.lieuLuong.message}></InlineError>}
                    </div>
                </div>
                <div className='w-full'>
                    <DateTimeInput label={"Vaccine Date: *"} placeholder={"dd-MM-YYYY"} setDate={setDate} setError={setIsDateError} />
                    {isDateError && <InlineError text={'Please choose a date'}></InlineError>}
                </div>
                <div className='flex justify-start items-start w-full'>
                    <button className='button-submit' onClick={handleSubmit(onSubmit)}>
                        Submit
                    </button>

                </div>
            </div>
        </EventModal>
    )
}
