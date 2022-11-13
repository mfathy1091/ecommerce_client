import { useState, useEffect } from 'react';

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async(configObj) => {
    const {
      axiosInstance,
      method,
      url,
      data = {},
      requestConfig = {},
    } = configObj;

    try {
      setLoading(true);
      setError(null);
      // to cancel the request if needed to prevent memory leak
      const ctr = new AbortController();
      setController(ctr);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        ...data,
        signal: ctr.signal // attaching the abortcontroller to the request
      });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(controller);

    // useEffect cleanup function
    // this will run when the component unmounts
    // this will cancel the request to prevent memory leak
    return () => controller && controller.abort(); // && to avoid initial undefined controller 

  }, [controller])

  return [response, error, loading, axiosFetch]
}

export default useAxiosFunction