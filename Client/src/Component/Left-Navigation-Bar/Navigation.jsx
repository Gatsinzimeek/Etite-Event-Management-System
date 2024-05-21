import {
  faHome,
  faUser,
  faCalendar,
  faTicket,
  faCalendarPlus,
  faArrowRightToBracket,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
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

  return (
    <div className="w-full">
      <h1 className="text-center text-[17px] mb-7 text-white">Event-Trace 
      <FontAwesomeIcon
                    icon={faBars}
                    className="pl-[15px] pr-[10px] cursor-pointer"
                  />
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
                  {nav.Title}
                </Link>
              </li>
            ))}
      </ul>
      <div className="mt-[150%] text-center cursor-pointer hover:text-white">
            <span className="text-[18px]" title="logout">Logout
              <FontAwesomeIcon icon={faArrowRightToBracket} className="pl-2 "/> 
            </span>
      </div>
    </div>
  )
}

export default Navigation
