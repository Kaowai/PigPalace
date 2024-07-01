import React, { useEffect, useState } from 'react';
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { DateTimeInput2, Select2 } from '../../components/Input';
import Table from '../../components/Table';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import TablePig from '../../components/TablePig';
import { useDispatch, useSelector } from 'react-redux';
import { getPigAllAction } from '../../Redux/Actions/PigActions';

function PigManager() {
  const dispatch = useDispatch();
  const [rowPerPage, setRowPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredPigs, setFilteredPigs] = useState([]);
  const { loading, pigs, success, error } = useSelector(state => state.getAllPig);
  const options = [
    { value: 'all', title: 'All' },
    { value: 'InFarm', title: 'In Farm' },
    { value: 'Exported', title: 'Exported' }
  ];

  useEffect(() => {
    const FarmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getPigAllAction(FarmID));
  }, []);

  useEffect(() => {
    let filterPigs = pigs;

    if (date) {
      filterPigs = filterPigs.filter((pig) => areDatesEqual(pig.ngayDenTrangTrai, date));
    }

    if (selectedState === 'InFarm') {
      filterPigs = filterPigs.filter((pig) => pig.IsTrongTrangTrai === 1);
    } else if (selectedState === 'Exported') {
      filterPigs = filterPigs.filter((pig) => pig.IsTrongTrangTrai === 0);
    }

    if (search.trim().length > 0) {
      filterPigs = filterPigs.filter((pig) => pig.maHeo.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredPigs(filterPigs);
  }, [date, pigs, selectedState, search]);

  const refreshData = async () => { 
    const FarmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getPigAllAction(FarmID));
  }

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
  };

  const handleRightClick = () => {
    if (currentPage < Math.ceil(filteredPigs.length / rowPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPig = currentPage * rowPerPage;
  const indexOfFirstPig = indexOfLastPig - rowPerPage;
  const currentPigs = filteredPigs.slice(indexOfFirstPig, indexOfLastPig);

  return (
    <div className='h-full w-full flex flex-col gap-6'>
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className=' text-lg font-semibold text-textprimary'>Pig Manager</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Pig Manager</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <Link className='button-submit w-24'
            to={'/Invoice/Expenses/ExpensesOverview/ExpensesAddPig'}
          >
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-row gap-2 shadow py-6 rounded-xl'>
        <div className='flex flex-col gap-4 items-start '>
          <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
            <div className='flex flex-row gap-2'>
              <Select2 options={options} setSelectedState={setSelectedState} />
            </div>
            <div className='flex flex-row gap-2'>
              <DateTimeInput2 placeholder="Imported Date" setDate={setDate} />
            </div>
            <div className='flex flex-row gap-2 text-xs items-center font-normal h-10 w-64 border border-secondary30 rounded-lg pl-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 transition-all duration-200 ease-in-out'>
              <IoSearchOutline size={20} className='text-textdisable' />
              <input
                type='text'
                placeholder='Search...'
                className='outline-none text-textprimary text-xs font-normal items-start text-wrap'
                onChange={(e) => { setSearch(e.target.value); }}>
              </input>
            </div>
          </div>
          <div className='flex justify-start px-4 gap-1 items-start'>
            <span className='font-medium text-textprimary text-xs'>{filteredPigs.length} </span>
            <span className='font-normal text-textdisable text-xs'>results found</span>
          </div>

          {/* Table */}
          <div className='items-center justify-center flex w-full'>
            <TablePig data={currentPigs} refreshData={refreshData}/>
          </div>

          <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
            <span>Row per page: </span>
            <select className='outline-none' value={rowPerPage} onChange={(e) => setRowPerPage(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span>{indexOfFirstPig + 1}-{indexOfLastPig > filteredPigs.length ? filteredPigs.length : indexOfLastPig}</span>
            <span>of</span>
            <span>{filteredPigs.length}</span>
            <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClick} />
            <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightClick} />
          </div>
        </div>
      </div >
    </div>
  );
}

export default PigManager;
