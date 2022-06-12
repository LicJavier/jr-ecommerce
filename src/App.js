import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountContainer from './components/CountContainer/CountContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <CountContainer/>
    </div>
  );
}

export default App;
