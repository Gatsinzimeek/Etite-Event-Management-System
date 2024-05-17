import { faLocationDot, faPerson, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EventDetail = ({...otherProps}) => {
    const {Date,classnam,EventName,OrganizerName,cityName,StartTime,EndTime} = otherProps;
  return (
    <div className='flex'>
      <div className={`${classnam}`}>
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
