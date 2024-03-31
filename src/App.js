import logo from './logo.svg';
import './App.css';
import WhiteCard from './components/WhiteCard';
import BlackCard from './components/BlackCard';

function App() {
  return (
    <div className="App">
      <WhiteCard text="Cayden loves Godzilla Minus One"/> 
      <BlackCard text="Emma loves eggs"/> 
    </div>
  );
}

export default App;
