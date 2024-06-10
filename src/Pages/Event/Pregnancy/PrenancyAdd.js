import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { DateTimeInput, MessageInput, Select1 } from '../../../components/Input'

function PrenancyAdd() {

  const dataPig = [
    { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
    { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
    { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
    { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '0', IsThuanChung: '' },
    { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '0', IsThuanChung: '' },
  ]
  const dataBreed = [
    {
      MaGiongHeo: 'Breed01', TenGiongHeo: 'Berkshire', MoTa: 'Pig from Australia', FarmID: 'F01'
    },
    {
      MaGiongHeo: 'Breed02', TenGiongHeo: 'Yorkshire', MoTa: 'Pig from England', FarmID: 'F01'
    },
    {
      MaGiongHeo: 'Breed03', TenGiongHeo: 'Duroc', MoTa: 'Pig from USA', FarmID: 'F01'
    }
  ]
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
              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Select sow/Gilt: *</label>
                  <select
                    placeholder={"Select feed..."}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    {dataPig.map((option, index) => {
                      return (
                        option.GioiTinh === '1' && <option key={index} value={option.ID}>{option.MaHeo}</option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Sow Breed: *</label>
                  <select
                    placeholder={"Select feed..."}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    {dataBreed.map((option, index) => {
                      return (
                        <option key={index} value={option.MaGiongHeo}>{option.TenGiongHeo}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className={`w-full`}>
                <DateTimeInput
                  label="Crossing Date: *"
                  placeholder="dd-MM-YYYY"
                  type="text"
                  bg={true}
                  name="year"
                />
              </div>
              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Type of Crossing: *</label>
                  <select
                    placeholder={"Select feed..."}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    <option value={"Mating"}>Mating</option>
                    <option value={"Insemination"}>Insemination</option>
                  </select>
                </div>
              </div>
              <div>
                <MessageInput
                  label="Note: *"
                  placeholder="Type your note here..."
                  type="text"
                  bg={true}
                  name="note"
                />
              </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <div className='w-full px-6 py-4 flex flex-col justify-center items-center gap-2 border rounded border-primary_main'>
                  <span className='text-base font-semibold text-primary_main'>August 23rd 2024</span>
                  <span className='text-xs font-normal text-textprimary'>Predict the date of birth (115 days of gestation)</span>
              </div>


              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Select Boar: *</label>
                  <select
                    placeholder={"Select feed..."}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    {dataPig.map((option, index) => {
                      return (
                        option.GioiTinh === '0' && <option key={index} value={option.ID}>{option.TenHangHoa}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className='w-full flex flex-row gap-5'>
                <div className="text-xs w-full relative">
                  <label className="text-secondary60 font-semibold text-xs">Boar Breed: *</label>
                  <select
                    placeholder={"Select feed..."}
                    className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                    {dataBreed.map((option, index) => {
                      return (
                        <option key={index} value={option.MaGiongHeo}>{option.TenGiongHeo}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full flex flex-row gap-2  py-2'>
              <button className='button-submit-3'>
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