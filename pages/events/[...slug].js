import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventPage() {
  const router = useRouter();
  function findEventsHandler(year, month) {

    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, please fix your values!</p>;
  }

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth});

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for chosen filter.</p>;
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventPage;
