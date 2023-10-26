import React from 'react';
import { useState, useRef} from 'react';

export default function TodoList () {
  // const [todoEditing, setTodoEditing] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState('');
  const [inputlist, setInputlist] = useState(''); 
  const [editIndex, setEditIndex] = useState(null);
  const nextId = useRef(4);

  const [todolists, setTodolist] = useState([
    {
      id: 1,
      text: '필라테스 가기',
      checked: false,
      isEdit: false,
      editValue: "",
      editId: "",
    },
    {
      id: 2,
      text: '밥 먹기',
      checked: false,
      isEdit: false,
      editValue: "",
      editId: "",
    },
    {
      id: 3,
      text: '책보기',
      checked: false,
      isEdit: false,
      editValue: "",
      editId: "",
    },
  ]);

  function handleChange(e) {
    setInputlist(e.target.value);
  }

  function onChange(e) {
    setUpdatedTodo(e.target.value);
  }

  const onUpdateSubmit = (e) => {
    setUpdatedTodo('');
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
        isEdit: false,
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
    setTodolist((todolists) => todolists.map((todolist) => (todolist.id === id ? {...todolist, text : text} : todolist))
  )};

  const handleEditng = (id) => {
    console.log(id);
    setEditing(!editing);
    setEditIndex(id);
  }

   return(
    <div className='Todo'>
    <h1>To do List</h1>
    <form onSubmit={onSubmit}>
        <input className="input" type='text' value={inputlist} onChange={handleChange} placeholder="Enter a task"/>
        <button onClick={addTodo}>Add</button>
    </form>
   {todolists?.map((item, index) => (
     <div key= {item.id}>
       <input type="checkbox" />
       <span>{item.text}</span>
       <button onClick= {() => handleEditng(item.id)}>수정</button>
       <button onClick={() => handleRemove(item.id)}>삭제</button>

       {(editIndex === item.id && editing) &&  
       <div className="modify">
        <h2>수정하기</h2>
        <form onSubmit={onUpdateSubmit}>
          <input
            className="modify-input"
            type='text'
            onChange={onChange}
            value={updatedTodo}
            placeholder="수정할 할 일을 입력하세요"
          />
          <button onClick={() => updateTodo(item.id, updatedTodo)}>수정하기</button>
        </form>
      </div>
     }
     </div>
  ))}
  </div>
);

}
