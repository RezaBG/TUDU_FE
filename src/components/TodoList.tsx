import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem.tsx";

const fetchTodos = async () => {
  const token = localStorage.getItem("access_token");
  console.log("Token: ", token);
  const response = await fetch("http://127.0.0.1:8000/todos", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

const TodoList = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>{error.message}</div>;

  return (
    <div>
      {todos.map((todo: { id: number; title: string; description: string }) => (
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
