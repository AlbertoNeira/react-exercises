
import './App.css';

import InteractiveWelcome from './components/InteractiveWelcome';

import TodoList from './components/ToDoList';
import DisplayLanguage from './components/DisplayLanguage';
import LanguageProvider from './components/LanguageProvider';
import ClickCounter from './components/ClickCounter';

function App() {
  
  
  
  const handleReset = (name) => {
    // Logic to clear the additional input in the parent component
    console.log('Clearing additional input...');
  };

  const handleCounterChange = (counterValue) => {
    console.log('Counter changed:', counterValue);
    // Perform any desired actions with the counter value
  };
  
  return (
    <div className="App">
      <div>
        <h1>Welcome to my super app!</h1>

        <InteractiveWelcome onReset={handleReset} />
        
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
      </div>
    </div>
  );
}

export default App;
