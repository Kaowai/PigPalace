
import React from 'react'

import Table from '../../../components/Table'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import TableFarmExpenses from '../../../components/TableFarmExpenses';

export default function ExpensesOverview() {

  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');

  return (

    <div className='h-full w-full flex flex-col gap-4'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-semibold text-textprimary'>Expenses Overview</h1>
        <div className='flex flex-row gap-3 text-xs items-center pr-8'>
          <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer hover:font-semibold transition-all duration-200 ease-in-out'>Dashboard</NavLink>
          <FaAngleRight className='text-textdisable' size={20} />
          <span className='text-xs text-textprimary font-semibold'>Expenses Overview</span>
        </div>
      </div>
      <div className='flex flex-row gap-3 '>
        <div
          className={`flex flex-col cursor-pointer tab ${selectedTab === 'Pig Expenses' ? 'selected' : ''}`}
          onClick={() => setSelectedTab('Pig Expenses')}
        >
          <span className={`text-sm font-semibold ${selectedTab === 'Pig Expenses' ? 'text-textprimary' : 'text-textdisable'}`}>Pig Expenses</span>
        </div>
        <div
          className={`flex flex-col cursor-pointer tab ${selectedTab === 'Farm Expenses' ? 'selected' : ''}`}
          onClick={() => setSelectedTab('Farm Expenses')}
        >
          <span className={`text-sm font-semibold ${selectedTab === 'Farm Expenses' ? 'text-textprimary' : 'text-textdisable'}`}>Farm Expenses</span>
        </div>
      </div>
      <div className='items-center justify-center flex w-full'>
        {
          selectedTab === 'Pig Expenses' ? (
            <div className=''>
              <Table />
            </div>

          ) : (
            <div className='w-full pl-2'>
              <TableFarmExpenses />
            </div>
          )
        }
      </div>
    </div>
  )
}
