import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Input2 } from '../../components/Input';
import { set, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getListParameterAction } from '../../Redux/Actions/ParameterActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { ParameterValidation } from '../../Validation/PigValidation';
import { InlineError } from '../../Notifications/Error';
import { getListParameterService, updateParameterService } from '../../Redux/APIs/ParameterService';
import toast from 'react-hot-toast';

export default function General() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: errors }
    = useForm({ resolver: yupResolver(ParameterValidation) });
  const { parameters } = useSelector(state => state.getListParameter);


  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getListParameterAction(farmID));
    console.log(parameters);
  }, [])

  const onsubmit = async (data) => { 
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    console.log(data);
    try {
      const response = await updateParameterService(data.trongLuongToiThieuXuatChuong, data.trongLuongToiDaXuatChuong, data.tuoiToiThieuXuatChuong, data.tuoiToiDaXuatChuong, data.tuoiNhapDanHeoCon, data.giaoPhoiCanHuyetToiThieu, data.tuoiPhoiGiongToiThieuHeoDuc, data.tuoiPhoiGiongToiThieuHeoCai, data.soNgayToiThieuPhoiGiongLai, farmID);
      toast.success('Update parameter successfully');
    } catch (error){
      toast.error(error);
    }
  }
  return (
    <div className='h-full w-full flex flex-col gap-4 items-center'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>General Settings</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/Dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>General Settings</span>
          </div>
        </div>
      </div>
      {/*Content*/}

      <div className='flex flex-col gap-2 shadow rounded-xl py-4 md:w-2/3'>
        <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
          <div className='w-full'>
            <Input2
              label='Minimum Pig Weight Export'
              value={parameters[0]?.trongLuongToiThieuXuatChuong}
              type='number'
              register={register("trongLuongToiThieuXuatChuong")}
            />
            {errors.trongLuongToiThieuXuatChuong && <InlineError text={errors.trongLuongToiThieuXuatChuong.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Maximum Pig Weight Export'
              value={parameters[0]?.trongLuongToiDaXuatChuong}
              type='number'
              register={register("trongLuongToiDaXuatChuong")}
            />
            {errors.trongLuongToiDaXuatChuong && <InlineError text={errors.trongLuongToiDaXuatChuong.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Age Export'
              value={parameters[0]?.tuoiToiThieuXuatChuong}
              type='number'
              register={register("tuoiToiThieuXuatChuong")}
            />
            {errors.tuoiToiThieuXuatChuong && <InlineError text={errors.tuoiToiThieuXuatChuong.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Maximum Age Export'
              value={parameters[0]?.tuoiToiDaXuatChuong}
              type='number'
              register={register("tuoiToiDaXuatChuong")}
            />
            {errors.tuoiToiDaXuatChuong && <InlineError text={errors.tuoiToiDaXuatChuong.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Age Piglet'
              value={parameters[0]?.tuoiNhapDanHeoCon}
              type='number'
              register={register("tuoiNhapDanHeoCon")}
            />
            {errors.tuoiNhapDanHeoCon && <InlineError text={errors.tuoiNhapDanHeoCon.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Blood Mating'
              value={parameters[0]?.giaoPhoiCanHuyetToiThieu}
              type='number'
              register={register("giaoPhoiCanHuyetToiThieu")}
            />
            {errors.giaoPhoiCanHuyetToiThieu && <InlineError text={errors.giaoPhoiCanHuyetToiThieu.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Age Mating Boar'
              value={parameters[0]?.tuoiPhoiGiongToiThieuHeoDuc}
              type='number'
              register={register("tuoiPhoiGiongToiThieuHeoDuc")}
            />
            {errors.tuoiPhoiGiongToiThieuHeoDuc && <InlineError text={errors.tuoiPhoiGiongToiThieuHeoDuc.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Age Mating Sow'
              value={parameters[0]?.tuoiPhoiGiongToiThieuHeoCai}
              type='number'
              register={register("tuoiPhoiGiongToiThieuHeoCai")}
            />
            {errors.tuoiPhoiGiongToiThieuHeoCai && <InlineError text={errors.tuoiPhoiGiongToiThieuHeoCai.message}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label='Minimum Days Mating Again'
              value={parameters[0]?.soNgayToiThieuPhoiGiongLai}
              type='number'
              register={register("soNgayToiThieuPhoiGiongLai")}
            />
            {errors.soNgayToiThieuPhoiGiongLai && <InlineError text={errors.soNgayToiThieuPhoiGiongLai.message}></InlineError>}
          </div>
          <div className='flex justify-start items-start w-full'>
            <button className='button-submit'
              onClick={handleSubmit(onsubmit)}
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
