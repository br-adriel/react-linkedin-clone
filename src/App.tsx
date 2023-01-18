import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
