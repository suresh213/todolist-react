import React, { useState } from 'react';
import AddList from './AddList';
import ToDo from './ToDo';

const ToDoApp = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>ToDo List</h3>
      <AddList toDos={toDos} setToDos={setToDos} />
      <div className='all-todos'>
        {toDos.map((toDo) => (
          <ToDo toDo={toDo} toDos={toDos} setToDos={setToDos} />
        ))}
      </div>
    </>
  );
};

export default ToDoApp;
