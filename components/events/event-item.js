import Button from "../ui/button";

import classes from "./event-item.module.css";

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
  //   console.log("Single items:", title, image, date, location, id);

  const humandReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humandReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
            <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
