
const Input = ({...otherPros}) => {
  const {Type, val, Placeholder,handleChange} = otherPros;
  return (
    <input value={val} type={Type} onChange={handleChange} placeholder={Placeholder} className='p-[13px] outline-none m-3  rounded-md' />
  )
}

export default Input
