import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const request = await fetch(url, { signal: controller.signal });
        if (!request.ok) {
          throw new Error('Error: while fetching data.');
        }

        const response = await request.json();
        setData(response);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Something went wrong.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (url) fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}
