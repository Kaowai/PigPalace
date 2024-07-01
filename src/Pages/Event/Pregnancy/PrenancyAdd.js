import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
import { DateTimeInput, Input2, MessageInput, Select1 } from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBarnAction } from '../../../Redux/Actions/BarnActions'
import { getPigBoarAction, getPigSowAction } from '../../../Redux/Actions/PigActions'
import { getBreedByFarmIDAction } from '../../../Redux/Actions/BreedActions'
import { calculateAge, dateAfter115Days, formatDate } from '../../../Functionalities/GlobalFunctions'
import { InlineError } from '../../../Notifications/Error'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PregnancyScheduleValidation } from '../../../Validation/PigValidation'
import { createPregnancyScheduleAction } from '../../../Redux/Actions/PregnancyScheduleActions'
import toast from 'react-hot-toast'
import { createPregnancyScheduleService } from '../../../Redux/APIs/PregnancyScheduleService'

function PrenancyAdd() {
  const dispatch = useDispatch();
  const { breedInfo } = useSelector(state => state.breedGetAllByFarmID);
  const { boars } = useSelector(state => state.getPigBoar);
  const { sows } = useSelector(state => state.getPigSow);


  // sows
  const [selectedSows, setSelectedSows] = useState('');

  // boars
  const [selectedBoars, setSelectedBoars] = useState('');

  const [selectedSowsBreed, setSelectedSowsBreed] = useState('');
  const [selectedBoarsBreed, setSelectedBoarsBreed] = useState('');

  const [maLich, setMaLich] = useState('');
  const [typeOfCrossing, setTypeOfCrossing] = useState('Mating');
  const [date, setDate] = useState('');

  const [isError, setIsError] = useState(false);
  const [breedBoars, setBreedBoars] = useState('');

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PregnancyScheduleValidation)
  });

  const createRadomIDPig = () => {
    const random = Math.floor(100000 + Math.random() * 900000).toString();
    setMaLich(random);
    return random;
  }
  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getBreedByFarmIDAction(farmID));
    dispatch(getPigBoarAction(farmID));
    dispatch(getPigSowAction(farmID));

    console.log(breedInfo);
    console.log(boars);
    console.log(sows);
    createRadomIDPig();
  }, [dispatch])

  const handleSelectSows = (e) => {
    setSelectedSows(e);
    const maGiongHeo = sows?.find((sow) => sow.maHeo === e)?.maGiongHeo;
    if (maGiongHeo) {
      setSelectedSowsBreed(breedInfo?.find((breed) => breed.maGiongHeo === maGiongHeo)?.tenGiongHeo);
    } else {
      setSelectedSowsBreed('');
    }
  }
  const handleSelectBoars = (e) => {
    setSelectedBoars(e);
    const maGiongHeo = boars?.find((sow) => sow.maHeo === e)?.maGiongHeo;
    if (maGiongHeo) {
      setSelectedBoarsBreed(breedInfo?.find((breed) => breed.maGiongHeo === maGiongHeo)?.tenGiongHeo);
    } else {
      setSelectedBoarsBreed('');
    }
  }

  useEffect(() => {
    if (typeOfCrossing === 'Mating') {
      if (selectedBoars === 'Select ...') {
        setBreedBoars('');
        setSelectedBoars('');
      } else {

      }
      setSelectedBoarsBreed('');
    } else {
      setBreedBoars('1');
    }
  }, [typeOfCrossing]);

  const onSubmit = async (data) => {
    if (date === '') {
      setIsError(true);
      return;
    }
    if (selectedSows === 'Select...') {
      return;
    }
    if (selectedBoars === 'Select ...') {
      return;
    }
    if (!selectedSows) {
      return;
    }
    if (!selectedBoars) {
      return;
    }
    const userID = JSON.parse(localStorage.getItem('userID2'));
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    const ghiChu = data.ghiChu;
    if (typeOfCrossing === 'Insemination') {
      const data = ({
        maLich: maLich,
        maHeoNai: selectedSows,
        ngayPhoi: date,
        userID: userID,
        farmID: farmID,
        ghiChu: ghiChu,
        loaiPhoiGiong: typeOfCrossing,
        maGiongHeoDuc: breedBoars
      });
      console.log(data);
      const response = await createPregnancyScheduleService(data);
      console.log(response);
      if (!response) {
        toast.success('Create pregnanacy successfully');
        navigate('/Events/PregnancyMonitor/PregnancyOverview');
        return;
      }
      else {
        toast.error(response.response.data);
      }

    } else {
      const maGiongHeoDuc = breedInfo.find((breed) => breed.tenGiongHeo === selectedBoarsBreed)?.maGiongHeo;
      const data = ({
        maLich: maLich,
        maHeoNai: selectedSows,
        maHeoDuc: selectedBoars,
        ngayPhoi: date,
        userID: userID,
        farmID: farmID,
        ghiChu: ghiChu,
        loaiPhoiGiong: typeOfCrossing,
        maGiongHeoDuc: maGiongHeoDuc
      });

      console.log(data);
      try {
        const response = await createPregnancyScheduleService(data);
        console.log(response);
        if (!response) {
          toast.success('Create pregnancy successfully');
          navigate('/Events/PregnancyMonitor/PregnancyOverview');
          return;
        }
        else {
          toast.error(response.response.data);
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Add Pregnancy</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <NavLink to='/Events/PregnancyMonitor/PregnancyOverview' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Pregnancy Overview</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Add Pregnancy</span>
          </div>
        </div>
      </div>
      <div className='w-full md:px-28'>
        <div className='w-full items-center p-8 flex flex-col gap-5 shadow rounded-xl'>
          <div className='flex flex-row gap-5 w-full'>
            <div className='flex flex-col gap-5 w-full'>
              <div className='w-full'>
                <Input2
                  label='ID: *'
                  type='text'
                  disabled={true}
                  value={maLich}
                />
              </div>

              <div className='w-full'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Select Sow/Gilt: *</label>
                  <select
                    placeholder={"Select feed..."}
                    onChange={(e) => handleSelectSows(e.target.value)}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    <option value={''}>Select...</option>
                    {
                      sows?.map((option, index) => {
                        return (
                          <option key={index} value={option.maHeo}>{option.maHeo} - {option.isThuanChung ? 'Full Breed' : 'Normal'} - {calculateAge(option?.ngaySinh)} Months</option>
                        )
                      })
                    }
                  </select>
                </div>
                {!selectedSows && <InlineError text={'Please select sows'}></InlineError>}
              </div>

              <div className='w-full'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Sow Breed: *</label>
                  <input
                    placeholder={"Select feed..."}
                    disabled
                    value={selectedSowsBreed}
                    className={`w-full text-xs  border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none ${selectedSowsBreed !== '' && ' font-semibold'}`} >
                  </input>
                </div>
              </div>
              <div className={`w-full`}>
                <DateTimeInput
                  label="Crossing Date: *"
                  placeholder="dd-MM-YYYY"
                  type="text"
                  bg={true}
                  name="year"
                  setDate={setDate}
                  setError={setIsError}
                />
                {isError && <InlineError text="Please enter a valid date" />}
              </div>
              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Type of Crossing: *</label>
                  <select
                    placeholder={"Select sows..."}
                    onChange={(e) => setTypeOfCrossing(e.target.value)}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    <option value={"Mating"}>Mating</option>
                    <option value={"Insemination"}>Insemination</option>
                  </select>
                </div>
              </div>
              <div className='w-full'>
                <MessageInput
                  isShort={true}
                  label="Note: *"
                  register={register("ghiChu")}
                  placeholder="Type your note here..."
                  type="text"
                  bg={true}
                  name="note"
                />
                {errors.ghiChu && <InlineError text={errors.ghiChu.message}></InlineError>}
              </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <div className='w-full px-6 py-4 flex flex-col justify-center items-center gap-2 border rounded border-primary_main'>
                <span className='text-base font-semibold text-primary_main'>{date === '' ? '...' : dateAfter115Days(date)}</span>
                <span className='text-xs font-normal text-textprimary'>Predict the date of birth (115 days of gestation)</span>
              </div>


              <div className={`w-full ${typeOfCrossing === 'Insemination' && 'hidden'}`}>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Select Boar: *</label>
                  <select
                    placeholder={"Select feed..."}

                    onChange={(e) => handleSelectBoars(e.target.value)}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    <option>Select ...</option>
                    {boars?.map((option, index) => {
                      return (
                        <option key={index} value={option.maHeo}>{option.maHeo} - {option.isThuanChung ? 'Full Breed' : 'Normal'} - {calculateAge(option?.ngaySinh)} Months</option>
                      )
                    })}
                  </select>
                </div>
                {!selectedBoars && <InlineError text={'Please select boars'}></InlineError>}
              </div>
              <div className='w-full'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Boar Breed: *</label>
                  {
                    typeOfCrossing === 'Insemination' ? (
                      <select
                        onChange={(e) => { setSelectedBoarsBreed(e.target.value); setBreedBoars(e.target.value) }}
                        placeholder={"Select sows..."}
                        className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                        {
                          breedInfo?.map((option, index) => {
                            return (
                              <option key={index} value={option.maGiongHeo}>{option.tenGiongHeo}</option>
                            )
                          })
                        }
                      </select>
                    ) : (
                      <input
                        placeholder={"Select boars..."}
                        disabled
                        value={selectedBoarsBreed}
                        className={`w-full text-xs  border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none ${selectedBoarsBreed !== '' && ' font-semibold'}`} />
                    )
                  }

                </div>

                {!breedBoars && typeOfCrossing === 'Insemination' && <InlineError text={'Please select breed for boars'}></InlineError>}
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full flex flex-row gap-2  py-2'>
              <button className='button-submit-3' onClick={handleSubmit(onSubmit)}>
                Submit
              </button>
              <button className='button-cancel'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrenancyAdd