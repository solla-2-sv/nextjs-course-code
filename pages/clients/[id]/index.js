import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Clients Projets Page: id == {router.query.id}</h1>
    </div>
  );
}

export default ClientsProjectPage;
