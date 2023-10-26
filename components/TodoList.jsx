import React from 'react';
import { useState, useRef} from 'react';
import TodoItem from './TodoItem';

export default function TodoList () {
  const [inputlist, setInputlist] = useState('');  
  const [todolists, setTodolist] = useState([]);

  const [todoEditing, setTodoEditing] = useState(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  const nextId = useRef(1);

  function handleChange(e) {
    setInputlist(e.target.value);
  }

  function onChange(e) {
    setValue(e.target.value);
  }

  const onUpdateSubmit = (e) => {
    onUpdateTodo(item.id, value);
    setValue('');
    e.preventDefault();
  }

  function onSubmit(e) {
    setInputlist('');
    e.preventDefault();
  }

  const addTodo = () => {
    const newTask = {
        id: nextId.current,
        text:inputlist,
        checked: false,
        isEdit: editing,
        editValue: "",
        editId: "",
    };
    setTodolist([...todolists, newTask]);
    nextId.current++;
    setInputlist('');
  }

  const handleRemove = (id) =>{
    const Removedlist = todolists.filter((todolist) => todolist.id !== id)
    setTodolist(Removedlist);
  }

  const updateTodo = (id,text) => {
    setTodolist((todolists) => todolists.map((todolist) => (todolist.id === id ? {...todolist, text} : todolist))
  )};

  const handleEditng = (index) => {
    setTodoEditing(id); 
    setEditing(!editing);
  }

return(
<div className='Todo'>
  <h1>To do List</h1>
  <form onSubmit={onSubmit}>
        <input className="input" type='text' value={inputlist} onChange={handleChange} placeholder="Enter a task"/>
        <button onClick={addTodo}>Add</button>
  </form>
  {todolists.map((item, index) => (
    <div key= {item.id}>
      <input value={item.checked} type="checkbox" />
      <span>{item.text}</span>
      <button onClick={() => handleEditng(index)}>수정</button>
      {(editing && todoEditing ===index) &&  
       <div className="modify">
        <h2>수정하기</h2>
        <form onSubmit={onUpdateSubmit}>
          <input
            className="modify-input"
            type='text'
            onChange={onChange}
            value={value}
            placeholder="수정할 할 일을 입력하세요"
          />
          <button type="submit">수정하기</button>
        </form>
       </div>}
      <button onClick={() => handleRemove(item.id)}>삭제</button>
    </div>
 ))}
  </div>

);

}
