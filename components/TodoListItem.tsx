import React from 'react';
import { useState} from 'react';

const TodoListItem = ({editId, setEditId, editing, setEditing, handleEditng, item, todolists, setTodolist  }) => {

    const [updatedTodo, setUpdatedTodo] = useState('');

    function onChange(e) {
        setUpdatedTodo(e.target.value);
      }
    
      const onUpdateSubmit = (e) => {
        setUpdatedTodo('');
        e.preventDefault();
      }
    
      const updateTodo = (id,text) => {
        setTodolist((todolists) => todolists.map((todolist) => (todolist.id === id ? {...todolist, text : text} : todolist))
      )};



    return ( 
       <>
        {(editId === item.id && editing) &&  
            <div className="TodoListItem">
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
      </> 
    );





}

export default TodoListItem;