import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        {/* Bad idea, as this does a new request to the server, losing app-wide state */}
        {/* <li>
            <a href="/portfolio">Portfolio</a>
        </li> */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
