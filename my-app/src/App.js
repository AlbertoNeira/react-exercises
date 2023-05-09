
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    
      <div>
      <h1>Welcome to my super app!</h1>
      <Counter initialValue={5} incrementInterval={500} incrementAmount={10}/>
    </div>
  
    </div>
  );
}

export default App;
