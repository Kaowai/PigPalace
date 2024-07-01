import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import Table from '../../../components/Table'
import { IoAddCircleOutline, IoSearchOutline } from 'react-icons/io5'
import { TbInvoice } from 'react-icons/tb'
import { useSpring, animated } from 'react-spring';
import { DateTimeInput2, Select2 } from '../../../components/Input'
import { FaAngleLeft } from 'react-icons/fa6'
import TableFarmExpenses from '../../../components/TableFarmExpenses'
import { useDispatch, useSelector } from 'react-redux'
import { getListInvoicePigExportAction } from '../../../Redux/Actions/InvoicePigActions'


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
  }, []);

  return <animated.span>{props.number.to(n => n.toFixed(2))}</animated.span>;
};

function SalesOverview() {
  const [rowPerPage, setRowPerPage] = useState(5);
  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { invoices } = useSelector(state => state.getListInvoicePigExport);

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getListInvoicePigExportAction(farmID));
  }, [dispatch]);

  const handleRefresh = async () => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getListInvoicePigExportAction(farmID));
  }
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

  const handleLeftClick = () => {

  }
  const handleRightLick = () => {

  }
  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Sales Overview</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Sales Overview</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <Link className='button-submit w-24'
            to={'/Invoice/Sales/AddSales'}
          >
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </Link>
        </div>
      </div>

      {/* Table */}
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
                strokeDasharray='75 25'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Total</span>
            <span className='text-xs text-textdisable font-normal'>{invoices?.length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices?.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
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
                strokeDasharray='75 25'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Paid</span>
            <span className='text-xs text-textdisable font-normal'>{invoices?.filter((invoice) => invoice.trangThai === 'Paid').length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices?.filter((invoice) => invoice.trangThai === 'Paid')?.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
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
                strokeDasharray='75 25'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Progress</span>
            <span className='text-xs text-textdisable font-normal'>{invoices?.filter((invoice) => invoice.trangThai === 'Progress').length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices?.filter((invoice) => invoice.trangThai === 'Progress')?.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
        <div className='p-2 flex flex-row items-center justify-center w-full gap-1 border-dashed '>
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
                strokeDasharray='75 25'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2 ml-2'>
            <span className='text-xs text-textprimary font-bold'>Pig Sales</span>
            <span className='text-xs text-textdisable font-normal'>{invoices?.length} invoinces</span>
            <span className='text-xs text-textprimary font-normal'>$<AnimatedNumber value={invoices?.reduce((sum, invoice) => sum + invoice.tongTien, 0)} /></span>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className='flex flex-col gap-2 shadow py-2 rounded-xl'>
        <div className='flex flex-row gap-10 items-center p-2 border-b-2 border-textdisable/20'>
          <div
            className={`flex flex-col cursor-pointer tab ${selectedTab === 'Pig Sales' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('Pig Sales')}
          >
            <div className='flex flex-row gap-2 items-center'>
              <span className={`text-xs font-medium ${selectedTab === 'Pig Sales' ? 'text-textprimary' : 'text-textdisable'}`}>Pig Sales</span>
              <span className='text-xs items-center flex justify-center font-semibold w-6 h-6 rounded-md text-other20 bg-other30'>10</span>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
          <div className='flex flex-row gap-2'>
            <Select2 options={options} />
          </div>
          <div className='flex flex-row gap-2'>
            <DateTimeInput2 options={options} />
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
        <div className='items-center justify-center flex w-full'>
          {
            (
              <div className=''>
                <Table data={invoices} handleRefresh={handleRefresh} />
              </div>
            )
          }
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

export default SalesOverview