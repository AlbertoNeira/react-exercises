
import './App.css';

import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/Login';

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
     
    </div>
  
    </div>
  );
}

export default App;
