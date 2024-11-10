import { TodoItemProps, UpdateTodoData } from "../types";
import EditTodo from "./EditTodo.tsx";
import { useState } from "react";
import { useUpdateTodoMutation } from "../mutations/mutations.ts";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateTodoMutation = useUpdateTodoMutation();

  const toggleEditingForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateTodo = (updatedTodo: UpdateTodoData) => {
    updateTodoMutation.mutate(updatedTodo, {
      onSuccess: () => {
        setIsEditing(false);
      },
      onError: (error) => {
        console.log("Field to update todo", error);
      }
    });
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
          <button onClick={toggleEditingForm}>
            <FaEdit /> Edit
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
