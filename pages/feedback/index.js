import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState()
  function loadFeedbackHandler(id) {
    console.log('Get details for ', id)
    fetch(`/api/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setFeedbackData(data.feedback);
    });
  }
  return (
    <Fragment>
        {feedbackData && <p>{feedbackData.email}</p>}
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>
          {item.text}{" "}
          <button onClick={loadFeedbackHandler.bind(null, item.id)}>
            Show details
          </button>
        </li>
      ))}
    </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  // Relative URLs are not allowed here
  //   const response = fetch("/api/feedback");
  //   const data = await response.json();
  const data = extractFeedback(buildFeedbackPath());

  return {
    props: {
      feedbackItems: data,
    },
  };
}
export default FeedbackPage;
