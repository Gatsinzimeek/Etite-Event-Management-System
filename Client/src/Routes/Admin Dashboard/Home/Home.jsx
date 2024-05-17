import { faCalendar, faTicket, faUsers } from "@fortawesome/free-solid-svg-icons"
import Card from "../../../Component/Card/Card-Info"
import DetailBox from "../../../Component/Detail-box/DetailBox"
import EventDetail from "../../../Component/Event-Detail/EventDetail"
const Main = () => {
  const UpcomingEventInfo = [
    {
      classname: 'bg-green-400',
      date:  '24 June 2014',
      EventName: 'Digital Marketing Summit',
      EventOrgainizer: 'Gatsinzi',
      City: 'Newyork City',
      StartTime: '09.00 AM',
      EndTime: '05:00 pm' 
    },
    {
      classname: 'bg-yellow-400',
      date:  '24 June 2014',
      EventName: 'Digital Marketing Summit',
      EventOrgainizer: 'Gatsinzi',
      City: 'Newyork City',
      StartTime: '09.00 AM',
      EndTime: '05:00 pm' 
    },
    {
      classname: 'bg-red-400',
      date:  '24 June 2014',
      EventName: 'Digital Marketing Summit',
      EventOrgainizer: 'Gatsinzi',
      City: 'Newyork City',
      StartTime: '09.00 AM',
      EndTime: '05:00 pm' 
    },
    {
      classname: 'bg-blue-400',
      date:  '24 June 2014',
      EventName: 'Digital Marketing Summit',
      EventOrgainizer: 'Gatsinzi',
      City: 'Newyork City',
      StartTime: '09.00 AM',
      EndTime: '05:00 pm' 
    }
  ]
  return (
    <>
    <div className="flex flex-wrap justify-center">
        <Card heading='New Events' number='234' icon={faCalendar}></Card>
        <Card heading='User Registration' number='12,234' icon={faUsers}></Card>
        <Card heading='Ticket Sold' number='2394' icon={faTicket}></Card>
    </div>
    <div className="flex">
        <DetailBox heading='Upcoming Events'>
          {
            UpcomingEventInfo.map( (data,index) =>  (
            <EventDetail key={index} Date ={data.date} classnam={data.classname} EventName = {data.EventName} OrganizerName ={data.EventOrgainizer} cityName={data.City} StartTime={data.StartTime} EndTime={data.EndTime} />
              )
            )
          }
        </DetailBox>
        {/* <DetailBox heading='Recent Events'>
            <EventDetail />
        </DetailBox>
        <DetailBox heading='Ticket Sold'>
            <EventDetail />
        </DetailBox>
        <DetailBox heading='My Clients'>
            <EventDetail />
        </DetailBox> */}
    </div>
    </>
  )
}

export default Main
