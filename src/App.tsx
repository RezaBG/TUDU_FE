import "./App.css";
import TodoList from "./components/TodoList.tsx";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const handleAddTodo = () => {};

  return (
    <QueryClientProvider client={queryClient}>
      <h1>My Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
