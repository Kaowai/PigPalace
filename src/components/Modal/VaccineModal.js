import React, { useEffect, useState } from 'react'
import EventModal from './ModalMain/EventsModal';
import { DateTimeInput, DateTimeInput2, Input, Input2, MultiSelect } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { getPigAllAction, getPigByIDAction } from '../../Redux/Actions/PigActions';
import { Checkbox, Select } from 'antd';
import { getAllPigService, getPigByIDService } from '../../Redux/APIs/PigService';
import { getAllVacineAction } from '../../Redux/Actions/VaccineScheduleActions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VaccineScheduleValidation } from '../../Validation/PigValidation';

export default function VaccineModal({ name, isvisible, onClose, refreshTable }) {
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
        // filter pigs when barn selected 
        // setMaChuongSelected(barns[0]?.maChuong);
    }, [])

    const onSubmit = (data) => {
        // handle choose all pig of barn
        if (isAll) {

        }
        else {
            if (!selected) {
                setIsErrorPig(true);
                return;
            }
            setIsErrorPig(false);
            console.log(data);
        }
        // handle choose specific pig
    }

    useEffect(() => {
        if (isAll) setSelected(null);
        setSelected(null);
        const data = pigs.filter(pig => pig.maChuong === maChuongSelected).map((pig) => {
            return {
                label: pig.maHeo + ' - ' + (pig.gioiTinh === 'Đực' ? 'Male' : 'Female') + ' - ' + pig.trongLuong + 'kg',
                value: pig.maHeo
            }
        })
        setPigSelected(data);
    }, [maChuongSelected, isAll])

    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Barns: *</label>
                        <select
                            placeholder={"Select..."}
                            onChange={(e) => setMaChuongSelected(e.target.value)}
                            {...register("maChuong")}
                            className={`text-xs border bg-white border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                            {barns?.map((option, index) => {
                                return (
                                    <option key={index} value={option.maChuong}>
                                        {option.ghiChu}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    {errors.maChuong && <span className='text-xs text-red-500'>{errors.maChuong.message}</span>}
                </div>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <label className="text-secondary60 font-semibold text-xs">Pig: *</label>
                            <Checkbox className='font-semibold text-xs' onChange={() => { setIsAll(!isAll) }} >Choose all pigs?</Checkbox>
                        </div>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                                borderRadius: '4px'
                            }}
                            disabled={isAll}
                            onChange={(value) => { setSelected(value) }}
                            className="mt-2"
                            placeholder="Please select"
                            defaultValue={[]}
                            options={pigSelected}
                        />
                    </div>
                    {isErrorPig && <span className='text-xs text-red-500'>Please choose at least one pig</span>}
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
                        {errors.maHangHoa && <span className='text-xs text-red-500'>{errors.maHangHoa.message}</span>}
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
                        {errors.lieuLuong && <span className='text-xs text-red-500'>{errors.lieuLuong.message}</span>}
                    </div>
                </div>
                <div className='w-full'>
                    <DateTimeInput label={"Vaccine Date: *"} placeholder={"dd-MM-YYYY"} setDate={setDate} />
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
