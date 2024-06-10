import { Link, Table2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Dropdown, { DateTimeInput, Input2, MessageInput, MultiSelect, Select1 } from '../../components/Input'

export default function AddFeedPlan() {
  const [selectedPlan, setSelectedPlan] = useState('Single');
  const navigate = useNavigate();
  const [timeForDay, setTimeForDay] = useState('1 time/day');

  const optionsHour = [
    "1 hour",
    "2 hours",
    "3 hours",
    "4 hours",
    "5 hours",
    "6 hours",
  ]
  const optionsTime = [
    "1 time/day",
    "2 times/day",
    "3 times/day",
    "4 times/day"
  ]
  const optionsTimeFirst = [
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 AM",
  ]
  const optionsFeedName = [
    {
      ID: 1,
      TenHangHoa: 'Feed for Pig',
      TonKho: 100,
      GiaTriToiThieu: 10,
      TienMuaTrenMotDonVi: 1000,
      DonViTinh: 'Kg',
      NgayHetHan: '12-12-2022',
      FarmID: 'F001',
      LoaiHangHoa: 'Food',
    },
    {
      ID: 2,
      TenHangHoa: 'Feed for Pig 2',
      TonKho: 100,
      GiaTriToiThieu: 10,
      TienMuaTrenMotDonVi: 1000,
      DonViTinh: 'Kg',
      NgayHetHan: '12-12-2022',
      FarmID: 'F001',
      LoaiHangHoa: 'Food',
    },
    {
      ID: 3,
      TenHangHoa: 'Vaccine 1',
      TonKho: 100,
      GiaTriToiThieu: 10,
      TienMuaTrenMotDonVi: 1000,
      DonViTinh: 'Kg',
      NgayHetHan: '12-12-2022',
      FarmID: 'F001',
      LoaiHangHoa: 'Vaccine',
    },
    {
      ID: 4,
      TenHangHoa: 'Feed for Pig',
      TonKho: 100,
      GiaTriToiThieu: 10,
      TienMuaTrenMotDonVi: 1000,
      DonViTinh: 'Kg',
      NgayHetHan: '12-12-2022',
      FarmID: 'F001',
      LoaiHangHoa: 'Food',
    },
  ]

  const handleSubmit = () => { 
    navigate ('/FeedManager/FeedPlan')
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
              />
            </div>
            <div className={` ${selectedPlan === 'Single' && "hidden"}`}>
              <DateTimeInput
                label="End Date: *"
                placeholder="dd-MM-YYYY"
                type="text"
                bg={true}
                name="year"
              />
            </div>
          </div>
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">Feed Name: *</label>
              <select
                placeholder={"Select feed..."}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {optionsFeedName.map((option, index) => {
                  return (
                    <option key={index} value={option.ID}>{option.TenHangHoa}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='w-full'>
            <div className="text-xs w-1/4 relative">
              <label className="text-secondary60 font-semibold text-xs">Quantity for each pig per day: *</label>
              <div className={`w-full border mt-2  rounded py-2 px-2 focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500
            bg-white border-secondary30  flex flex-row h-8 items-center justify-center`}>


                <input
                  type="number"
                  placeholder=""
                  className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                />
                <span className="text-xs text-textprimary pr-2  border-textprimary">KG</span>
              </div>
            </div>
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
          <div className='w-full'>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">First feeding time of the day: *</label>
              <select
                placeholder={"Select time..."}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {optionsTimeFirst.map((option, index) => {
                  return (
                    <option key={index} value={option}>{option}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className={`w-full ${timeForDay === '1 time/day' && "hidden"}`}>
            <div className="text-xs w-full relative">
              <label className="text-secondary60 font-semibold text-xs">Hours difference each feeding: *</label>
              <select
                placeholder={"Select time..."}
                className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {optionsHour.map((option, index) => {
                  return (
                    <option key={index} value={option}>{option}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='w-full'>
            <MultiSelect
              label={"Select Pig Barns: *"}
              options={[
                { value: 'Pig Barn 1', label: 'Pig Barn 1' },
                { value: 'Pig Barn 2', label: 'Pig Barn 2' },
                { value: 'Pig Barn 3', label: 'Pig Barn 3' },
              ]}
            />
          </div>
          <div className='w-full '>
            <div className='w-full flex flex-row gap-2  py-2'>
              <button className='button-submit-3' onClick={handleSubmit}>
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
