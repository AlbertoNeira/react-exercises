import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    
      <div>
      <h1>Welcome to my super app!</h1>
      <Counter/>
    </div>
  
    </div>
  );
}

export default App;
