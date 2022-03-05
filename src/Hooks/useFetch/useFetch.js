import React, {useState, useEffect} from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {data, loading, error};
};
export default useFetch;
