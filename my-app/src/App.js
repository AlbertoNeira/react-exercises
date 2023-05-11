
import './App.css';

import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/Login';

function App() {
  
  const handleLogin = (credentials) => {
    // Perform login logic using the credentials
    console.log('Logging in with:', credentials);
  }
  
  
  return (
    <div className="App">
    
      <div>
      <h1>Welcome to my super app!</h1>
      <InteractiveWelcome/>
      <Login onLogin={handleLogin}/>
    </div>
  
    </div>
  );
}

export default App;
