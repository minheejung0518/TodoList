// import React from 'react';
// import { useState } from 'react';
// import TodoEdit from './TodoEdit';

// export default function TodoItem ({todolists,setTodolist,updateTodo}) {

// const [todoEditing, setTodoEditing] = useState(null);
// const [editing, setEditing] = useState(false);

// const updateTodo = ({index, item}) => {
//   let newTodos = todolists.slice();
//   newTodos[index] = item;
//   setTodolist(newTodos);
//   setTodoEditing(null);
// }

//  const handleRemove = (id) =>{
//     const Removedlist = todolists.filter((todolist) => todolist.id !== id)
//     setTodolist(Removedlist);
//   }

//   const handleEditng = (index) => {
//     setTodoEditing(index); 
//     setEditing(!editing);
//   }
//  return (
//   <>
//   {todolists.map((item, index) => (
//     <div key={index}>
//       <input value={item.checked} type="checkbox" />
//       <span>{item.text}</span>
//       <button onClick={() => handleEditng(index)}>수정</button>
//       {(editing && todoEditing ===index) && <TodoEdit item={item} todolists={todolists} setTodolist={setTodolist} index={index} todoEditing={todoEditing} setTodoEditing={setTodoEditing} updateTodo={updateTodo}></TodoEdit>}
//       <button onClick={() => handleRemove(item.id)}>삭제</button>
//     </div>
//  ))}
//   </>

//  )
// }