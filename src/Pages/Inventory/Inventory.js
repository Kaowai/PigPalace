import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { DateTimeInput2, Select2 } from '../../components/Input'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import TableInventory from '../../components/TableInventory'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../../Redux/Actions/ProductActions'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Inventory() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(state => state.productGetAll);

  const [rowPerPage, setRowPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');

  const [selectedState, setSelectedState] = useState('all');

  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredInvoicePigs, setFilteredInvoicePigs] = useState([]);

  useEffect(() => {

    const farm = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getProductAction(farm));
  }, [])

  const refreshInventory = () => {
    const farm = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getProductAction(farm));
  }

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

  useEffect(() => {
    let filteredInvoicePigs = products;

    if (date) {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => areDatesEqual(invoice.ngayLap, date));
    }

    if (selectedState === 'Food') {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.loaiHangHoa === 'Thức ăn');
    } else if (selectedState === 'Vaccine') {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.loaiHangHoa === 'Vắc xin');
    } else if (selectedState === 'Medicine') {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.loaiHangHoa === 'Thuốc');;
    }

    if (search.trim().length > 0) {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.maHoaDon.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredInvoicePigs(filteredInvoicePigs);
  }, [date, products, selectedState, search]);

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
    if (currentPage < Math.ceil(filteredInvoicePigs.length / rowPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPig = currentPage * rowPerPage;
  const indexOfFirstPig = indexOfLastPig - rowPerPage;
  const currentInvoicePigs = filteredInvoicePigs.slice(indexOfFirstPig, indexOfLastPig);
  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Inventory</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Inventory</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <NavLink className='button-submit w-24'
            to={'/Invoice/Expenses/ExpensesOverview'}
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
            <Select2 options={options} setSelectedState={setSelectedState} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} placeholder={"Date Imported"} setDate={setDate}/>
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
          <span className='font-medium text-textprimary text-xs'>{currentInvoicePigs?.length} </span>
          <span className='font-normal text-textdisable text-xs'>results for found</span>
        </div>

        {/* Table */}
        <div className='items-center justify-center flex w-full'>
        {loading ? <ClipLoader color='#3B82F6' loading={loading} size={25} className='m-auto items-center justify-center' /> : 
          <TableInventory data={currentInvoicePigs} refreshInventory={refreshInventory} />}
        </div>
        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
          <span>Row per page: </span>
          <select className='outline-none' value={rowPerPage} onChange={(e) => setRowPerPage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>{indexOfFirstPig + 1}-{indexOfLastPig > filteredInvoicePigs.length ? filteredInvoicePigs.length : indexOfLastPig}</span>
          <span>of</span>
          <span>{filteredInvoicePigs.length}</span>
          <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClick} />
          <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightClick} />
        </div>
      </div>
    </div>
  )
}
