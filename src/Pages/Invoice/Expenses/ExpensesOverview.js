import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import { Link, NavLink } from 'react-router-dom'
import TableFarmExpenses from '../../../components/TableFarmExpenses';
import { IoAddCircleOutline, IoSearchOutline } from "react-icons/io5";
import { TbInvoice } from "react-icons/tb";
import { useSpring, animated } from 'react-spring';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { DateTimeInput2, Select2 } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getListInvoicePigImportAction } from '../../../Redux/Actions/InvoicePigActions';
import { getInvoiceProductAllAction } from '../../../Redux/Actions/InvoiceProductActions';
import { set } from 'react-hook-form';

const AnimatedNumber = ({ value }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const props = useSpring({
    number: isAnimated ? value : 0,
    from: { number: 0 },
    config: { duration: 2000 },
    reset: false,
  });

  useEffect(() => {
    setIsAnimated(true);
  }, [value]);

  return <animated.span>{props.number.to(n => n.toFixed(2))}</animated.span>;
};


export default function ExpensesOverview() {
  const dispatch = useDispatch();
  const { invoiceProducts } = useSelector(state => state.getInvoiceProduct);
  const { invoices } = useSelector(state => state.getListInvoicePigImport);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const [filteredInvoicePigs, setFilteredInvoicePigs] = useState([]);
  const options = [
    {
      value: 'all',
      title: 'All'
    },
    {
      value: 'Progress',
      title: 'Progress'
    },
    {
      value: 'Paid',
      title: 'Paid'
    }
  ]

  const handleRefresh = async () => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    await dispatch(getListInvoicePigImportAction(farmID));
    await dispatch(getInvoiceProductAllAction(farmID));
  }
  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getListInvoicePigImportAction(farmID));
    dispatch(getInvoiceProductAllAction(farmID));
  }, []);

  useEffect(() => {
    let filteredInvoicePigs = invoices;

    if (date) {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => areDatesEqual(invoice.ngayLap, date));
    }

    if (selectedState === 'Progress') {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.trangThai === 'Progress');
    } else if (selectedState === 'Paid') {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.trangThai === 'Paid');
    }

    if (search.trim().length > 0) {
      filteredInvoicePigs = filteredInvoicePigs.filter((invoice) => invoice.maHoaDon.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredInvoicePigs(filteredInvoicePigs);
  }, [date, invoices, selectedState, search]);


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

    <div className='h-full w-full flex flex-col gap-6'>
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className=' text-lg font-semibold text-textprimary'>Expenses Overview</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Expenses Overview</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <Link className='button-submit w-24'
            to={selectedTab === 'Pig Expenses' ? '/Invoice/Expenses/ExpensesOverview/ExpensesAddPig' : '/Invoice/Expenses/ExpensesOverview/ExpensesAddFarm'}
          >
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </Link>
        </div>
      </div>

      {/* Overview */}

      <div className='flex md:flex-row flex-col gap-3 p-2 items-center w-full bg-white rounded-xl  border-textdisable shadow'>
        <div className='p-2 flex flex-row items-center justify-center border-dashed border-r border-textdisable w-full gap-1'>
          <div className='relative flex items-center justify-center'>
            <div className='p-3'>
              <TbInvoice size={36} className='text-info_bg' />
            </div>
            <svg
              className='absolute'
              width='60'
              height='60'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='#d3d3d3'
                strokeWidth='1'
              />
              <path
                d='M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32'
                fill='none'
                stroke='#00B8D9'
                strokeWidth='1'
                strokeDasharray='100'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Total</span>
            <span className='text-xs text-textdisable font-normal'>
              {invoices.length + invoiceProducts.length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices.reduce((sum, invoice) => sum + invoice.tongTien, 0) + invoiceProducts.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
        <div className='p-2 flex flex-row items-center justify-center border-dashed border-r border-textdisable w-full gap-1'>
          <div className='relative flex items-center justify-center'>
            <div className='p-3'>
              <TbInvoice size={36} className='text-successlight' />
            </div>
            <svg
              className='absolute'
              width='60'
              height='60'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='#d3d3d3'
                strokeWidth='1'
              />
              <path
                d='M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32'
                fill='none'
                stroke='#22C55E'
                strokeWidth='1'
                strokeDasharray={(parseFloat(invoices.filter((invoice) => invoice.trangThai === 'Paid').length + invoiceProducts.filter((invoice) => invoice.trangThai === 'Paid') + ' ' + (invoices.length + invoiceProducts.length)) / parseFloat(invoices.length + invoiceProducts.length) * 100.0)}
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Paid</span>
            <span className='text-xs text-textdisable font-normal'>{invoices.filter((invoice) => invoice.trangThai === 'Paid').length + invoiceProducts.filter((invoice) => invoice.trangThai === 'Paid').length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices.filter((invoice) => invoice.trangThai === 'Paid').reduce((sum, invoice) => sum + invoice.tongTien, 0) + invoiceProducts.filter((invoice) => invoice.trangThai === 'Paid').reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
        <div className='p-2 flex flex-row items-center justify-center w-full gap-1 border-dashed border-r border-textdisable'>
          <div className='relative flex items-center justify-center'>
            <div className='p-3'>
              <TbInvoice size={36} className='text-warningmain' />
            </div>
            <svg
              className='absolute'
              width='60'
              height='60'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='#d3d3d3'
                strokeWidth='1'
              />
              <path
                d='M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32'
                fill='none'
                stroke='#FFAB00'
                strokeWidth='1'
                strokeDasharray={parseFloat(invoices.filter((invoice) => invoice.trangThai === 'Progress').length + invoiceProducts.filter((invoice) => invoice.trangThai === 'Progress') + ' ' + (invoices.length + invoiceProducts.length)) / parseFloat(invoices.length + invoiceProducts.length) * 100.0}
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Progress</span>
            <span className='text-xs text-textdisable font-normal'>
              {invoices.filter((invoice) => invoice.trangThai === 'Progress').length + invoiceProducts.filter((invoice) => invoice.trangThai === 'Progress').length}
            </span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices.filter((invoice) => invoice.trangThai === 'Progress').reduce((sum, invoice) => sum + invoice.tongTien, 0) + invoiceProducts.filter((invoice) => invoice.trangThai === 'Progress').reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
        <div className='p-2 flex flex-row items-center justify-center w-full gap-1 border-dashed border-r border-textdisable/95'>
          <div className='relative flex items-center justify-center'>
            <div className='p-3'>
              <TbInvoice size={36} className='text-other20' />
            </div>
            <svg
              className='absolute'
              width='60'
              height='60'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='#d3d3d3'
                strokeWidth='1'
              />
              <path
                d='M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32'
                fill='none'
                stroke='#2C7A51'
                strokeWidth='1'
                strokeDasharray={(parseFloat(invoices.length) / parseFloat(invoices.length + invoiceProducts.length)) * 100.0}
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Pig Expenses</span>
            <span className='text-xs text-textdisable font-normal'>{invoices.length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
        <div className='p-2 flex flex-row items-center justify-center w-full gap-1 '>
          <div className='relative flex items-center justify-center'>
            <div className='p-3'>
              <TbInvoice size={36} className='text-textsecondary' />
            </div>
            <svg
              className='absolute'
              width='60'
              height='60'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='#d3d3d3'
                strokeWidth='1'
              />
              <path
                d='M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32'
                fill='none'
                stroke='#637381'
                strokeWidth='1'
                strokeDasharray={parseFloat(invoiceProducts.length) / parseFloat(invoices.length + invoiceProducts.length) * 100.0}
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Farm Expenses</span>
            <span className='text-xs text-textdisable font-normal'>{invoiceProducts.length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoiceProducts.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className='flex flex-col gap-2 shadow pt-2 pb-4 rounded-xl'>
        <div className='flex flex-row gap-10 items-center p-2 border-b-2 border-textdisable/20'>
          <div
            className={`flex flex-col cursor-pointer tab ${selectedTab === 'Pig Expenses' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('Pig Expenses')}
          >
            <div className='flex flex-row gap-2 items-center'>
              <span className={`text-xs font-medium ${selectedTab === 'Pig Expenses' ? 'text-textprimary' : 'text-textdisable'}`}>Pig Expenses</span>
              <span className='text-xs items-center flex justify-center font-semibold w-6 h-6 rounded-md text-other20 bg-other30'>{invoices.length}</span>
            </div>
          </div>
          <div
            className={`flex flex-col cursor-pointer tab ${selectedTab === 'Farm Expenses' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('Farm Expenses')}
          >
            <div className='flex flex-row gap-2 items-center'>
              <span className={`text-xs font-medium ${selectedTab === 'Farm Expenses' ? 'text-textprimary' : 'text-textdisable'}`}>Farm Expenses</span>
              <span className='text-xs items-center flex justify-center font-semibold w-6 h-6 rounded-md text-textsecondary bg-slate-300'>{invoiceProducts.length}</span>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-start items-start gap-5 px-4 py-2'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} setSelectedState={setSelectedState} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} setDate={setDate} />
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
          <span className='font-medium text-textprimary text-xs'>{filteredInvoicePigs.length} </span>
          <span className='font-normal text-textdisable text-xs'>results for found</span>
        </div>
        <div className='items-center justify-center flex w-full'>
          {
            selectedTab === 'Pig Expenses' ? (
              <div className=''>
                <Table data={currentInvoicePigs} handleRefresh={handleRefresh} />
              </div>
            ) : (
              <div>
                <TableFarmExpenses data={invoiceProducts} handleRefresh={handleRefresh} />
              </div>
            )
          }
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
