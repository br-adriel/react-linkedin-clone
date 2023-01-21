import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AppBody from '../components/AppBody';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { RootState } from '../store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) return <Navigate to='/login' />;
  return (
    <>
      <Helmet>
        <title>Feed | LinkedIn</title>
      </Helmet>
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
        <Widgets />
      </AppBody>
    </>
  );
};

export default Home;
