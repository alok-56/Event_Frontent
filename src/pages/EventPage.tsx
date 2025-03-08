import EventsList from "../components/Event/events-list"
import NavBar from "../components/layout/NavBar"


const EventPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar/>
      <EventsList/>
    </div>
  )
}

export default EventPage