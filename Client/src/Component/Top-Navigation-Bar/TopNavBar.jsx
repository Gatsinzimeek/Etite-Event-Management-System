import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBell, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons'
import profile1 from '../../assets/profile.jpg'
const TopNavBar = () => {
  return (
    <div className='bg-white p-3 flex w-full justify-between gap-2 items-center'>
      <div className='flex items-center'>
        <FontAwesomeIcon
                    icon={faBars}
                    className="pl-[15px] pr-[10px] cursor-pointer"
        />
        <div className='relative'>
        <input type="text" placeholder='Search Here ...' className='px-[13px] py-[5px] w-[400px]  outline-none rounded-2xl border bg-slate-100' />
        <FontAwesomeIcon icon={faSearch} className='absolute right-3 hover:text-blue-400 hover:cursor-pointer top-2 '/>
        </div>        
      </div>
      <div className='flex items-center gap-2'>
        <div className='relative pt-5'>
            <FontAwesomeIcon icon={faBell} className='cursor-pointer  bg-slate-100 p-2 mx-2 rounded-2xl'/>
            <span className='absolute bottom-6 text-[15px] right-1 bg-green-400 shadow-lg  text-white rounded-2xl px-[5px] pt-[1px] cursor-pointer'>0</span>
        </div>
        <div className='w-[20%] h-fit cursor-pointer'>
            <img src={profile1} alt="profile"  className=' pt-2  rounded-[50%]'/>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar;
