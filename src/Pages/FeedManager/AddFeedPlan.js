import { Link, Table2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Dropdown, { DateTimeInput, Input2, MessageInput, MultiSelect, Select1 } from '../../components/Input'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { set, useForm } from 'react-hook-form';
import { InlineError } from '../../Notifications/Error';
import { createFeedSchedule1DateAction, getListFoodAction } from '../../Redux/Actions/FeedScheduleActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { FeedScheduleValidation } from '../../Validation/PigValidation';
import { DatePicker, Select } from 'antd'
import { convertToDateTime } from '../../Functionalities/GlobalFunctions';
import { createFeedSchedule1DateService, createFeedScheduleManyDateService } from '../../Redux/APIs/FeedScheduleService';
import toast from 'react-hot-toast';

export default function AddFeedPlan() {
  const [selectedPlan, setSelectedPlan] = useState('Single');
  const navigate = useNavigate();
  const [timeForDay, setTimeForDay] = useState('1 time/day');
  const dispatch = useDispatch();
  const [barnInfo, setBarnInfo] = useState([]);
  const { barns } = useSelector(state => state.barnGetAll);
  const [dateStart, setDateStart] = useState('');
  const [isErrorDateStart, setIsErrorDateStart] = useState(false);
  const [dateEnd, setDateEnd] = useState('');
  const [isErrorDateEnd, setIsErrorDateEnd] = useState(false);
  const { feeds } = useSelector(state => state.getAllFood);
  const [quantity, setQuantity] = useState('');
  const [hourForEachFeeding, setHourForEachFeeding] = useState('1:00');
  const [listBarn, setListBarn] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(FeedScheduleValidation)
  });

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllBarnAction(farmID));
    const listBarn = barns?.map((barn) => {
      return {
        value: barn.maChuong,
        label: barn.ghiChu
      }
    })
    setBarnInfo(listBarn);
    dispatch(getListFoodAction(farmID));
    console.log(feeds);
  }, []);


  const optionsTime = [
    "1 time/day",
    "2 times/day",
    "3 times/day",
    "4 times/day"
  ]
  const optionsTimeFirst = [
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
  ]
  const optionsTimeEach = [
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
  ]
  const handleChange = (value) => {
    const listBarnObject = value?.map((barn) => {
      return {
        maChuong: barn,
      }
    });
    setListBarn(listBarnObject);
    console.log(listBarnObject);
  };

  const onSubmit = async (data) => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    const userID = JSON.parse(localStorage.getItem('userID2'))
    if (listBarn.length === 0) {
      return;
    }
    if (selectedPlan === 'Single') {
      if (!dateStart) {
        setIsErrorDateStart(true);
        return;
      }
      setIsErrorDateStart(false);
      const reqData = {
        farmID,
        userID,
        ngayBatDau: (dateStart + "T" + data.firstFeedingTime.replace(" AM", "") + ":00.000Z"),
        thoiGianCachNhauMoiLanChoAn: (dateStart + "T" + hourForEachFeeding + ":00.000Z"),
        maHangHoa: data.maHangHoa,
        soLuongCho1ConHeo1Ngay: data.soLuongCho1ConHeo1Ngay,
        soLanChoAnMoiNgay: timeForDay === '1 time/day' ? 1 : timeForDay === '2 times/day' ? 2 : timeForDay === '3 times/day' ? 3 : 4,
        listChuongHeoChoAn: listBarn
      }
      try {
        const response = await createFeedSchedule1DateService(reqData);
        if (!response) {
          toast.success('Create feed plan successfully');
          navigate('/FeedManager/FeedPlan');
        } else {
          toast.error(response.response.data);
        }
      } catch (error) {
        console.log(error);
      }
      // handle 1 day plan
    } else {
      if (!dateStart) {
        setIsErrorDateStart(true);
        return;
      }
      if (!dateEnd) {
        setIsErrorDateEnd(true);
        return;
      }
      setIsErrorDateStart(false);
      if (!dateEnd) {
        setIsErrorDateEnd(true);
        return;
      }
      setIsErrorDateEnd(false);
      // handle multiple day plan
      const reqData = {
        farmID,
        userID,
        ngayBatDau: (dateStart + "T" + data.firstFeedingTime.replace(" AM", "") + ":00.000Z"),
        ngayKetThuc: (dateEnd + "T" + data.firstFeedingTime.replace(" AM", "") + ":00.000Z"),
        thoiGianCachNhauMoiLanChoAn: (dateStart + "T" + hourForEachFeeding + ":00.000Z"),
        maHangHoa: data.maHangHoa,
        soLuongCho1ConHeo1Ngay: data.soLuongCho1ConHeo1Ngay,
        soLanChoAnMoiNgay: timeForDay === '1 time/day' ? 1 : timeForDay === '2 times/day' ? 2 : timeForDay === '3 times/day' ? 3 : 4,
        listChuongHeoChoAn: listBarn
      }
      try {
        const response = await createFeedScheduleManyDateService(reqData);
        if (!response) {
          toast.success('Create feed plan successfully');
          navigate('/FeedManager/FeedPlan');
        } else {
          toast.error(response.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

  }



  const handleCancel = () => {
    navigate('/FeedManager/FeedPlan')
  }
  return (
    <div className='h-full w-full flex flex-col gap-4'>

      <div className='flex flex-col w-full pr-4 justify-start items-start gap-2'>
        <h1 className='text-2xl font-semibold text-textprimary'>
          Add Feed Plan
        </h1>
        <div className='flex flex-row gap-3 text-xs items-center justify-end'>
          <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
          <span className='w-1 h-1 rounded-full bg-textdisable' />
          <NavLink to='/FeedManager/FeedPlan' className='hover:text-textprimary cursor-pointer transition-all duration-200 ease-in-out'>Feed Plan Schedule</NavLink>
          <span className='w-1 h-1 rounded-full bg-textdisable' />
          <span className='text-xs text-textprimary font-semibold'>Add Feed Plan</span>
        </div>
      </div>
      <div className='w-full md:px-28'>

        <div className='w-full items-center p-8 flex flex-col gap-5 shadow rounded-xl'>
          <div className='w-full flex flex-row gap-5 items-start col-span-2'>
            <div className='flex flex-row justify-start items-center gap-2'>
              <input type='radio' id='single' name='Feed Plan' value='Single' checked={selectedPlan === 'Single'} onChange={(e) => setSelectedPlan(e.target.value)} />
              <label for='single' className='text-xs text-textprimary font-semibold'>Single day plan</label>
            </div>
            <div className='flex flex-row justify-start items-center gap-2'>
              <input type='radio' id='multiple' name='Feed Plan' value='Multiple' checked={selectedPlan === 'Multiple'} onChange={(e) => setSelectedPlan(e.target.value)} />
              <label for='multiple' className='text-xs text-textprimary font-semibold'>Multiple day plan</label>
            </div>
          </div>
          <div className='w-full flex flex-row gap-5'>
            <div className=''>
              <DateTimeInput
                label="Start Date: *"
                placeholder="dd-MM-YYYY"
                type="text"
                bg={true}
                name="year"
                setDate={setDateStart}
                setError={setIsErrorDateStart}
              />
              {isErrorDateStart && <InlineError text={"Please enter a valid date"}></InlineError>}
            </div>
            <div className={` ${selectedPlan === 'Single' && "hidden"}`}>
              <DateTimeInput
                label="End Date: *"
                placeholder="dd-MM-YYYY"
                type="text"
                bg={true}
                setDate={setDateEnd}
                setError={setIsErrorDateEnd}
                name="year"
              />
              {isErrorDateEnd && <InlineError text={"Please enter a valid date"}></InlineError>}
            </div>
          </div>
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">Feed Name: *</label>
              <select
                placeholder={"Select feed..."}
                {...register('maHangHoa')}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {feeds?.map((option, index) => {
                  return (
                    <option key={index} value={option.id}>{option.tenHangHoa}</option>
                  )
                })}
              </select>
            </div>
            {errors.maHangHoa && <InlineError text={errors.maHangHoa.message}></InlineError>}
          </div>
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">Quantity for each pig per day: *</label>
              <div className={`w-full border mt-2  rounded py-2 px-2 focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500
            bg-white border-secondary30  flex flex-row h-8 items-center justify-center`}>
                <input
                  type="number"
                  placeholder=""
                  {...register('soLuongCho1ConHeo1Ngay')}
                  className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                />
                <span className="text-xs text-textprimary pr-2  border-textprimary">KG</span>
              </div>
            </div>
            {errors.soLuongCho1ConHeo1Ngay && <InlineError text={errors.soLuongCho1ConHeo1Ngay.message}></InlineError>}
          </div>
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">Times for each day: *</label>
              <select
                placeholder={"Select times..."}
                onChange={(e) => setTimeForDay(e.target.value)}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {optionsTime.map((option, index) => {
                  return (
                    <option key={index} value={option}>{option}</option>
                  )
                })}
              </select>
            </div>
          </div>
          {
            timeForDay != '1 time/day' && (
              <div className='w-full'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Times for each feeding: *</label>
                  <select
                    placeholder={"Select times..."}
                    onChange={(e) => setHourForEachFeeding(e.target.value)}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    {optionsTimeEach.map((option, index) => {
                      return (
                        <option key={index} value={option}>{option}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            )
          }
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">First feeding time of the day: *</label>
              <select
                placeholder={"Select time..."}
                {...register("firstFeedingTime")}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {optionsTimeFirst.map((option, index) => {
                  return (
                    <option key={index} value={option}>{option}</option>
                  )
                })}
              </select>
            </div>
            {errors.firstFeedingTime && <InlineError text={errors.firstFeedingTime.message}></InlineError>}
          </div>
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">{"Select barn"}</label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                className="mt-2"
                placeholder="Please select"
                onChange={handleChange}
                options={barnInfo}
              />
            </div>
            {listBarn.length === 0 && <InlineError text={"Please select at least one barn"}></InlineError>}
          </div>
          <div className='w-full '>
            <div className='w-full flex flex-row gap-2  py-2'>
              <button className='button-submit-3' onClick={handleSubmit(onSubmit)}>
                Submit
              </button>
              <button className='button-cancel' onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
