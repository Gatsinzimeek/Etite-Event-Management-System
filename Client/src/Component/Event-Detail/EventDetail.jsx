import { faLocationDot, faPerson, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EventDetail = ({...otherProps}) => {
    const {Date,classnam,EventName,OrganizerName,cityName,StartTime,EndTime} = otherProps;
  return (
    <div className='flex p-4 rounded-md bg-slate-100 mb-3 items-center'>
      <div className={`${classnam} w-[62px] py-1 text-center block mr-3 rounded-lg`}>
        <p>{Date}</p>
      </div>
      <div>
        <h1>{EventName}</h1>
        <div className="flex">
            <div>
                <p>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    {OrganizerName}
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    {cityName}
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    {StartTime}-{EndTime}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
