import React, { useEffect, useState, useRef } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { getUserByFarmIDAction } from '../../Redux/Actions/UserActions';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsThreeDotsVertical } from 'react-icons/bs';
import UserInfoModal from '../../components/Modal/UserInfoModal';
import BarnAddModal from '../../components/Modal/BarnAddModal';
import { set } from 'react-hook-form';

function User() {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(state => state.getUserByFarmID);
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const menuRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getUserByFarmIDAction(farmID));
  }, [dispatch, isModalOpen]);

  const toggleMenu = (index) => {
    setMenuOpenIndex(menuOpenIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (isEdit) {
      return;
    }
    if (menuRefs.current.some(ref => ref && !ref.contains(event.target)) && !isEdit) {
      setMenuOpenIndex(null);
    }
  };

  const handleEdit = (user) => {
    console.log('edit');
    setUser(user);
    setIsModalEditOpen(true);
    setIsEdit(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='h-full w-full flex flex-col gap-6'>
      <UserInfoModal name={"Edit user"} isvisible={isModalEditOpen} onClose={() => setIsModalEditOpen(false)} user={user} />
      <UserInfoModal name={"Add user"} isvisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Navigation */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col w-full justify-center items-start gap-2'>
          <h1 className='text-lg font-semibold text-textprimary'>User Management</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>User Overview</span>
          </div>
        </div>
        <div className='flex place-items-end'>
          <button className='button-submit w-24' onClick={() => setIsModalOpen(true)}>
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <ClipLoader color='#3B82F6' loading={loading} size={25} className='m-auto items-center justify-center' />
      ) : (
        <div className='md:grid grid-cols-4 w-full justify-center items-center gap-4'>
          {users?.map((user, index) => (
            <Link to={`/User/${user.userID}`}>
              <div key={index} className='shadow w-full p-4 flex flex-row gap-6 rounded-md justify-start px-20 md:px-4 items-center cursor-pointer transition-all' >
                <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww' alt='avatar' className='w-14 h-14 rounded-full' />

                <div className='flex flex-col gap-1 justify-start items-start'>
                  <span className='text-xs font-normal text-textprimary'>{user.name}</span>
                  <span className='text-xs font-semibold text-textprimary'>{user.roleName}</span>
                </div>
                <div className='relative' ref={el => menuRefs.current[index] = el}>
                  <div
                    className='flex flex-col p-2 gap-1 justify-start items-start hover:rounded-full hover:bg-slate-100'
                    onClick={() => toggleMenu(index)}
                  >
                    <BsThreeDotsVertical />
                  </div>
                  {menuOpenIndex === index && (
                    <div className='shadow flex flex-col bg-white absolute z-[999] left-5 top-2'>
                      <span className='text-xs text-textprimary p-2 hover:bg-slate-50' onClick={() => { setIsEdit(true); handleEdit(user) }}>Edit</span>
                      <span className='text-xs text-textprimary p-2 hover:bg-slate-50'>Delete</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>

          ))}
        </div>
      )}
    </div>
  );
}

export default User;
