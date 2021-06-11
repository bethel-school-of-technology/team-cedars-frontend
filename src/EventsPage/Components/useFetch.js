import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const abortCont = new AbortController();


      setTimeout(() => {
        fetch(url, {signal: abortCont.signal})
          .then(res => {
            // to catch API errs and check res objects
            if (!res.ok) {
              throw Error('could not fetch the data for that resourse')
            }
            return res.json()
          })
          .then(data => {
            setData(data);
            setError(null);
          })
          // to catch any kind of error
          .catch(err => {
              if(err.name === 'AbortError') {
                  console.log('fetch aborted');
              } else {
                  setError(err.message);
              }
            // Display err !res.ok
            setError(err.message);
          })
      });

      return () => abortCont.abort();


    }, [url]);

    return {data, error}
}
export default useFetch