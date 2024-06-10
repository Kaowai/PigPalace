import React, { useState } from 'react'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import TableFeedPlan from '../../components/TableFeedPlan'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { DateTimeInput2, Select2 } from '../../components/Input'

export default function FeedPlan() {

  const [rowPerPage, setRowPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const options = [
    {
      value: 'all',
      title: 'All'
    },
    {
      value: 'InFarm',
      title: 'In Farm'
    },
    {
      value: 'Exported',
      title: 'Exported'
    }
  ]

  const handleLeftClick = () => {

  }
  const handleRightLick = () => {
  }

  const feedPlan = [
    {
      ID: 'FP001',
      NgayChoAn: '2021-01-01',
      MaChuong: 'Barn01',
      MaHangHoa: 'Feed01',
      UserID: 'U001',
      TinhTrang: '1',
      LuongThucAn1Con: '2kg',
      FarmID: 'F01'
    },
    {
      ID: 'FP001',
      NgayChoAn: '2021-01-01',
      MaChuong: 'Barn01',
      MaHangHoa: 'Feed01',
      UserID: 'U001',
      TinhTrang: '0',
      LuongThucAn1Con: '2kg',
      FarmID: 'F01'
    },
    {
      ID: 'FP001',
      NgayChoAn: '2021-01-01',
      MaChuong: 'Barn01',
      MaHangHoa: 'Feed01',
      UserID: 'U001',
      TinhTrang: '0',
      LuongThucAn1Con: '2kg',
      FarmID: 'F01'
    },
    {
      ID: 'FP001',
      NgayChoAn: '2021-01-01',
      MaChuong: 'Barn01',
      MaHangHoa: 'Feed01',
      UserID: 'U001',
      TinhTrang: '1',
      LuongThucAn1Con: '2kg',
      FarmID: 'F01'
    },
    {
      ID: 'FP001',
      NgayChoAn: '2021-01-01',
      MaChuong: 'Barn01',
      MaHangHoa: 'Feed01',
      UserID: 'U001',
      TinhTrang: '0',
      LuongThucAn1Con: '2kg',
      FarmID: 'F01'
    },
  ]

  return (
    <div className='h-full w-full flex flex-col gap-6'>
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className=' text-lg font-semibold text-textprimary'>Feed Plan</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Feed Plan</span>
          </div>
        </div>
        <div className='flex place-items-end'>
          <Link className='text-xs text-white rounded-s bg-primary_main px-2 py-2 hover:bg-other20 transition-all duration-200 ease-in-out font-normal tracking-wide flex gap-1 whitespace-nowrap'
            to={'/FeedManager/FeedPlan/AddFeedPlan'}
          >
            Add Feed Schedule
          </Link>
          <Link className='text-xs text-white font-normal px-4 py-2 rounded-e  border-r bg-slate-400 hover:bg-slate-500 transition-all duration-200 ease-in-out whitespace-nowrap'
            to={'/FeedManager/TodayFeed'}
          >
            Today Feed Schedule
          </Link>
        </div>
      </div>



      {/* Content */}

      <div className='flex flex-row gap-2 shadow py-2 rounded-xl'>
        <div className='flex flex-col gap-4 items-start'>

          <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
            <div className='flex flex-row gap-2'>
              <Select2 options={options} />
            </div>
            <div className='flex flex-row gap-2'>
              <DateTimeInput2 options={options} placeholder="Feeding Date" />
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
          <div className='flex justify-start px-4 gap-1 items-start'>
            <span className='font-medium text-textprimary text-xs'>8 </span>
            <span className='font-normal text-textdisable text-xs'>results for found</span>
          </div>
          {/* Table */}
          <div className='items-center justify-center flex w-full'>
            <TableFeedPlan data={feedPlan} />
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
      </div >
    </div>
  )
}
