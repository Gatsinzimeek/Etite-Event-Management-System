import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({...otherProps}) => {
    const {heading, number, icon} = otherProps;
  return (
    <div className="cursor-pointer flex bg-white m-5 rounded-lg items-center shadow-md w-fitcontent p-5 h-fitcontent">
        <span><FontAwesomeIcon className="text-blue-400 text-[34px] mr-2" icon={icon}></FontAwesomeIcon></span>
        <div className="ml-20">          
           <h1 className="font-[600]">{number}</h1>
           <p>{heading}</p>
        </div>
       
    </div>
  )
}

export default Card;
