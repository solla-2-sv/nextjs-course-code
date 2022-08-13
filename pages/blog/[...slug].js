import { useRouter } from "next/router";

function BlogSlug() {
  const router = useRouter();
  return (
    <div>
      <h1>Blog Slug</h1>
      <p>
        <code>{JSON.stringify(router.query)}</code>
      </p>
    </div>
  );
}

export default BlogSlug;
