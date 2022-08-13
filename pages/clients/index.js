import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
    { id: "solla", name: "Anders" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          
          <li key={client.id}>
            <code>{JSON.stringify(client)}</code>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {id: client.id}
                // query: client 
                // This second version will add the name as ?name=TheName, i.e. the
                // unused bracket values are added as query params
              }}
            >
              {client.name}
            </Link>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
