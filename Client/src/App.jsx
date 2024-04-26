import {Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin Dashboard/Admin";
import Client from "./Routes/Client Dashboard/Client";
import Login from "./Routes/Login/Login"
import Signup from "./Routes/Signup/Signup";
function App() {
  return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/Admindashboard" element={<Admin/>}/>
            <Route path="/Userdashboard" element={<Client/>}/>
        </Routes>
  )
}

export default App
