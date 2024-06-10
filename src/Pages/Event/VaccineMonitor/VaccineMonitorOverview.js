import React, { useState } from 'react'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { DateTimeInput2, Select2 } from '../../../components/Input';
import TablePregnancy from '../../../components/TablePregnancy';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TableVaccine from '../../../components/TableVaccine';
import { UserRoundIcon } from 'lucide-react';
import VaccineModal from '../../../components/Modal/VaccineModal';

function VaccineMonitorOverview() {
  const [rowPerPage, setRowPerPage] = useState(5);
  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');
  const [search, setSearch] = useState('');

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

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

  const data = [
    {
      MaLichTiem: '1',
      NgayTiem: '2021-10-10',
      MaHangHoa: 'Vaccine1',
      LieuLuong: '1',
      UserID: 'UserID001',
      TinhTrang: '0',
      FarmID: 'FarmID001',
      MaHeo: 'Pig002',
    },
    {
      MaLichTiem: '2',
      NgayTiem: '2022-10-10',
      MaHangHoa: 'Vaccine1',
      LieuLuong: '2',
      UserID: 'UserID002',
      TinhTrang: '0',
      FarmID: 'FarmID001',
      MaHeo: 'Pig002',
    },
    {
      MaLichTiem: '3',
      NgayTiem: '2021-10-10',
      MaHangHoa: 'Vaccine1',
      LieuLuong: '1',
      UserID: 'UserID002',
      TinhTrang: '1',
      FarmID: 'FarmID001',
      MaHeo: 'Pig002',
    },
    {
      MaLichTiem: '4',
      NgayTiem: '2021-10-10',
      MaHangHoa: 'Vaccine3',
      LieuLuong: '1',
      UserID: 'UserID002',
      TinhTrang: '0',
      FarmID: 'FarmID001',
      MaHeo: 'Pig002',
    },
    {
      MaLichTiem: '5',
      NgayTiem: '2021-10-10',
      MaHangHoa: 'Vaccine1',
      LieuLuong: '1',
      UserID: 'UserID001',
      TinhTrang: '0',
      FarmID: 'FarmID001',
      MaHeo: 'Pig001',
    },
  ]
  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Vaccine Monitor Overview</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Vaccine Monitor Overview</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <button className='button-submit w-24' onClick={() => setModalAddOpen(true)}>
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </button>
        </div>
      </div>
      {/* Table */}
      <div className='flex flex-col gap-2 shadow py-2 rounded-xl'>

        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Vaccine Date"} />
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
          <TableVaccine data={data} />
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

      <VaccineModal isvisible={modalAddOpen} onClose={() => setModalAddOpen(false)} name='Add New Vaccine' />
    </div>
  )
}

export default VaccineMonitorOverview