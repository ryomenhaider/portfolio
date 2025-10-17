import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Loading from './components/Loading';
=======
import Loading from './Loading';
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
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
