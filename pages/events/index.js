import EventList from "../../components/events/event-list";

const EventsPage = () => {
  return (
    <div>
      <h1>The events page</h1>
      <EventList items={dummyData} />
    </div>
  );
};

export default EventsPage;
