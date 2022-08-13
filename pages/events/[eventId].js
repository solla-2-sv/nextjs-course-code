import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage() {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        {event.description}
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
