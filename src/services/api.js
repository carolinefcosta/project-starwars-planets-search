import { useEffect, useState } from 'react';

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [filterApi, setFilterApi] = ([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((result) => {
        // setData(result);
        setData(result.results);
        // setFilterApi(result.results);
      });
    setLoading(false);
  }, []);

  return [loading, data, setData];
}

export default useFetch;
