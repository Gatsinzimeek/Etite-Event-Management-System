import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBell, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import profile1 from '../../assets/profile.jpg'
const TopNavBar = () => {
  return (
    <div className='bg-white p-5 flex justify-between flex-wrap'>
      <div>
        <h1>Welcome </h1>
      </div>
      <div className='flex items-center justify-center '>
        <div className='relative'>
        <input type="text" placeholder='Search Here ...' className='px-[13px] py-[5px] w-[400px] outline-none rounded-2xl border bg-slate-100' />
        <FontAwesomeIcon icon={faSearch} className='absolute right-3 hover:text-blue-400 hover:cursor-pointer top-2 '/>
        </div>
        <div className='relative'>
            <FontAwesomeIcon icon={faBell} className='cursor-pointer  bg-slate-100 p-2 mx-2 rounded-2xl'/>
            <span className='absolute bottom-6 text-[15px] right-1 bg-green-400 shadow-lg  text-white rounded-2xl px-[5px] pt-[1px] cursor-pointer'>0</span>
        </div>
        <div className='flex justify-center items-center  gap-2 w-[30%] cursor-pointer'>
            <img src={profile1} alt="profile"  className='w-[21%] pt-2 h-[25%] rounded-[50%]'/>
            <div>
              <h6 className='font-bold'>Jessi Rose</h6>
              <p className='text-[13px]'>Admin</p>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className='text-[12px] pt-2 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default TopNavBar;
