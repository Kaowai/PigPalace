
import React from 'react'

import Table from '../../../components/Table'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function ExpensesOverview() {

  const [selectedTab, setSelectedTab] = React.useState('Pig Expenses');

  return (

    <div className='h-full w-full flex flex-col gap-4'>
      <div className='flex flex-row w-full pr-10 justify-between items-center '>
        <h1 className='text-2xl font-bold text-textprimary'>Expenses Overview</h1>
        <div className='flex flex-row gap-3 text-xs items-center'>
          <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer'>Dashboard</NavLink>
          <FaAngleRight className='text-textdisable' size={20} />
          <span className='text-xs text-textprimary'>Expenses Overview</span>
        </div>
      </div>
      <div className='flex flex-row gap-3'>
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
      <div className='items-center justify-center flex'>
        {
          selectedTab === 'Pig Expenses' ? (
            <Table />

          ) : (
            <div>Not </div>
          )
        }
      </div>
    </div>
  )
}
