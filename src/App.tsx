import "./App.css";
import TodoList from "./components/TodoList.tsx";
import CreateTodo from "./components/CreateTodo.tsx";
import { useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  const [showForm, setShowForm] = useState(false);

  const handleAddTodo = () => {
    setShowForm(!showForm);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <h1>My Todo App</h1>
      <button onClick={handleAddTodo}>
        {showForm ? "Cancel" : "Add Todo"}
      </button>
      {showForm && <CreateTodo />}
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
