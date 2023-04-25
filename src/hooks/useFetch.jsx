import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = ({ url, param }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, {
        params: param,
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "d7c3095c7emsh6b01ef081707fa2p1b5a21jsnaaaeb090b4f2",
          "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
        },
      });
      setData(res.data);
    } catch (err) {
      setError(
        err?.response ? err?.response?.data?.message : "could not connect"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    await fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
