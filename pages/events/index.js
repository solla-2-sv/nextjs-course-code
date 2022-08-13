import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();

  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {

    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;
