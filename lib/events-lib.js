const baseURL = "https://react-goofing-around-default-rtdb.firebaseio.com/";
const eventsURL = baseURL + "events.json";

function transformFirebaseToArray(eventData) {
  const eventsArray = [];
  for (const key in eventData) {
    eventsArray.push({
      id: key,
      ...eventData[key],
    });
  }

  return eventsArray;
}

export async function getAllEvents() {
  const result = await fetch(eventsURL);
  //   console.log("getAllEvents#result:", result);

  const json = await result.json();
  // console.log("getAllEvents#json:", json);

  const data = transformFirebaseToArray(json);
  //   console.log("getAllEvents#data:", data);

  return data;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  //   console.log("getFeaturedEvents#allEvents", allEvents);

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventIDs() {
  const result = await fetch(eventsURL);
  const json = await result.json();

  return Object.keys(json);
}

export async function getSingleEvent(id) {
  const url = baseURL + "events/" + id + ".json";
  const result = await fetch(url);
  const json = await result.json();
//   console.log('getSingleEvent#json', json)

  const data = {
    id,
    ...json,
  };
  return data;
}

export async function getFilteredEvents(dateFilter) {
    const { year: yearstr, month: monthStr } = dateFilter;
  
    const year = +yearstr;
    const month = +monthStr;
    
    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }