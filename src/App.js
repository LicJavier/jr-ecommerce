import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Title from './components/Title/Title';
import "./App.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Title />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
