import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AppBody from '../components/AppBody';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { RootState } from '../store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) return <Navigate to='/login' />;
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
      </AppBody>
    </>
  );
};

export default Home;
