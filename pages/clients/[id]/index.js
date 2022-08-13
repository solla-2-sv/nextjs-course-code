import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    //load data ...
    // router.push('/clients/max/projecta')
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: router.query.id,
        clientprojectid: "otherproject",
        queryParam: "gobbledygook",
      },
    });
  }
  return (
    <div>
      <h1>The Clients Projets Page: id == {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;
