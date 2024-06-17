import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import EventModal from './ModalMain/EventsModal';
import { Input2, MessageInput } from '../Input';
import { InlineError } from '../../Notifications/Error';
import toast from 'react-hot-toast';
import { BreedValidation } from '../../Validation/PigValidation';
import { createBreedService } from '../../Redux/APIs/BreedService';

export default function BreedModal({ name, isvisible, onClose, breed }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(BreedValidation) });

    useEffect(() => {
        console.log(breed);
    }, [breed])

    const onsubmit = async (data) => {
        data.tinhTrang = 'Active';
        data.soLuongHeo = 0;
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        try {
            await createBreedService(data.tenGiongHeo, data.moTa, farmID);
            toast.success('Create breed successfully');
            onClose();
        } catch (error) {
            toast.error('Create breed failed');
        }
    }
    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <Input2
                        label='Breed Name'
                        placeholder={breed ? breed.tenGiongHeo : 'Enter breed name'}
                        register={register("tenGiongHeo")}
                    />
                    {errors.tenGiongHeo && <InlineError text={errors.tenGiongHeo.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <MessageInput
                        label='Description'
                        placeholder={breed ? breed.moTa : 'Enter capacity'}
                        type={'text'}
                        register={register("moTa")}
                    />
                    {errors.moTa && <InlineError text={errors.moTa.message}></InlineError>}
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
