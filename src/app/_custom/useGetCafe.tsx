import { useState, useEffect } from "react";
import { getCafe } from "#/_utils/api";

const useGetCafe = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCafes = async () => {
    const fetchedCafes = await getCafe();
    setCafes(fetchedCafes);
    setLoading(false);
  };

  useEffect(() => {
    fetchCafes();
  }, []);

  return { cafes, isLoading: loading };
};

export default useGetCafe;
