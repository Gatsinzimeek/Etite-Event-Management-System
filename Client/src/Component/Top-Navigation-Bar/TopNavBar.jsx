import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons';
const TopNavBar = () => {
  return (
    <div className='border-[#c1c1c1] border-b-[1px] p-5 flex justify-between'>
      <div>
        <h1>Welcome</h1>
      </div>
      <div className='flex items-center'>
        <div className='relative'>
        <input type="text" placeholder='Search Here ...' className='px-[13px] py-[5px] outline-none rounded-2xl border' />
        <FontAwesomeIcon icon={faSearch} className='absolute right-3 hover:text-blue-400 hover:cursor-pointer top-2 '/>
        </div>
      <FontAwesomeIcon icon={faBell} className='cursor-pointer'/>
      </div>
      
    </div>
  )
}

export default TopNavBar;
