import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem.tsx";
import { axiosInstance } from "../api/axiosInstance.ts";
import { TodoResponse } from "../types";

const fetchTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

const TodoList = () => {
  const {
    data: todos = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) {
    console.log("Error fetching todos", error);
    return <div>{error.message}</div>;
  }
  if (!todos?.length) {
    return <div>No todos available</div>;
  }

  return (
    <div>
      {todos?.map((todo: TodoResponse) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
