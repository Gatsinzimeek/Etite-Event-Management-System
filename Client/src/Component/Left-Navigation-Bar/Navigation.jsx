import {
  faHome,
  faLocationDot,
  faBus,
  faUser,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Navigation = () => {
  const Navbar = [
    {
      Icon: faHome,
      Title: "Dashboard",
      path: "/dashboard/home",
    },
    {
      Icon: faBus,
      Title: "Events",
      path: "/dashboard/Buses",
    },

    {
      Icon: faLocationDot,
      Title: "Tickets",
      path: "/dashboard/Map",
    },

    {
      Icon: faCircleInfo,
      Title: "Details",
      path: "/dashboard/Info",
    },
    {
      Icon: faUser,
      Title: "Profile",
      path: "/dashboard/setting",
    },
  ];

  return (
    <div>
      <ul>
        {Navbar.map((nav, index) => (
              <li
                key={index}
                className="p-[5px] px-[5px] mb-3 text-[15px] cursor-pointer hover:bg-[#3e61ac] hover:text-white rounded-xl mx-2"
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
      <div>

      </div>
    </div>
  )
}

export default Navigation
