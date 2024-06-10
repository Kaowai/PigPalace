import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { DateTimeInput2, Select2 } from '../../../components/Input';
import TableInventory from '../../../components/TableInventory';
import TablePregnancy from '../../../components/TablePregnancy';

function PregnancyOverview() {
  const [rowPerPage, setRowPerPage] = useState(5);
  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');
  const [search, setSearch] = useState('');
  const options = [
    {
      value: 'all',
      title: 'All'
    },
    {
      value: 'Food',
      title: 'Food'
    },
    {
      value: 'Vaccine',
      title: 'Vaccine'
    }
  ]

  const handleLeftClick = () => {

  }
  const handleRightLick = () => {

  }

  // Trang thai: 0 - Dang doi dau thai | 1 - Da dau thai | 2 - That bai | 3 - Da de | 4 - De that bai
  const data = [
    {
      MaLich: '1',
      MaHeoNai: 'HN001',
      MaHeoDuc: 'HD001',
      NgayPhoi: '2021-10-10',
      NgayDeDuKien: '2022-10-10',
      NgayDauThai: '2022-10-10',
      NgayDeChinhThuc: '2022-10-10',
      UserID: 'UserID001',
      TrangThai: '0',
      GhiChu: '',
      LoaiPhoiGiong: 'Mating',
      MaGiongHeoDuc: 'Breeding1',
      SoHeoCai: 0,
      SoHeoDuc: 0,
      SoHeoChet: 0,
      SoHeoTat: 0,
      NguyenNhanThatBai: '',
      CachGiaiQuyet: '',
      GhiChuTaiSaoThatBai: '',
      FarmID: 'FarmID001',
    },
    {
      MaLich: '2',
      MaHeoNai: 'HN001',
      MaHeoDuc: 'HD001',
      NgayPhoi: '2021-10-10',
      NgayDeDuKien: '2022-10-10',
      NgayDauThai: '2022-10-10',
      NgayDeChinhThuc: '2022-10-10',
      UserID: 'UserID001',
      TrangThai: '1',
      GhiChu: '',
      LoaiPhoiGiong: 'Mating',
      MaGiongHeoDuc: 'Breeding1',
      SoHeoCai: 0,
      SoHeoDuc: 0,
      SoHeoChet: 0,
      SoHeoTat: 0,
      NguyenNhanThatBai: '',
      CachGiaiQuyet: '',
      GhiChuTaiSaoThatBai: '',
      FarmID: 'FarmID001',
    },
    {
      MaLich: '3',
      MaHeoNai: 'HN001',
      MaHeoDuc: 'HD001',
      NgayPhoi: '2021-10-10',
      NgayDeDuKien: '2022-10-10',
      NgayDauThai: '2022-10-10',
      NgayDeChinhThuc: '2022-10-10',
      UserID: 'UserID001',
      TrangThai: '2',
      GhiChu: '',
      LoaiPhoiGiong: 'Mating',
      MaGiongHeoDuc: 'Breeding1',
      SoHeoCai: 0,
      SoHeoDuc: 0,
      SoHeoChet: 0,
      SoHeoTat: 0,
      NguyenNhanThatBai: '',
      CachGiaiQuyet: '',
      GhiChuTaiSaoThatBai: '',
      FarmID: 'FarmID001',
    },
    {
      MaLich: '4',
      MaHeoNai: 'HN001',
      MaHeoDuc: 'HD001',
      NgayPhoi: '2021-10-10',
      NgayDeDuKien: '2022-10-10',
      NgayDauThai: '2022-10-10',
      NgayDeChinhThuc: '2022-10-10',
      UserID: 'UserID001',
      TrangThai: '3',
      GhiChu: '',
      LoaiPhoiGiong: 'Mating',
      MaGiongHeoDuc: 'Breeding1',
      SoHeoCai: 0,
      SoHeoDuc: 0,
      SoHeoChet: 0,
      SoHeoTat: 0,
      NguyenNhanThatBai: '',
      CachGiaiQuyet: '',
      GhiChuTaiSaoThatBai: '',
      FarmID: 'FarmID001',
    },
    {
      MaLich: '5',
      MaHeoNai: 'HN001',
      MaHeoDuc: 'HD001',
      NgayPhoi: '2021-10-10',
      NgayDeDuKien: '2022-10-10',
      NgayDauThai: '2022-10-10',
      NgayDeChinhThuc: '2022-10-10',
      UserID: 'UserID001',
      TrangThai: '4',
      GhiChu: '',
      LoaiPhoiGiong: 'Mating',
      MaGiongHeoDuc: 'Breeding1',
      SoHeoCai: 0,
      SoHeoDuc: 0,
      SoHeoChet: 0,
      SoHeoTat: 0,
      NguyenNhanThatBai: '',
      CachGiaiQuyet: '',
      GhiChuTaiSaoThatBai: '',
      FarmID: 'FarmID001',
    },
  ]

  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Pregnancy Overview</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Pregnancy Overview</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <NavLink className='button-submit w-24'
            to={'/Events/PregnancyMonitor/PregnancyOverview/PregnancyAdd'}
          >
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </NavLink>
        </div>
      </div>
      {/* Table */}
      <div className='flex flex-col gap-2 shadow py-2 rounded-xl'>

        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Date Imported"} />
          </div>
          <div className='flex flex-row gap-2 text-xs items-center font-normal h-10 w-64 border border-secondary30 rounded-lg pl-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 transition-all duration-200 ease-in-out'>
            <IoSearchOutline size={20} className='text-textdisable' />
            <input
              type='text'
              placeholder='Search...'
              className='outline-none text-textprimary text-xs font-normal items-start text-wrap'
              onChange={(e) => { setSearch(e.target.value); console.log(e.target.value) }}>
            </input>
          </div>
        </div>
        <div className='flex justify-start px-4 gap-1 items-center'>
          <span className='font-medium text-textprimary text-xs'>8 </span>
          <span className='font-normal text-textdisable text-xs'>results for found</span>
        </div>

        {/* Table */}
        <div className='items-center justify-center flex w-full'>
          <TablePregnancy data={data} />
        </div>
        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
          <span>Row per page: </span>
          <select className='outline-none' onChange={(e) => setRowPerPage(e.target.value)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
          <span>6-10</span>
          <span>of</span>
          <span>11</span>
          <FaAngleLeft size={12} className='text-textdisable' onClick={() => handleLeftClick} />
          <FaAngleRight size={12} className='text-textprimary' onClick={() => handleRightLick} />
        </div>
      </div>
    </div>
  )
}

export default PregnancyOverview