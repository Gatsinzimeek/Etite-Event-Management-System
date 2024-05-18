import EventDetail from "../Event-Detail/EventDetail"

const DetailBox = ({children,...otherProps}) => {
    const {heading} = otherProps;
  return (
    <div className="rounded-md bg-white px-7 py-5 mx-8 my-4">
      <h1 className="before:border-l-rose-300 mb-2 font-[550] text-[18px]">{heading}</h1>
      {children}
    </div>
  )
}

export default DetailBox
