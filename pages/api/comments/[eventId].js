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
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
    };
    console.log("newComment", newComment);

    res.status(201).json({ message: "Comment added", comment: newComment });
    return;
  } else if (method === "GET") {
    console.log("Retrieving comments");
    const dummyList = [
        {id: 'c1', name: 'Anders', text: 'This is such good stuff'},
        {id: 'c2', name: 'Emma', text: 'Who writes this great?'}
    ]
    res.status(200).json({ message: "Comments retrieved", comments: dummyList });
    return;
  }

  res.status(405).json({ message: `${method} method not allowed.` });
  //   console.log(req)
}
