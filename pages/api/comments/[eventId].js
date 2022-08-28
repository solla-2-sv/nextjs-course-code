export default async function handler(req, res) {
  const { method } = req;
  const { eventId } = req.query;
  //   const body = JSON.parse(req.body);
  const body = req.body;
  console.log("body, method", body, method);
  console.log("eventId", eventId);

  if (method === "POST") {
    console.log("Adding a comment");
    const { email, name, text } = req.body;
    console.log("email, name, text", email, name, text);
  } else if (method === "GET") {
    console.log("Retrieving comments");
  }
  //   console.log(req)

  res.status(200).json({ msg: "to be decided" });
}
