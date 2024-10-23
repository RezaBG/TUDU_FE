import { TodoItemProps } from "../types";
import { Button } from "@nanotome/bob";
import EditTodo from "./EditTodo.tsx";
import { useState } from "react";

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditingForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateTodo = () => {
    // console.log("Update todo:", updateTodo);
    setIsEditing(false);
  };
  return (
    <div className="todo-item">
      {isEditing ? (
        <EditTodo
          currentTitle={todo.title}
          currentDescription={todo.description}
          onSubmit={handleUpdateTodo}
          todoId={todo.id}
        />
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <Button onClick={toggleEditingForm}>Edit</Button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
