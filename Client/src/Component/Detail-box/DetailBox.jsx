

const DetailBox = ({children,...otherProps}) => {
    const {heading} = otherProps;
  return (
    <div className="rounded-md bg-white px-7 py-5 mx-2 my-4 h-fit">
      <div>
      <h1 className="mb-2 font-[550] text-[18px]">{heading}</h1>
      </div>
      <div className="h-[300px] overflow-auto ">
      {children}
      </div>
    </div>
  )
}

export default DetailBox
