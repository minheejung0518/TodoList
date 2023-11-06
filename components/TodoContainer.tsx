import React from "react"

const TodoContainer = ({children}) => {
    return (
      <div className="TodoContainer">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
      </div>
    );
};


export default TodoContainer;