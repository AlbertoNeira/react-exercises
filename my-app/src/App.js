
import './App.css';

import InteractiveWelcome from './components/InteractiveWelcome';

import TodoList from './components/ToDoList';

function App() {
  
  const handleLogin = (credentials) => {
    // Perform login logic using the credentials
    console.log('Logging in with:', credentials);
  }
  
  const handleReset = (name) => {
    // Logic to clear the additional input in the parent component
    console.log('Clearing additional input...');
  };
  return (
    <div className="App">
    
      <div>
      <h1>Welcome to my super app!</h1>
      <InteractiveWelcome onReset={handleReset}/>
     <TodoList
     
        render={(items, removeItem, resetItems) => (
          <div>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={resetItems}>Reset</button>
          </div>
        )
      }/>
    </div>
  
    </div>
  );
}

export default App;
