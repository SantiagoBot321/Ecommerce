import { useContext } from 'react';
import Header from './components/Header'
import PageContext from './context/PageContext';
import Login from './components/Login';
import Picture from './components/Picture';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Purchases from './components/Purchases';

function App() {
  const {page} =
    useContext(PageContext)
  return (
    <>
      <Header />
        {page == null ?<> <Picture/> <ProductGrid /></>: null}
        {page == "login" ? <Login /> : null}
        {page == "acces" ? <> <Picture/> <ProductGrid /></> : null}
        {page === "purchases" ? <> <Purchases /> </> : null}
        {page == "Mi carrito" ? <> <h2>Mi carrito</h2> </> : null}
      <Footer />
    </>
  );
};

export default App;
