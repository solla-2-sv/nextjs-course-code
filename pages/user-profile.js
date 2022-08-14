function UserProfilePage(props) {
  console.log("UserProfilePage#props: ", props);
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  // console.log("getServerSideProps#context:", context)
  const { params, req, res } = context;
  //   console.log("req:", req)
  //   console.log("res:", res)

  // Useful for adding headers, dealing with cookies, etc.

  return {
    props: {
      fakeEntry: 42,
      username: "Anders",
    },
  };
}
