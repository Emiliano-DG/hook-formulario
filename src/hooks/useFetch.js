import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isloading: true,
    errors: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState({
        data,
        isloading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isloading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFetch();
  }, [url]);

  return state;
};
