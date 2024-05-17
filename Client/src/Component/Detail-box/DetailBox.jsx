import EventDetail from "../Event-Detail/EventDetail"

const DetailBox = ({children,...otherProps}) => {
    const {heading} = otherProps;
  return (
    <div className="rounded-md">
      <h1 className="before:border-l-1">{heading}</h1>
      {children}
    </div>
  )
}

export default DetailBox
