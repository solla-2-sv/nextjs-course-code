import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    // Store data in database
    // const { email, feedback } = JSON.parse(body); // This works, but seems unnecessary. Why is the next line working?
    const email = body.email;
    const feedback = body.feedback;
    console.log(email, feedback);
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedback,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    // store in database
    console.log("body:", body);
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else if (method === "GET") {
    // Do something else
    const data = extractFeedback(buildFeedbackPath());
    res.status(200).json({feedback: data});
  } else {
    res.status(200).json({message: 'Hello'});
  }
}

export default handler;
