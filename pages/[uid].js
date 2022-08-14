function UserDetailPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;

  console.log("Server-side rendering");

  return {
    props: {
      id: "userid-" + params.uid,
    },
  };
}
