import { useContext } from 'react';
import Header from './components/Header'
import PageContext from './context/PageContext';
import Login from './components/Login';

function App() {
  const {page} =
    useContext(PageContext)
  return (
    <>
      <Header />
      {page == null ? <h1>página principal</h1> : null}
      {page == "login" ? <Login /> : null}
    </>
  );
};

export default App;
