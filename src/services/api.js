import { useEffect, useState } from 'react';

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((result) => setData(result.results));
    setLoading(false);
  }, []);

  return [loading, data];
}

export default useFetch;
