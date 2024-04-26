
const Input = ({Placeholder,Type,refer}) => {
  return (
    <input ref={refer} type={Type} placeholder={Placeholder} className='p-[13px] outline-none m-3  rounded-md' />
  )
}

export default Input
