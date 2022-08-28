export default function handler(req, res) {
  const { body, method } = req;

  console.log("body, method", body, method)
  res.status(201).json({msg: 'All well', user: body.email});
}
