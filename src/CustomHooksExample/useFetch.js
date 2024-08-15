import { useEffect, useState } from "react";

let cache = {};

function useFetch(model) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (model) => {
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

  useEffect(() => {
    if (cache[model]) {
      console.log("From Cache");
      setData(cache[model]);
      setLoading(false);
      return;
    }

    if (!cache[model]) {
      fetchData(model);
      return;
    }

    const id = setInterval(() => {
      console.log("refetching");
      cache = {};
      fetchData(model);
    }, 1000 * 10);

    return () => clearInterval(id);
  }, [model]);

  return { data, loading, error };
}

export default useFetch;
