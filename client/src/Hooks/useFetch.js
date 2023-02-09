import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { data, setData };
};

export default useFetch;
