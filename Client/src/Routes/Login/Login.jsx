import login from './../../assets/Login.png';
import Input from '../../Component/Input/input';
import Button from '../../Component/Button/Button';
const Login = () => {
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
          <form action="" method='POST' className='grid w-[70%] m-auto'>
              <Input Placeholder='Username' Type='text' />
              <Input Placeholder='Password' Type='password'/>
              <Button>Sign In</Button>
          </form>
          <span>Don't have Account?<a href="/signup" className='pl-3 text-blue-400'>Create Account</a></span>
        </div>
        <p className='m-auto p-2'>Powered by Etite Technologies Ltd.</p>
    </section>
  )
}

export default Login
