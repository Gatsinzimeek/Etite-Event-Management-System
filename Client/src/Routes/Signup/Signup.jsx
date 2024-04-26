import RegistBg from '../../assets/Regist.png'
import Input from "../../Component/Input/input"
import Button from "../../Component/Button/Button"
import { useRef } from 'react'
const Signup = () => {
  const username = useRef('')
  const pin = useRef('');
  const C_pin = useRef('');

  const handleClick = (e) =>{
    e.preventDefault();
    alert('helo')
  }


  return (
    <section className='flex w-full h-full flex-wrap items-center max-md:grid max-md:p-[30px] Container'>
        <div className=' w-[50%] max-md:w-full'>
          <img src={RegistBg} alt="login-bg" className='w-[90%]'/>
        </div>
        <div className='w-[50%] max-sm:w-full  gap-10 text-center p-20'>
          <div className='m-[20px]'>
            <h1 className='text-[30px] font-[600]'> Welcome</h1>
            <p>Create your account</p>
          </div>
          <form action="" method='POST' onSubmit={handleClick} className='grid w-[70%] m-auto'>
              <Input refer={username} Placeholder='Username' Type='text' />
              <Input  refer={pin} Placeholder='Password' Type='password'/>
              <Input  refer={C_pin} Placeholder='Confirm Password' Type='password'/>
              <Button >Sign In</Button>
          </form>
          <span>Already have Account?<a href="/" className='pl-3 text-blue-400'>Login Here</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Signup
