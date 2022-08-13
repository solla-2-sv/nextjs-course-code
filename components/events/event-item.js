import Link from "next/link";

const example = {
  id: "e3",
  title: "Networking for extroverts",
  description:
    "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
  location: "My Street 12, 10115 Broke City",
  date: "2022-04-10",
  image: "images/extrovert-event.jpg",
  isFeatured: true,
};

function EventItem(props) {
  const { title, image, date, location, id } = props.event;
  console.log("Single items:", title, image, date, location, id);
  const humandReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humandReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
