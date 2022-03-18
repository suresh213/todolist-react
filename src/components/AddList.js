import React, { useState } from 'react';

const AddList = ({ toDos, setToDos }) => {
  const [newToDo, setToDo] = useState('');

  const addList = (e) => {
    e.preventDefault();

    if (newToDo.trim().length == 0) {
      setToDo('');
      return;
    }

    const alteredToDoList = [...toDos, newToDo];
    setToDos(alteredToDoList);
  };

  return (
    <form className='add-list' onSubmit={addList}>
      <input
        value={newToDo}
        onChange={(e) => setToDo(e.target.value)}
        type='text'
        required
      />
      <button className='add-btn' type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddList;
