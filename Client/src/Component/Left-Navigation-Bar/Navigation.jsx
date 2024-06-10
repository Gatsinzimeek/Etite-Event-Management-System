import {
  faHome,
  faUser,
  faCalendar,
  faTicket,
  faCalendarPlus,
  faArrowRightToBracket,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import toast from "react-hot-toast";

const Navigation = () => {
    const navigate = useNavigate();
  const Navbar = [
    {
      Icon: faHome,
      Title: "Dashboard",
      path: "/Admindashboard/Home",
    },
    {
      Icon: faCalendar,
      Title: "Events",
      path: "Events",
    },

    {
      Icon: faTicket,
      Title: "Tickets",
      path: "Booking",
    },

    {
      Icon: faCalendarPlus,
      Title: "Attendee",
      path: "Attendee",
    },
    {
      Icon: faUser,
      Title: "Profile",
      path: "/dashboard/setting",
    },
  ];

  const LogoutUser = async () =>{
    const {user} = await axios.get('/api/Auth/profile');
    if(!user){
      toast.error('There is not user loggedIn')
    }else{
      console.log(user.username);
    navigate('/');
    }
  }
  return (
    <>
      <h1 className="text-center text-[17px] mb-7 text-white">Event-Trace 
     
      </h1>
      <ul>
        {Navbar.map((nav, index) => (
              <li
                key={index}
                className=" mb-3  border-b border-black text-[15px] cursor-pointer hover:bg-[#3e61bc] hover:text-white p-2 mx-2"
              >
                <Link to={nav.path}>
                  <FontAwesomeIcon
                    icon={nav.Icon}
                    className="pl-[10px] pr-[10px]"
                  />
                  <span>{nav.Title}</span>
                  
                </Link>
              </li>
            ))}
      </ul>
      <div className="text-center mt-auto mb-2 cursor-pointer hover:text-white">
            <p className="text-[18px]" title="logout" onClick={LogoutUser}> <span className="max-md:hidden">Logout</span>
              <FontAwesomeIcon icon={faArrowRightToBracket} className="pl-2 "/> 
            </p>
      </div>
    </>
  )
}

export default Navigation
