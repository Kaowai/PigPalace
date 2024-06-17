import React, { useEffect, useState } from 'react';
import MainModal from './ModalMain/MainModal';
import { DateTimeInput, Input2, InputMoney, MessageInput, MultiSelect, Select1 } from '../Input';
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { getBreedByFarmIDAction } from '../../Redux/Actions/BreedActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { set, useForm } from 'react-hook-form';
import { getPigBoarAction, getPigSowAction } from '../../Redux/Actions/PigActions';
import { InlineError } from '../../Notifications/Error';
import * as yup from 'yup';
import toast from 'react-hot-toast';

const PigValidation = yup.object().shape({
    maChuong: yup.string().required("Pig Barn is required").trim(),
    gioiTinh: yup.string().required("Gender is required").trim(),
    trongLuong: yup.number().required("Weight is required").positive("Weight must be positive").integer("Weight must be an integer"),
    maGiongHeo: yup.number().required("Breed is required"),
    donGiaNhap: yup.number().required("Cost is required").positive("Cost must be positive").integer("Cost must be an integer"),
});

export default function PigAddModal({ name, isvisible, onClose, setPigData, dataPig }) {
    const dispatch = useDispatch();
    const [isOutFarm, setIsFromFarm] = useState(true);
    const { barns } = useSelector(state => state.barnGetAll);
    const { breedInfo } = useSelector(state => state.breedGetAllByFarmID);
    const { boars } = useSelector(state => state.getPigBoar);
    const { sows } = useSelector(state => state.getPigSow);
    const [dateOfBirth, setDateOfBirth] = useState('2022-10-02');
    const [dateToFarm, setDateToFarm] = useState('2022-10-02');
    const [isFullBreed, setIsFullBreed] = useState(false);
    const [maHeoCha, setMaHeoCha] = useState('');
    const [maHeoMe, setMaHeoMe] = useState('');
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [maHeo, setMaHeo] = useState('');
    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getAllBarnAction(farmID));
        dispatch(getBreedByFarmIDAction(farmID));
        dispatch(getPigBoarAction(farmID));
        dispatch(getPigSowAction(farmID));

        if (boars && boars.length > 0) {
            setMaHeoCha(boars[0]?.maHeo);
        }

        if (sows && sows.length > 0) {
            setMaHeoMe(sows[0]?.maHeo);
        }
        createRadomIDPig();

        setDateOfBirth('');
        setDateToFarm('');
    }, [isvisible]);

    const createRadomIDPig = () => {
        const random = Math.floor(100000 + Math.random() * 900000).toString();
        setMaHeo(random);
        return random;
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(PigValidation) });

    const onSubmit = async (data) => {
        if (dateOfBirth === '' || dateToFarm === '') { 
            setIsFirstTime(false);
            return;
        }
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        data.farmID = farmID;
        data.maHeo = maHeo;
        data.ngaySinh = dateOfBirth;
        data.ngayDenTrangTrai = dateToFarm;
        data.isThuanChung = isFullBreed;
        if (isOutFarm) {
            data.maHeoCha = maHeoCha;
            data.maHeoMe = maHeoMe;
        }
        console.log(data);

        // neu dataPing la null thi sao ?
        const dataPigTemp = [...dataPig];
        dataPigTemp.push(data);
        setPigData(dataPigTemp);
        toast.success('Add pig successfully');
        onClose();
    }

    const options = [
        { title: 'Male' },
        { title: 'Female' }
    ];
    return (
        <MainModal name={name} isvisible={isvisible} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full h-full py-2 gap-12 px-6'>
                    <div className='w-full grid md:grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-4'>
                            <div className='w-full'>
                                <Input2
                                    label='ID: *'
                                    type='text'
                                    disabled={true}
                                    value={maHeo}
                                />
                            </div>
                            <div className='w-full'>
                                <div className="text-xs w-full relative">
                                    <label className="text-secondary60 font-semibold text-xs">Gender: *</label>
                                    <select
                                        {...register("gioiTinh")}
                                        className={`w-full text-xs border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                    >
                                        {options.map((option, index) => (
                                            <option key={index} value={option.title}>{option.title}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.gioiTinh && <InlineError text={errors.gioiTinh.message} />}
                            </div>
                            <div className='w-full'>
                                <div className="text-xs w-full relative">
                                    <label className="text-secondary60 font-semibold text-xs">Breed: *</label>
                                    <select
                                        {...register("maGiongHeo")}
                                        className={`w-full text-xs border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                    >
                                        {breedInfo?.map((option) => (
                                            <option key={option.maGiongHeo} value={option.maGiongHeo}>{option.tenGiongHeo}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.maGiongHeo && <InlineError text={errors.maGiongHeo.message} />}
                            </div>
                            <div className='w-full'>
                                <Input2
                                    label='Cost ($): *'
                                    placeholder=''
                                    name='donGiaNhap'
                                    type='number'
                                    register={register("donGiaNhap")}
                                />
                                {errors.donGiaNhap && <InlineError text={errors.donGiaNhap.message} />}
                            </div>

                            <div className='w-full'>
                                <Checkbox className='font-semibold text-xs' onChange={() => setIsFromFarm(!isOutFarm)}>Out the farm?</Checkbox>
                            </div>
                            <div className='w-full'>
                                <div className="text-xs w-full relative">
                                    <label className="text-secondary60 font-semibold text-xs">Father: *</label>
                                    {
                                        isOutFarm ? (
                                            <select
                                                onChange={(e) => setMaHeoCha(e.target.value)}
                                                className={`w-full text-xs border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                            >
                                                {boars?.map((option) => (
                                                    <option key={option.maHeo} value={option.maHeo}>{option.maHeo}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <select
                                                disabled
                                                className={`w-full text-xs border-textdisable border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                            >
                                            </select>
                                        )
                                    }
                                </div>
                                {isOutFarm && errors.maHeoCha && <InlineError text={errors.maHeoCha.message} />}
                            </div>
                            <div className='flex flex-row gap-3'>
                                <button className='button-submit-2' type='submit'>
                                    Submit
                                </button>
                                <button className='button-cancel' onClick={onClose}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='w-full'>
                                <DateTimeInput label="Date of Birth: *" setDate={setDateOfBirth} />
                                {!dateOfBirth && !isFirstTime && <InlineError text={"Date of birth is required"} />}
                            </div>
                            <div className='w-full'>
                                <DateTimeInput label="Date to farm: *" setDate={setDateToFarm} />
                                {!dateToFarm && !isFirstTime && <InlineError text={"Date of birth is required"} />}
                            </div>
                            <div className='w-full'>
                                <div className="text-xs w-full relative">
                                    <label className="text-secondary60 font-semibold text-xs">Barn: *</label>
                                    <select
                                        {...register("maChuong")}
                                        className={`w-full text-xs border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                    >
                                        {barns?.map((option) => (
                                            <option key={option.maChuong} value={option.maChuong}>{option.ghiChu}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.maChuong && <InlineError text={errors.maChuong.message} />}
                            </div>
                            <div className='w-full'>
                                <Input2
                                    label='Weight (Kg): *'
                                    placeholder=''
                                    name='trongLuong'
                                    type='number'
                                    register={register("trongLuong")}
                                />
                                {errors.trongLuong && <InlineError text={errors.trongLuong.message} />}
                            </div>
                            <div className='w-full'>
                                <Checkbox className='font-semibold text-xs' onChange={() => setIsFullBreed(!isFullBreed)}>Is Full Breed?</Checkbox>
                            </div>
                            <div className='w-full'>
                                <div className="text-xs w-full relative">
                                    <label className="text-secondary60 font-semibold text-xs">Mother: *</label>
                                    {
                                        isOutFarm ? (
                                            <select
                                                onChange={(e) => setMaHeoMe(e.target.value)}
                                                className={`w-full text-xs border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                            >
                                                {sows?.map((option) => (
                                                    <option key={option.maHeo} value={option.maHeo}>{option.maHeo}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <select
                                                disabled
                                                className={`w-full text-xs border-textdisable border mt-2 bg-white h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`}
                                            >
                                            </select>
                                        )
                                    }
                                </div>
                                {isOutFarm && errors.maHeoMe && <InlineError text={errors.maHeoMe.message} />}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </MainModal>
    );
}
