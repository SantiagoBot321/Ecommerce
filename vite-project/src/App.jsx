import { useContext } from 'react';
import Header from './components/Header'
import PageContext from './context/PageContext';
import Login from './components/Login';
import Picture from './components/Picture';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';


function App() {
  const {page} =
    useContext(PageContext)
  return (
    <>
      <Header />
      {page == null ? <h1>página principal</h1> : null}
      {page == "login" ? <Login /> : null}
      <Picture /> 
      <ProductGrid />
      <Footer />
    </>
  );
};

export default App;
