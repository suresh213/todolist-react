import React from 'react';

const ToDo = ({ toDo, toDos, setToDos }) => {
  const deleteList = () => {
    const alteredToDoList = toDos.filter((i) => i != toDo);
    setToDos(alteredToDoList);
  };

  return (
    <div className='todo-list'>
      <div className='name'>{toDo}</div>
      <button className='delete-btn' onClick={deleteList}>
        Delete
      </button>
    </div>
  );
};

export default ToDo;
