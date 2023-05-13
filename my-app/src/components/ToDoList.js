import React, { useState } from 'react';

const TodoList = ({ render }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') {
      return;
    }

    setItems((prevItems) => [...prevItems, newItem]);
    setNewItem(''); // this is exercise  Lists - Add Todo
  };
  
  const resetItems = () => {
    setItems([]);
  };
  
  const removeItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div >
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add</button>
      {render(items, removeItem, resetItems)}
    </div>
  );
};

export default TodoList;