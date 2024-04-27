import login from './../../assets/Login.png';
import Input from '../../Component/Input/input';
import Button from '../../Component/Button/Button';
import { useState } from 'react';
const Login = () => {
  const [data, setData] = useState({
    Username: '',
    pin: '',
  });
  const [error, setError] = useState(null);

  const handleLogin = (e) =>{
    e.preventDefault();
    if(!data.Username || !data.pin) {
      setError('Please fill All filled');
    }else{
      setError(null)
    }
    setData({
      Username: '',
      pin: '',
    })
  }

  return (
    <section className='flex w-full h-full flex-wrap items-center max-md:grid max-md:p-[30px] Container'>
        {
          error !== null && <div className='text-white bg-blue-300 absolute top-4 right-5 w-[24%] p-[18px] rounded-xl'>{error}</div>
        }
        <div className=' w-[50%] max-md:w-full'>
          <img src={login} alt="login-bg" className='w-[90%]'/>
        </div>
        <div className='w-[50%] max-sm:w-full  gap-10 text-center p-20'>
          <div className='m-[20px]'>
            <h1 className='text-[30px] font-[600]'> Welcome</h1>
            <p>Login Into your account</p>
          </div>
          <form onSubmit={handleLogin} className='grid w-[70%] m-auto'>
              <Input Placeholder='Username' Type='text' val={data.Username} handleChange={ e => setData({...data, name: e.target.value})} />
              <Input Placeholder='Password' Type='password'  val={data.pin} handleChange={ e => setData({...data, pin: e.target.value})}/>
              <Button>Sign In</Button>
          </form>
          <span>Don't have Account?<a href="/signup" className='pl-3 text-blue-400'>Create Account</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Login
