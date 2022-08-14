import { useEffect, useState } from "react";
import useSWR from "swr";

const firebaseBase =
  "https://react-goofing-around-default-rtdb.firebaseio.com/";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const salesURL = firebaseBase + "sales.json";
  //   console.log(salesURL);
  const { data, error } = useSWR(salesURL, (url) =>
    fetch(url).then((res) => res.json())
  );
  //   console.log("data: ", data);
  //   console.log("error: ", error);

  useEffect(() => {
    // console.log("useEffect: data: ", data);
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   console.log("data: ", data);
  //   console.log("error: ", error);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(salesURL)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           const transformedSales = [];
  //           for (const key in data) {
  //             transformedSales.push({
  //               id: key,
  //               username: data[key].username,
  //               volume: data[key].volume,
  //             });
  //           }
  //           setSales(transformedSales);
  //         }
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const salesURL = firebaseBase + "sales.json";
  return fetch(salesURL)
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return {
        props: {
          sales: transformedSales,
        },
        // revalidate: 10,
      };
    });
  // return result;
}

export default LastSalesPage;

// For later:
// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
