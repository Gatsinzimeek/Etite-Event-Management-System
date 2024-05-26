import { faLocationDot, faPerson, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timer from '../../assets/timer.png'
import user from '../../assets/user.png'
const EventDetail = ({...otherProps}) => {
    const {Date,classnam,EventName,OrganizerName,cityName,StartTime,EndTime} = otherProps;
  return (
    <div className='flex  p-4 rounded-md bg-slate-100 max-sm:block mb-3 items-center'>
      <div className={`${classnam} w-[62px] max-sm:w-full py-1 text-center block mr-3 rounded-lg text-white`}>
        <p>{Date}</p>
      </div>
      <div>
        <h1 className="pb-3">{EventName}</h1>
        <div className="flex flex-wrap text-[13px] justify-between gap-4">
           
                
            <p className="flex">
                  <img src={user} alt="" className="pr-1 text-blue-500"/>
                    {OrganizerName}
            </p>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} className="pr-1 text-blue-500"></FontAwesomeIcon>
                    {cityName}
                </p>
            </div>
            <div>
                <p className="flex">
                  <img src={timer} alt="" className="pr-1 w-[23px] h-[20px] text-blue-500"/>
                    {StartTime}-{EndTime}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
