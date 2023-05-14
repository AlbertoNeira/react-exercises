
import './App.css';
import React, { useState } from 'react';
import InteractiveWelcome from './components/InteractiveWelcome';

import TodoList from './components/ToDoList';
import DisplayLanguage from './components/DisplayLanguage';
import LanguageProvider from './components/LanguageProvider';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import GithubUserList from './components/GitHubUserList';
import GithubUser from './components/GitHubUser';
import Login from './components/Login';
import CarDetails from './components/CarDetails';

function App() {
  
  const [carData, setCarData] = useState({
    model: '',
    year: '',
    color: ''
  });

  const handleFormSubmit = (data) => {
    // Update the carData state with the submitted form data
    setCarData(data);
  };

  const handleCounterChange = (counterValue) => {
    console.log('Counter changed:', counterValue);
    // Perform any desired actions with the counter value
  };
  
  return (
    <div className="App">
      <div>
        <h1>Welcome to my super app!</h1>

        <Login/>
        <Counter/>
        <ClickCounter onCounterChange={handleCounterChange}/>
        <div className='todo'>
        <TodoList
          render={(items, removeItem, resetItems) => (
            <div >
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
          )}
        />
        </div>
       
        <LanguageProvider>
          <div >
            <h1>Language Selector</h1>
            <DisplayLanguage />
          </div>
        </LanguageProvider>
        
       
        <GithubUser/>
        
        <CarDetails initialData={carData} onFormSubmit={handleFormSubmit} />
          <h2>Submitted Data:</h2>
          <p>Model: {carData.model}</p>
          <p>Year: {carData.year}</p>
          <p>Color: {carData.color}</p>
            
        </div>
    </div>
  );
}

export default App;
