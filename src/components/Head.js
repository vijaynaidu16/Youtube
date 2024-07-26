import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
<div className='grid grid-flow-col m-2 p-5 bg-white shadow-md'>
    <div className='flex col-span-1 items-center'>
        <img onClick={() => toggleMenuHandler()} className='h-11 mr-4 cursor-pointer' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' alt='menu' />
       <a href='/'>
       <img className='h-11 cursor-pointer' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' alt='yt-logo'/>
       </a> 
    </div>
    <div className='col-span-10 flex items-center justify-center'>
        <input className='w-1/2 border border-gray-300 rounded-l-full px-4 py-2' type='text' placeholder='Search'/>
        <button className='border border-gray-300 bg-gray-100 px-4 py-2 rounded-r-full'>Search</button>
    </div>
    <div className='flex items-center justify-end'>
        <img className='h-8 cursor-pointer' src='http://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png' alt='user-icon' />
    </div>
</div>


  )
}

export default Head