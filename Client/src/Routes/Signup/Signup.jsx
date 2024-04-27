import RegistBg from '../../assets/Regist.png'
import Input from "../../Component/Input/input"
import Button from "../../Component/Button/Button"
import { useState } from 'react'
const Signup = () => {
  const [Username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [Cpin, setCpin] = useState('');
  const [error, setError] = useState(null);

  const handleClick = (e) =>{
    e.preventDefault();
    if(!Username || !pin || !Cpin) {
      setError('Please fill All filled');
    }else if(pin !== Cpin){
      setError('Wrong password confirm');
    }else{
      setError(null)
    }
    setCpin('')
    setUsername('')
    setPin('')
  }


  return (
    <section className='flex w-full h-full relative flex-wrap items-center max-md:grid max-md:p-[30px] Container'>
        {
          error !== null && <div className='text-white bg-blue-300 absolute top-4 right-5 w-[24%] p-[18px] rounded-xl'>{error}</div>
        }
        <div className=' w-[50%] max-md:w-full'>
          <img src={RegistBg} alt="login-bg" className='w-[90%]'/>
        </div>
        <div className='w-[50%] max-sm:w-full  gap-10 text-center p-20'>
          <div className='m-[20px]'>
            <h1 className='text-[30px] font-[600]'> Welcome</h1>
            <p>Create your account</p>
          </div>
          <form method='POST' onSubmit={handleClick} className='grid w-[70%] m-auto'>
              <Input val={Username} handleChange={ e => setUsername(e.target.value)} Placeholder='Username' Type='text' />
              <Input val={pin} handleChange={ e => setPin(e.target.value)} Placeholder='Password' Type='password'/>
              <Input  val={Cpin} handleChange={ e => setCpin(e.target.value)}  Placeholder='Confirm Password' Type='password'/>
              <Button >Sign In</Button>
          </form>
          <span>Already have Account?<a href="/" className='pl-3 text-blue-400'>Login Here</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Signup
