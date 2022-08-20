import { useEffect } from "react";
import { getData } from "../../api/get/getData";

const useGetData = (url, setData) => {
  useEffect(() => {
    (async () => {
      const res = await getData(url);
      setData(res);
    })();
  }, []);
};

export default useGetData;
