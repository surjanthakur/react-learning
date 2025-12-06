import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // check if the user is authenticated or not
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="h-screen w-full">its working</div>
      )}
    </>
  );
}

export default App;
