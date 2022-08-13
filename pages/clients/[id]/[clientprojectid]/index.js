import { useRouter } from "next/router";

function SelectedClientProject() {
  const router = useRouter();

  return (
    <div>
      <h1>Project page for specific project for specific client</h1>
      <p>
        <code>{JSON.stringify(router.query)}</code>
      </p>
    </div>
  );
}

export default SelectedClientProject;
