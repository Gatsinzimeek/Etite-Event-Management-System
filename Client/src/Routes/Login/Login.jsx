import login from './../../assets/Login.png';
import Input from '../../Component/Input/input';
import Button from '../../Component/Button/Button';
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const Navigate = useNavigate();
  const handleLogin = async (e) =>{
    e.preventDefault();
    const {username,password} = data;
    try{
      const {data} = await axios.post('/login',{
        username, password
      })
      if(data.error){
          toast.error(data.error)
      }else{
                
        setData({})
        toast.success('Login Successfully');
        if(username === 'admin'){
          Navigate('/Admindashboard/Home');
        }else{
           Navigate('/Userdashboard');
        }
      }
    }catch(erro) {
      console.log(erro)
    }
  }

  return (
    <section className='flex w-full h-full flex-wrap items-center max-md:grid max-md:p-[30px] Container'>
        <div className=' w-[50%] max-md:w-full'>
          <img src={login} alt="login-bg" className='w-[90%]'/>
        </div>
        <div className='w-[50%] max-sm:w-full  gap-10 text-center p-20'>
          <div className='m-[20px]'>
            <h1 className='text-[30px] font-[600]'> Welcome</h1>
            <p>Login Into your account</p>
          </div>
          <form method='POST' onSubmit={handleLogin} className='grid w-[70%] m-auto'>
            <Input val={data.username} handleChange={ e => setData({...data, username: e.target.value})} Placeholder='Username' Type='text' />
            <Input val={data.password} handleChange={ e => setData({...data, password: e.target.value})} Placeholder='Password' Type='password'/>
            <Button>Sign In</Button>
          </form>
          <span>Don't have Account?<a href="/signup" className='pl-3 text-blue-400'>Create Account</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Login
