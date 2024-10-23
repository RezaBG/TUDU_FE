import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem.tsx";
import { axiosInstance } from "../api/axiosInstance.ts";
// import { TodoData } from "../types";

type Todo = {
  id: number;
  title: string;
  description: string;
};

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
  if (error instanceof Error) return <div>{error.message}</div>;
  if (!todos?.length) {
    return <div>No todos available</div>;
  }

  return (
    <div>
      {todos?.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};

export default TodoList;
