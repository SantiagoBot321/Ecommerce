import { useContext } from 'react';
import Header from './components/Header'
import PageContext from './context/PageContext';
import Login from './components/Login';
import Picture from './components/Picture';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  const {page} =
    useContext(PageContext)
  return (
    <>
      <Header />
        {page == null ?<> <Picture/> <ProductGrid /> <Footer /></>: null}      
        {page == "login" ? <Login /> : null}
        {page == 'save' ? <> <Register /></> : null}
        {page == "Mi carrito" ? <> <Cart /> </> : null}
    </>
  );
};

export default App;