import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import App from './App';

const App1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); 
  }, []);

  if (loading) return <Loading />;

  return <App />;
};
console.log("If you are seeing this then fuck yeah, the code is working!");

export default App1;
