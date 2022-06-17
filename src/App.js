import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountContainer from './components/CountContainer/CountContainer';
import Title from './components/Title/Title';
import "./App.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
