import RegistBg from '../../assets/Regist.png'
import Input from "../../Component/Input/input"
import Button from "../../Component/Button/Button"
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    C_pin: '',
  });
  const Navigate = useNavigate();

  const handleClick = async (e) =>{
    e.preventDefault();
   
    const {username, password,C_pin} = data;
    try{
        const {data} = await axios.post('/api/Auth/signup', {
          username, password,C_pin
        }) 
        if(data.error){
          toast.error(data.error);
        }else{
          
          setData({})
          toast.success('User Registered');
          Navigate('/');
        }
    }catch(err){
      console.log(err);
    }
  }


  return (
    <section className='flex w-full h-full relative flex-wrap items-center max-md:grid max-md:p-[30px] Container'>
       
        <div className=' w-[50%] max-md:w-full'>
          <img src={RegistBg} alt="login-bg" className='w-[90%]'/>
        </div>
        <div className='w-[50%] max-sm:w-full  gap-10 text-center p-20'>
          <div className='m-[20px]'>
            <h1 className='text-[30px] font-[600]'> Welcome</h1>
            <p>Create your account</p>
          </div>
          <form method='POST' onSubmit={handleClick} className='grid w-[70%] m-auto'>
              <Input val={data.username} handleChange={ e => setData({...data, username: e.target.value})} Placeholder='Username' Type='text' />
              <Input val={data.password} handleChange={ e => setData({...data, password: e.target.value})} Placeholder='Password' Type='password'/>
              <Input val={data.C_pin} handleChange={ e => setData({...data, C_pin: e.target.value})}  Placeholder='Confirm Password' Type='password'/>
              <Button >Register</Button>
          </form>
          <span>Already have Account?<a href="/" className='pl-3 text-blue-400'>Login Here</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Signup
