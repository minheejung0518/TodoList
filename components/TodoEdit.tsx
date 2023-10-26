// import React from 'react';
// import { useState } from 'react';

// const TodoEdit = (props) => {
//   const { todolists, setTodolist, index, todoEditing, setTodoEditing, onUpdateTodo, item } = props;

//   const [value, setValue] = useState('');
//   function onChange(e) {
//     setValue(e.target.value);
//   }

//   // const [text, setText] = useState(todolists.text);

//   const onSubmit = (e) => {
//     onUpdateTodo(item.id, value);
//     setValue('');
//     e.preventDefault();
//   }

//     // const editTodo = () => {
//     //   if(text.length > 0) {
//     //     onUpdateTodo({
//     //       index : index,
//     //       item : {
//     //         id,
//     //         text,
//     //         checked
//     //       }
//     //     });
//     //   }
//     // }

//     return (
//         <div className="modify">
//         <h2>수정하기</h2>
//         <form onSubmit={onSubmit}>
//           <input
//             className="modify-input"
//             type='text'
//             onChange={onChange}
//             value={value}
//             placeholder="수정할 할 일을 입력하세요"
//           />
//           <button type="submit">수정하기</button>
//         </form>
//        </div>


//     );

// } 
// export default TodoEdit;

