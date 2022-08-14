// fs can only be used in static side, not browser side
import path from "path";
import fs from "fs/promises";

import Link from 'next/link'

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("context:", context);
  // console.log("process.cwd():", process.cwd());
  console.log("(Re-)Generating ...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // console.log("filePath:", filePath);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  // console.log("data:", data);

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/no-data'
  //     }
  //   }
  // }
  // if (data.products.length === 0) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
export default HomePage;
