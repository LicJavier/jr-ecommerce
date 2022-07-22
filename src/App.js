import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Title from './components/title/Title';
import "./App.css";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Nosotros from './components/nosotros/Nosotros';
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import { OrderProvider } from './context/OrderContext';
import Galery from './components/contact/Galery';
import ErrorMsj from './components/ErrorMsj';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <NavBar/>
            <Title />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/galery' element={<Galery />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
    </div>
  );
}

export default App;
