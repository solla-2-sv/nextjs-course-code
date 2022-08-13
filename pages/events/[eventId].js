import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Event Details Page</h1>
      <code>{JSON.stringify(router.query)}</code>
    </div>
  );
}

export default EventDetailPage;
