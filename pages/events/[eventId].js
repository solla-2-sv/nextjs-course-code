import { Fragment } from "react";
import { useRouter } from "next/router";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getSingleEvent, getEventIDs } from "../../lib/events-lib";

function EventDetailPage({ event }) {
  const router = useRouter();

  const eventId = router.query.eventId;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticPaths(context) {
  const ids = await getEventIDs();
  const transformedIDs = ids.map((id) => ({
    params: { eventId: id },
  }));

  // console.log(transformedIDs)

  return {
    paths: transformedIDs,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { eventId } = params;
  // console.log('getStaticProps:eventId', eventId)

  const event = await getSingleEvent(eventId);
// console.log('getStaticProps#event', event)
  return {
    props: {
      event,
    },
  };
}
export default EventDetailPage;
