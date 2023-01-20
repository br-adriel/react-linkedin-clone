import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { auth } from './services/firebase';
import { login, logout } from './store/user/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth)
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
          } as User)
        );
      else dispatch(logout());
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
