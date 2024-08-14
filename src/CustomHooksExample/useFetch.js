import { useEffect, useState } from "react";

const cache = {};

function useFetch(model) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache[model]) {
      setData(cache[model]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/" + model
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        cache[model] = result;
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(false);
  }, [model]);

  return { data, loading, error };
}

export default useFetch;
