import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
