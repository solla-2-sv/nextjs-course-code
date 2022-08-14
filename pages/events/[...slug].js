import { Fragment } from "react";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../lib/events-lib";

function FilteredEventsPage({ events: filteredEvents, year, month }) {

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getStaticPaths(context) {
  // const {params} = context;
  // console.log('params:', params)

  const yearArray = [2020, 2021, 2022];
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const paths = []
  for (const year of yearArray) {
    for (const month of monthArray) {
      const entry = { params: { slug: [year.toString(), month.toString()] } };
      // console.log('entry:', entry)
      paths.push(entry)
    }
  }

  // console.log('genPaths: ', paths)

  return {
    paths,
    // [
    //   { params: { slug: ["2020", "4"] } },
    //   { params: { slug: ["2020", "5"] } },
    //   { params: { slug: ["2021", "4"] } },
    //   { params: { slug: ["2021", "5"] } },
    // ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log("QQQparams:", params);
  const year = params.slug[0];
  const month = params.slug[1];

  const events = await getFilteredEvents({ year, month });

  return {
    props: {
      events,
      year,
      month,
    },
  };
}

export default FilteredEventsPage;
