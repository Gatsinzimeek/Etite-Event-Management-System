import {Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin Dashboard/Admin";
import Client from "./Routes/Client Dashboard/Client";
import Login from "./Routes/Login/Login"
import Signup from "./Routes/Signup/Signup";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import Attendee from './Routes/Admin Dashboard/Attendee/Attendee'
import Profile from './Routes/Admin Dashboard/Profile Setting/Profile'
import  Event from './Routes/Admin Dashboard/Events/Events'
import Ticket from './Routes/Admin Dashboard/BookedTicket/Ticket'
import Main from './Routes/Admin Dashboard/Home/Home'
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{duration:2000}} />
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="Admindashboard" element={<Admin/>}>
              <Route path='Home' element={<Main/>}></Route>
              <Route path='Booking' element={<Ticket/>}></Route>
              <Route path='Profile' element={<Profile/>}></Route>
              <Route path='Attendee' element={<Attendee/>}></Route>
              <Route path='Events' element={<Event/>}></Route>
          </Route>
          <Route path="Userdashboard" element={<Client/>}>

          </Route>
      </Routes>
    </ >
  )
}

export default App;
