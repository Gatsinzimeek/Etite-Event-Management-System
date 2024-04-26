
const Button = ({children, ...otherProps}) => {
  return (
    
    <button type='submit' className="p-[10px] py-[13px] outline-none mb-3 bg-blue-400 text-white w-[94%] m-auto rounded-md">{children}</button>
  )
}

export default Button
