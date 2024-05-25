import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { DateTimeInput, Input2, MessageInput } from '../../../components/Input'
import Table2 from '../../../components/Table2'

function ExpensesAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className='h-full w-full flex flex-col gap-4'>
      <div className='grid md:grid-cols-2 w-full pr-4 justify-between items-center gap-2'>
        <h1 className='text-2xl font-semibold text-textprimary'>Add Pig Expenses</h1>
        <div className='flex flex-row gap-3 text-xs items-center justify-end'>
          <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
          <FaAngleRight className='text-textdisable' size={20} />
          <NavLink to='/Invoice/Expenses/ExpensesOverview' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Expenses Overview</NavLink>
          <FaAngleRight className='text-textdisable' size={20} />
          <span className='text-xs text-textprimary font-semibold'>Add Pig Expenses</span>
        </div>
      </div>
      <div className='w-full items-center grid md:grid-cols-2 gap-5 pr-4  md:px-32'>
        <div className='w-full'>
          <Input2
            label="Invoice Date: *"
            placeholder="dd-MM-YYYY"
            type="text"
            bg={true}
            name="year"
          />
        </div>
        <div className='w-full'>
          <Input2
            label="Client Company Name: "
            placeholder=""
            type="text"
            bg={true}
            name="year"
          />
        </div>
        <div className='w-full'>
          <DateTimeInput
            label="Purchase Date: *"
            placeholder="dd-MM-YYYY"
            type="text"
            bg={true}
            name="year"
          />
        </div>
        <div className='w-full'>
          <Input2
            label="Client Name: "
            placeholder=""
            type="text"
            bg={true}
            name="year"
          />
        </div>
        <div className='w-full row-span-2 order-1 md:order-none'>
          <MessageInput
            label="Note: "
          />
        </div>
        <div className='w-full'>
          <Input2
            label="Client Address: "
            placeholder=""
            type="text"
            bg={true}
            name="year"
          />
        </div>
        <div className='w-full '>
          <Input2
            label="Client Phone Number: "
            placeholder=""
            type="text"
            bg={true}
            name="year"
          />
        </div>
      </div>
      <div className='md:px-32'>
        <Table2 />
      </div>
      <div className='w-full flex flex-row gap-2  md:px-32'>
        <button className='text-xs text-white rounded bg-primary_main px-4 py-2 hover:bg-other20 transition-all duration-200 ease-in-out font-semibold tracking-wide'>
          Submit
        </button>
        <button className='text-xs text-warning10 font-semibold px-4 py-2 rounded border border-warning10 hover:text-white hover:bg-warning10'>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ExpensesAdd