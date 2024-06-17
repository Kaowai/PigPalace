import React, { useEffect } from 'react'
import EventModal from './ModalMain/EventsModal'
import { Input2 } from '../Input'
import { yup, yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { BarnValidation } from '../../Validation/PigValidation';
import { InlineError } from '../../Notifications/Error';
import { createBarnService } from '../../Redux/APIs/BarnService';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';


export default function BarnAddModal({ name, isvisible, onClose, barn }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(BarnValidation) });

    useEffect(() => {
        console.log(barn);
    }, [barn])

    const onsubmit = async (data) => {
        data.tinhTrang = 'Active';
        data.soLuongHeo = 0;
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        try {
            await createBarnService(data.tinhTrang, data.soLuongHeo, data.ghiChu, data.sucChuaToiDa, farmID);
            toast.success('Create barn successfully');
            onClose();
        } catch (error) {
            toast.error('Create barn failed');
        }
    }
    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <Input2
                        label='Barn Name'
                        placeholder={barn ? barn.ghiChu : 'Enter barn name'}
                        register={register("ghiChu")}
                    />
                    {errors.ghiChu && <InlineError text={errors.ghiChu.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Capacity'
                        placeholder={barn ? barn.sucChuaToiDa : 'Enter capacity'}
                        type={'number'}
                        register={register("sucChuaToiDa")}
                    />
                    {errors.sucChuaToiDa && <InlineError text={errors.sucChuaToiDa.message}></InlineError>}
                </div>
                <div className='flex justify-start items-start w-full'>
                    <button className='button-submit' onClick={handleSubmit(onsubmit)}>
                        Submit
                    </button>
                </div>
            </div>
        </EventModal>
    )
}
