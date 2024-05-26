import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({...otherProps}) => {
    const {heading, number, icon} = otherProps;
  return (
    <div className="cursor-pointer flex bg-white m-5 rounded-lg items-center shadow-md w-fitcontent px-5 py-3 h-fitcontent">
        <span><FontAwesomeIcon className="text-blue-400 text-[34px] mr-2" icon={icon}></FontAwesomeIcon></span>
        <div className="ml-10">          
           <h1 className="font-[600] text-[26px]">{number}</h1>
           <p className="text-[14px]">{heading}</p>
        </div>
       
    </div>
  )
}

export default Card;
