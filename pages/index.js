import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../lib/events-lib";

function HomePage({ events: featuredEvents }) {
  // console.log("events:", featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getFeaturedEvents();
  // console.log("getStaticProps#events", events);

  return {
    props: {
      events,
    },
  };
}
export default HomePage;
