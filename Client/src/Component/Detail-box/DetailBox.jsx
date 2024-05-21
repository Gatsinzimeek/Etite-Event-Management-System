

const DetailBox = ({children,...otherProps}) => {
    const {heading} = otherProps;
  return (
    <div className="rounded-md bg-white px-7 py-5 mx-8 my-4 h-[70%]">
      <h1 className="mb-2 font-[550] text-[18px]">{heading}</h1>
      <div className="overflow-scroll scrollbar-thin overflow-x-hidden h-[90%]">
        
      {children}
      </div>
    </div>
  )
}

export default DetailBox
