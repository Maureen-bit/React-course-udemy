import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../auth/thunks';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const { displayName } = useSelector(state => state.auth);

    const onLogOut = () => {
        dispatch(startLogOut())
    };

  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar'>
            <h3>
                <i className="fa-thin fa-alien"></i>
                <span>{displayName}</span>
            </h3>
            <button 
               className='btn'
               onClick={onLogOut}
            >
                Logout
            </button>
        </div>

        <div className='journal__new-entry'>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='mt-5' >
                New entry
            </p>
        </div>
        <JournalEntries />

    </aside>
  )
}
