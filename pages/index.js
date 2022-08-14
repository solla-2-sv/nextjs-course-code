import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../lib/events-lib";

function HomePage({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
    },
    revalidate: 10,
  };
}
export default HomePage;
