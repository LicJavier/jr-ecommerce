import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Title from './components/title/Title';
import "./App.css";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Nosotros from './components/nosotros/Nosotros';
import { CartProvider } from './context/CartContext';
import CartWiew from './components/cartWiew/CartWiew';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Title />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/nosotros' element={<Nosotros />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
