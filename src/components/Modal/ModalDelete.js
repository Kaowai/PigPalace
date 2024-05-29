import React, { useState } from 'react'
import ModalPopup from './ModalMain/ModalPopup';


export default function ModalDelete({ name, isvisible, onClose, onDelete }) {
  
  return (
    <ModalPopup name={name} isvisible={isvisible} onClose={onClose}>
      <div className='flex flex-col gap-10'>
        <p className='text-sm text-textprimary font-semibold py-4'>Are you sure you want to delete this item?</p>
        <div className='flex flex-row gap-3 mt-3'>
          <button className='bg-red-500 text-white px-3 py-2 rounded-md text-xs hover:bg-red-600 transition-all duration-200' onClick={onDelete}>Delete</button>
          <button className='bg-gray-500 text-white px-3 py-2 rounded-md text-xs hover:bg-gray-600 transition-all duration-200' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </ModalPopup>
  );
}
