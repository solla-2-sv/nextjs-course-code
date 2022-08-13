import { useRouter } from "next/router";

function EventSlugPage() {
    const router = useRouter();
    
  return (
    <div>
      <h1>Event Slug Page (for searching)</h1>
      <code>{JSON.stringify(router.query)}</code>
    </div>
  );
}

export default EventSlugPage;
