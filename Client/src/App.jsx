import {Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin Dashboard/Admin";
import Client from "./Routes/Client Dashboard/Client";
import Login from "./Routes/Login/Login"
import Signup from "./Routes/Signup/Signup";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import UsercontextProvider from "../src/Context/User.Context";
import PrivateRoute from "./Routes/Private Routes/PrivateRoute";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
function App() {
  return (
    <UsercontextProvider>
      <Toaster position="bottom-right" toastOptions={{duration:2000}} />
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Admindashboard" element={<PrivateRoute><Admin/></PrivateRoute>}/>
          <Route path="/Userdashboard" element={<PrivateRoute><Client/></PrivateRoute>}/>
      </Routes>
    </ UsercontextProvider>
  )
}

export default App;
