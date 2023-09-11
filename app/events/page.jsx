import Nav from "@/components/Nav/Nav";
import EventsLanding from "@/app/events/events-components/EventsLanding";

function page() {
  return (
    <div className="container">
      <div className="row">
        <Nav />
        <EventsLanding />
      </div>
    </div>
  );
}

export default page;
