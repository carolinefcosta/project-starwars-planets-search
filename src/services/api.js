import { useEffect, useState } from 'react';

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setOrigin(result.results);
      });
    setLoading(false);
  }, []);

  return [loading, data, setData, origin];
}

export default useFetch;
