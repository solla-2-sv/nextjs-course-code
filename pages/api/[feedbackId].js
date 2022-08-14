import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function handler(req, res) {
    // Sloppy, not checking method here
  const { method, query } = req;
  const feedbackId = query.feedbackId;
  console.log("feedbackId", feedbackId)

  const feedbackData = extractFeedback(buildFeedbackPath());

  const feedbackItem = feedbackData.find(feedback => feedback.id === feedbackId);

  res.status(200).json({feedback: feedbackItem});

}

export default handler;
