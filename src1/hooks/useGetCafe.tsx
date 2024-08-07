import { useState, useEffect } from "react";
import { fetchAllCafes } from "@/utils/api";

const useGetCafe = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCafes = async () => {
    const fetchedCafes = await fetchAllCafes();
    setCafes(fetchedCafes);
    setLoading(false);
  };

  useEffect(() => {
    fetchCafes();
    setCafes(cafes);
  }, []);

  return { cafes, isLoading: loading };
};

export default useGetCafe;
