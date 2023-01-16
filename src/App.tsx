import { useDispatch, useSelector } from 'react-redux';
import AppBody from './components/AppBody';
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
      </AppBody>
    </>
  );
}

export default App;
