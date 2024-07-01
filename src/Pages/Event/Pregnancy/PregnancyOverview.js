import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { DateTimeInput2, Select2 } from '../../../components/Input';
import TableInventory from '../../../components/TableInventory';
import TablePregnancy from '../../../components/TablePregnancy';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPregnancyScheduleAction } from '../../../Redux/Actions/PregnancyScheduleActions';
import ClipLoader from 'react-spinners/ClipLoader';

function PregnancyOverview() {
  const [rowPerPagePregnancy, setRowPerPagePregnancy] = useState(5);
  const [selectedStatePregnancy, setSelectedStatePregnancy] = useState('all');

  const [searchPregnancy, setSearchPregnancy] = useState('');
  const [datePregnancy, setDatePregnancy] = useState('');
  const [currentPagePregnancy, setCurrentPagePregnancy] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredPregnancySchedule, setfilteredPregnancySchedule] = useState([]);

  const { loading, pregnancySchedules } = useSelector(state => state.getAllPregnancySchedule);
  const dispatch = useDispatch();
  const options = [
    {
      value: 'all',
      title: 'All'
    },
    {
      value: 'Farrowing Successful',
      title: 'Farrowing Successful'
    },
    {
      value: 'Pregnancy Fail',
      title: 'Pregnancy Fail'
    },
    {
      value: 'Waiting Pregnancy',
      title: 'Waiting Pregnancy'
    },
    {
      value: 'Waiting Farrowing',
      title: 'Waiting Farrowing'
    },
    {
      value: 'Farrowing Fail',
      title: 'Farrowing Fail'
    }
  ]
  useEffect(() => {
    let filteredSchedule = pregnancySchedules;

    if (datePregnancy) {
      filteredSchedule = pregnancySchedules.filter((pig) => areDatesEqual(pig.ngayPhoi, datePregnancy));
    }

    if (selectedStatePregnancy === 'Farrowing Successful') {
      filteredSchedule = pregnancySchedules.filter((pig) => pig.trangThai === 'Farrowing Successful');
    } else if (selectedStatePregnancy === 'Pregnancy Fail') {
      filteredSchedule = pregnancySchedules.filter((pig) => pig.trangThai === 'Pregnancy Fail');
    } else if (selectedStatePregnancy === 'Waiting Pregnancy') {
      filteredSchedule = pregnancySchedules.filter((pig) => pig.trangThai === 'Waiting Pregnancy');
    } else if (selectedStatePregnancy === 'Waiting Farrowing') { 
      filteredSchedule = pregnancySchedules.filter((pig) => pig.trangThai === 'Waiting Farrowing');
    } else if (selectedStatePregnancy === 'Farrowing Fail') { 
      filteredSchedule = pregnancySchedules.filter((pig) => pig.trangThai === 'Farrowing Fail');
    } 
 
    if (searchPregnancy.trim().length > 0) {
      filteredSchedule = pregnancySchedules.filter((pig) => pig.maLich.toLowerCase().includes(searchPregnancy.toLowerCase()));
    }

    setfilteredPregnancySchedule(filteredSchedule);
  }, [datePregnancy, pregnancySchedules, selectedStatePregnancy, searchPregnancy]);


  function areDatesEqual(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  const handleLeftClickPregnancy = () => {
    if (currentPagePregnancy > 1) {
      setCurrentPagePregnancy(currentPagePregnancy - 1);
    }
  }
  const handleRightLickPregnancy = () => {
    if (currentPagePregnancy < Math.ceil(filteredPregnancySchedule.length / rowPerPagePregnancy)) {
      setCurrentPagePregnancy(currentPagePregnancy + 1);
    }
  }

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllPregnancyScheduleAction(farmID));
  }, [dispatch])

  const refreshData = () => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllPregnancyScheduleAction(farmID));
  }

  // Trang thai: 0 - Dang doi dau thai | 1 - Da dau thai | 2 - That bai | 3 - Da de | 4 - De that bai
  const indexOfLastPigPregnancy = currentPagePregnancy * rowPerPagePregnancy;
  const indexOfFirstPigPregnancy = indexOfLastPigPregnancy - rowPerPagePregnancy;
  const currentSchedulePregnancy = filteredPregnancySchedule.slice(indexOfFirstPigPregnancy, indexOfLastPigPregnancy);


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
      <div className='flex flex-col gap-2 shadow py-6 rounded-xl'>
        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} setSelectedState={setSelectedStatePregnancy}/>
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Date Imported"} setDate={setDatePregnancy}/>
          </div>
          <div className='flex flex-row gap-2 text-xs items-center font-normal h-10 w-64 border border-secondary30 rounded-lg pl-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 transition-all duration-200 ease-in-out'>
            <IoSearchOutline size={20} className='text-textdisable' />
            <input
              type='text'
              placeholder='Search...'
              className='outline-none text-textprimary text-xs font-normal items-start text-wrap'
              onChange={(e) => { setSearchPregnancy(e.target.value); console.log(e.target.value) }}>
            </input>
          </div>
        </div>
        <div className='flex justify-start px-4 gap-1 items-center'>
          <span className='font-medium text-textprimary text-xs'>{filteredPregnancySchedule?.length} </span>
          <span className='font-normal text-textdisable text-xs'>results for found</span>
        </div>

        {/* Table */}
        <div className='items-center justify-center flex w-full'>
        {loading ? <ClipLoader color='#3B82F6' loading={loading} size={25} className='m-auto items-center justify-center' /> : <TablePregnancy data={currentSchedulePregnancy} refreshData={refreshData} /> }
        </div>
        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
          <span>Row per page: </span>
          <select className='outline-none' value={rowPerPagePregnancy} onChange={(e) => setRowPerPagePregnancy(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>{indexOfFirstPigPregnancy + 1}-{indexOfLastPigPregnancy > filteredPregnancySchedule.length ? filteredPregnancySchedule.length : indexOfLastPigPregnancy}</span>
          <span>of</span>
          <span>{filteredPregnancySchedule.length}</span>
          <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClickPregnancy} />
          <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightLickPregnancy} />
        </div>
      </div>
    </div>
  )
}

export default PregnancyOverview