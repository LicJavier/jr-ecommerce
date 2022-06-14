import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountContainer from './components/CountContainer/CountContainer';
import Title from './components/Title/Title';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title />
      <ItemListContainer/>
    </div>
  );
}

export default App;
