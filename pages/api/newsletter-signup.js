export default function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      // Server side validation is not required, but should be used
      // to avoid that the system is hacked.
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    console.log(userEmail);
    res
      .status(201)
      .json({ message: `User ${userEmail} added to newsletter list` });
  }
  //   const { body, method } = req;

  //   console.log("body, method", body, method);
  //   res.status(201).json({ msg: "All well", user: body.email });
}
