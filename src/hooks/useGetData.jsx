import axios from "axios";
import { useEffect, useState } from "react";

// const API_KEY = "31a2443faf807b3a1b32b34ae159d609";

function useGetData({ url }) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  async function getData(url) {
    if (!url) return;
    setLoader(true);
    try {
      await axios.get(url).then((res) => {
        if (res.data.results) {
          setData(res?.data?.results);
        } else if (res.data) {
          setData(res?.data);
        }

        setLoader(false);
      });
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    return data;
  }
  useEffect(() => {
    if(url) getData(url);
  }, [url]);

  return { data, loader, getData };
}

export default useGetData;
