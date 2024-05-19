import { faLocationDot, faPerson, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timer from '../../assets/timer.png'
import user from '../../assets/user.png'
const EventDetail = ({...otherProps}) => {
    const {Date,classnam,EventName,OrganizerName,cityName,StartTime,EndTime} = otherProps;
  return (
    <div className='flex p-4 rounded-md bg-slate-100 mb-3 items-center'>
      <div className={`${classnam} w-[62px] py-1 text-center block mr-3 rounded-lg text-white`}>
        <p>{Date}</p>
      </div>
      <div>
        <h1 className="pb-3">{EventName}</h1>
        <div className="flex text-[13px] justify-between gap-4">
            <div className="">
                
            <p className="flex">
                  <img src={user} alt="" className="pr-1 text-blue-500"/>
                    {OrganizerName}
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} className="pr-1 text-blue-500"></FontAwesomeIcon>
                    {cityName}
                </p>
            </div>
            <div>
                <p className="flex">
                  <img src={timer} alt="" className="pr-1 text-blue-500"/>
                    {StartTime}-{EndTime}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
