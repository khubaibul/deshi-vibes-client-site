import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Route';
import { setUser, toggleLoading } from './features/auth/authSlice';
import auth from './firebase/Firebase.config';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
      else {
        dispatch(toggleLoading())
      }
    })
  }, [dispatch]);



  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
