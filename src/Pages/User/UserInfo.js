import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { getListFeedScheduleByUserAction } from '../../Redux/Actions/FeedScheduleActions';
import { getPregnancyScheduleByUserAction } from '../../Redux/Actions/PregnancyScheduleActions';
import { get } from 'react-hook-form';
import { getVaccineScheduleByUserAction } from '../../Redux/Actions/VaccineScheduleActions';
import { DateTimeInput2, Select2 } from '../../components/Input';
import TableVaccine from '../../components/TableVaccine';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TablePregnancy from '../../components/TablePregnancy';

export default function UserInfo() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { feedSchedules } = useSelector(state => state.getFeedScheduleByUser);
  const { pregnancySchedules } = useSelector(state => state.getPregnancyScheduleByUser);
  const { vaccineSchedules } = useSelector(state => state.getVaccineScheduleByUser);
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredVaccineSchedule, setfilteredVaccineSchedule] = useState([]);
  const [selectedState, setSelectedState] = useState('all');
  const [rowPerPage, setRowPerPage] = useState(5);
  const [search, setSearch] = useState('');

  const [rowPerPagePregnancy, setRowPerPagePregnancy] = useState(5);
  const [selectedStatePregnancy, setSelectedStatePregnancy] = useState('all');

  const [searchPregnancy, setSearchPregnancy] = useState('');
  const [datePregnancy, setDatePregnancy] = useState('');
  const [currentPagePregnancy, setCurrentPagePregnancy] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredPregnancySchedule, setfilteredPregnancySchedule] = useState([]);


  const options = [
    {
      value: 'all',
      title: 'All'
    },
    {
      value: 'Waiting',
      title: 'Waiting'
    },
    {
      value: 'Completed',
      title: 'Completed'
    }
  ]
  function areDatesEqual(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  const optionsPregnancy = [
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
  useEffect(() => {
    let filteredSchedule = vaccineSchedules;

    if (date) {
      filteredSchedule = vaccineSchedules.filter((pig) => areDatesEqual(pig.ngayTiem, date));
    }

    if (selectedState === 'Waiting') {
      filteredSchedule = vaccineSchedules.filter((pig) => pig.tinhTrang === 'Not completed');
    } else if (selectedState === 'Completed') {
      filteredSchedule = vaccineSchedules.filter((pig) => pig.tinhTrang === 'Completed');
    }

    if (search.trim().length > 0) {
      filteredSchedule = vaccineSchedules.filter((pig) => pig.maLichTiem.toLowerCase().includes(search.toLowerCase()));
    }

    setfilteredVaccineSchedule(filteredSchedule);
  }, [date, vaccineSchedules, selectedState, search]);
  const refreshTable = () => {
    const id = location.pathname.split('/')[2]
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getVaccineScheduleByUserAction(farmID, id));
  }
  const indexOfLastPig = currentPage * rowPerPage;
  const indexOfFirstPig = indexOfLastPig - rowPerPage;
  const currentSchedule = filteredVaccineSchedule.slice(indexOfFirstPig, indexOfLastPig);

  useEffect(() => {
    const id = location.pathname.split('/')[2]
    console.log(id);
    const farmID = JSON.parse(localStorage.getItem('farmID'));

    dispatch(getListFeedScheduleByUserAction(farmID, id));
    dispatch(getPregnancyScheduleByUserAction(farmID, id));
    dispatch(getVaccineScheduleByUserAction(farmID, id));

    console.log(feedSchedules);
    console.log(pregnancySchedules);
    console.log(vaccineSchedules);
  }, [])
  const [selectedTab, setSelectedTab] = useState('History Injection');
  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleRightLick = () => {
    if (currentPage < Math.ceil(filteredVaccineSchedule.length / rowPerPage)) {
      setCurrentPage(currentPage + 1);
    }
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

  const refreshDataPregnancy = () => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    const id = location.pathname.split('/')[2]

    dispatch(getPregnancyScheduleByUserAction(farmID, id));

  }
  // Trang thai: 0 - Dang doi dau thai | 1 - Da dau thai | 2 - That bai | 3 - Da de | 4 - De that bai
  const indexOfLastPigPregnancy = currentPagePregnancy * rowPerPagePregnancy;
  const indexOfFirstPigPregnancy = indexOfLastPigPregnancy - rowPerPagePregnancy;
  const currentSchedulePregnancy = filteredPregnancySchedule.slice(indexOfFirstPigPregnancy, indexOfLastPigPregnancy);

  return (
    <div className='h-full w-full flex flex-col gap-6'>
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className='text-lg font-semibold text-textprimary'>User Management</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <NavLink to='/user' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>User Overview</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>User Overview</span>
          </div>
        </div>
      </div>
      {/* Contents */}
      <div className='flex flex-col gap-2 shadow py-6 rounded-xl'>

        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} setSelectedState={setSelectedState} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Vaccine Date"} setDate={setDate} />
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
          <span className='font-medium text-textprimary text-xs'>{filteredVaccineSchedule.length} </span>
          <span className='font-normal text-textdisable text-xs'>results for found</span>
        </div>

        {/* Table */}
        <div className='items-center justify-center flex w-full'>
          <TableVaccine data={currentSchedule} refreshTable={refreshTable} />
        </div>
        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
          <span>Row per page: </span>
          <select className='outline-none' value={rowPerPage} onChange={(e) => setRowPerPage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>{indexOfFirstPig + 1}-{indexOfLastPig > filteredVaccineSchedule.length ? filteredVaccineSchedule.length : indexOfLastPig}</span>
          <span>of</span>
          <span>{filteredVaccineSchedule.length}</span>
          <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClick} />
          <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightLick} />
        </div>
      </div>

      <div className='flex flex-col gap-2 shadow py-6 rounded-xl'>
        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={optionsPregnancy} setSelectedState={setSelectedStatePregnancy} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Date Imported"} setDate={setDatePregnancy} />
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
          <TablePregnancy data={currentSchedulePregnancy} refreshData={refreshDataPregnancy} />
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
