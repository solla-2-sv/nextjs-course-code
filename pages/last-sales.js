import { useEffect, useState } from "react";

const firebaseBase =
  "https://react-goofing-around-default-rtdb.firebaseio.com/";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(firebaseBase + "sales2.json")
      .then((response) => response.json())
      .then((data) => {
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
        setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!sales) {
    return <p>No data yet!</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.key}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;

// For later:
// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))