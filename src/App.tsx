import { useDispatch, useSelector } from 'react-redux';
import AppBody from './components/AppBody';
import Feed from './components/Feed';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { RootState } from './store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
      </AppBody>
    </>
  );
}

export default App;
