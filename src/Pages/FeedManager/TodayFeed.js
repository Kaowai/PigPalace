import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

export default function TodayFeed() {
  return (
    <div className='h-full w-full flex flex-col gap-6'>
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className=' text-lg font-semibold text-textprimary'>Today Feed</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Today Feed</span>
          </div>
        </div>
        <div className='flex place-items-end'>
          <Link className='text-xs text-white rounded-s bg-primary_main px-2 py-2 hover:bg-other20 transition-all duration-200 ease-in-out font-normal tracking-wide flex gap-1 whitespace-nowrap'
            to={'/FeedManager/FeedPlan/AddFeedPlan'}
          >
            Add Feed Schedule
          </Link>
          <Link className='text-xs text-white font-normal px-4 py-2 rounded-e  border-r bg-slate-400 hover:bg-slate-500 transition-all duration-200 ease-in-out whitespace-nowrap'
            to={'/FeedManager/FeedPlan'}
          >
            All Feed Schedule
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2 justify-start items-start px-4 py-2 shadow rounded-xl'>
          <span className='text-base text-textprimary font-bold'>Barn 1</span>

          {/* Schedule */}
          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 justify-start items-start px-4 py-2 shadow rounded-xl'>
          <span className='text-base text-textprimary font-bold'>Barn 1</span>

          {/* Schedule */}
          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 justify-start items-start px-4 py-2 shadow rounded-xl'>
          <span className=' text-base text-textprimary font-bold'>Barn 1</span>

          {/* Schedule */}
          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 bg-other30 w-full p-4'>
            {/* Info */}
            <div className='flex flex-row gap-4 justify-center items-center'>
              {/* Date */}
              <div className='flex flex-col gap-2 justify-center items-center p-3 bg-slate-200 rounded-md '>
                <span className='text-sm font-bold text-textprimary'>24</span>
                <span className='text-xs font-semibold text-textprimary'>Apr</span>
              </div>
              {/* Time and info */}
              <div className='flex flex-col gap-2 justify-start items-start'>
                <span className='text-sm font-normal text-textdisable'>5:30 AM</span>
                <span className='text-white text-xs p-2 bg-other20 rounded-lg w-96'>Pig Feed for Cow: 0.25 [KG]</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className='flex flex-row gap-2'>
              <button className='button-confirm w-24'>
                Complete
              </button>
              <button className='button-close w-24'>
                View task
              </button>
              <button className='button-delete w-24'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
