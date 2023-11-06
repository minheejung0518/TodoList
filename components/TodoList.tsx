import React from 'react';
import { useState, useRef} from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todolists, setTodolist}) => {

  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const handleEditng = (id) => {
    setEditing(!editing);
    setEditId(id);
  }

  const deleteTodo = (id) =>{
    const Removedlist = todolists.filter((todolist) => todolist.id !== id)
    setTodolist(Removedlist);
  }


  
 return(
    <div className="TodoList">
   {todolists?.map((item, index) => (
     <div key= {item.id}>
       <input type="checkbox" />
       <span>{item.text}</span>
       <button onClick= {() => handleEditng(item.id)}>수정</button>
       <button className="remove" onClick={() => deleteTodo(item.id)}>삭제</button>
         <TodoListItem todolists={todolists} setTodolist={setTodolist} item={item} editId={editId} setEditId={setEditId} editing={editing} setEditing={setEditing} handleEditng={handleEditng} ></TodoListItem>
     </div>
  ))}
  </div>
);

}

export default TodoList;