import { useState, useEffect } from 'react';

const useAxios = (configObj) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {},
  } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [reload, setreload] = useState(0);

  const refetch = () => setreload(prev => prev + 1);

  useEffect(() => {
    // to cancel the request if needed to prevent memory leak
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal // attaching the abortcontroller to the request
        });
        console.log(res);
        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    // useEffect cleanup function
    // this will run when the component unmounts
    // this will cancel the request to prevent memory leak
    return () => controller.abort();

    // we want this hook to run when the component mounts and if reload changes
    // the following line will disable the eslint-warning messages
    // eslint-disable-next-line
  }, [reload])

  return [response, error, loading, refetch]
}

export default useAxios