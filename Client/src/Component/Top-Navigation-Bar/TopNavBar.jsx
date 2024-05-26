import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBell, faChevronDown, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import profile1 from '../../assets/profile.jpg'
import notification from '../../assets/Notification.jpg'
import { useState } from 'react';
const TopNavBar = () => {
  const [Input, setInput] = useState(false);
  const [Notification, setNotifacation] = useState(false)
  return (
    <>
    <div className='bg-white p-3 flex w-full  flex-wrap justify-between gap-2 items-center'>
      <div className='flex  items-center flex-wrap'>
       <button>
        <FontAwesomeIcon
                    icon={faBars}
                    className="pl-[15px] pr-[10px] cursor-pointer"
        />
        </button>
        <div className='relative'>
          {Input && (<input type="text" placeholder='Search Here ...' className='px-[13px] py-[5px]   outline-none rounded-2xl border bg-slate-100' />
        )}
        <FontAwesomeIcon icon={faSearch} onClick={() => setInput(true)} className={` ${Input && 'absolute right-3 top-2'}  hover:text-blue-400 hover:cursor-pointer `}/>
        </div>        
      </div>
      <div className='flex items-center gap-2  max-md:w-[20%] justify-end'>
        <div className='relative pt-5' onClick={() => setNotifacation(true)} >
            <FontAwesomeIcon icon={faBell} className='cursor-pointer  bg-slate-100 p-2 mx-2 rounded-2xl'/>
            <span className='absolute bottom-6 text-[15px] right-1 bg-green-400 shadow-lg  text-white rounded-2xl px-[5px] pt-[1px] cursor-pointer'>0</span>
        </div>
        <div className='w-[20%] max-sm:w-[30%] h-fit cursor-pointer'>
            <img src={profile1} alt="profile"  className=' pt-2  rounded-[50%]'/>
        </div>
      </div>
    </div>
    {
      Notification && (
        <div className='bg-white max-sm:w-full z-50 max-sm:h-full w-[20%] border rounded-lg shadow-lg absolute max-sm:top-0 max-sm:fixed top-[82px] p-4 right-0'>
        <div className='flex justify-between items-center border-b  pb-3'>
         <h1 >Notication</h1>
          <FontAwesomeIcon icon={faClose} onClick={() => setNotifacation(false)} className='bg-red-500 text-[12px] text-white p-[8px] rounded-[30%] cursor-pointer' />
        </div>
        <div className='overflow-auto'>
        <div >
          <img src={notification} alt="notification" />
          <p className='text-center text-[10px] max-sm:text-[20px]'>Empty Notication</p>
        </div>
       
        </div>
    </div>
      )
    }
    
    </>
  )
}

export default TopNavBar;
