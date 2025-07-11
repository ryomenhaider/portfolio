import React, { useState, useEffect } from 'react';
import Loading from './Loading';
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

export default App1;
