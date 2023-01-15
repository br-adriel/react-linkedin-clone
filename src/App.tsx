import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import { RootState } from './store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
