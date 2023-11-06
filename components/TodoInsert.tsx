import React from "react"

const TodoInsert = ({inputTodo, setInputTodo, todolists, setTodolist, nextId }) => {

    function onSubmit(e) {
        setInputTodo('');
        e.preventDefault();
      }

    function handleChange(e) {
        setInputTodo(e.target.value);
      }

      const addTodo = () => {
        setTodolist([...todolists, {id : nextId.current++, text: inputTodo, checked :false}]);
        setInputTodo('');
      }
      

return (
   <form className="TodoInsert" onSubmit={onSubmit}>
        <input className="input" value={inputTodo} onChange={handleChange} placeholder="Enter a task"/>
        <button onClick={addTodo}>Add</button>
   </form>
);
}    

export default TodoInsert;