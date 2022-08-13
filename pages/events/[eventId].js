import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>Event Details Page</h1>
      <code>{JSON.stringify(router.query)}</code>
    </div>
  );
}

export default EventDetailPage;
