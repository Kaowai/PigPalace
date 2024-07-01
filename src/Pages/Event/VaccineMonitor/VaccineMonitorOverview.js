import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { DateTimeInput2, Select2 } from '../../../components/Input';
import TablePregnancy from '../../../components/TablePregnancy';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TableVaccine from '../../../components/TableVaccine';
import { UserRoundIcon } from 'lucide-react';
import VaccineModal from '../../../components/Modal/VaccineModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByFarmIDAction } from '../../../Redux/Actions/UserActions';
import { getALlVaccineScheduleAction } from '../../../Redux/Actions/VaccineScheduleActions';

function VaccineMonitorOverview() {
  const [rowPerPage, setRowPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredVaccineSchedule, setfilteredVaccineSchedule] = useState([]);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);


  const dispatch = useDispatch();


  const { vaccineSchedules } = useSelector(state => state.getAllVaccineSchedule);
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


  function areDatesEqual(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

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

  const refreshTable = () => { 
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getALlVaccineScheduleAction(farmID));
  }
  const indexOfLastPig = currentPage * rowPerPage;
  const indexOfFirstPig = indexOfLastPig - rowPerPage;
  const currentSchedule = filteredVaccineSchedule.slice(indexOfFirstPig, indexOfLastPig);
  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getALlVaccineScheduleAction(farmID));
  }, [])

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getALlVaccineScheduleAction(farmID));
  }, [dispatch, modalAddOpen])

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
      <div className='flex flex-col gap-2 shadow py-6 rounded-xl'>

        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} setSelectedState={setSelectedState}/>
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Vaccine Date"} setDate={setDate}/>
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
          <TableVaccine data={currentSchedule} refreshTable={refreshTable} isView={false}/>
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

      <VaccineModal isvisible={modalAddOpen} onClose={() => setModalAddOpen(false)} name='Add New Vaccine' />
    </div>
  )
}

export default VaccineMonitorOverview