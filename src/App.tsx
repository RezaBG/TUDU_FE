import "./App.css";
import TodoList from "./components/TodoList.tsx";
import CreateTodo from "./components/CreateTodo.tsx";
import { useMemo, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { axiosInstance } from "./api/axiosInstance.ts";

type TodoData = {
  title: string;
  description: string;
};

type TodoResponse = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  const [showForm, setShowForm] = useState(false);

  const mutation = useMutation({
    mutationFn: async (newTodo: TodoData) => {
      await axiosInstance.post<TodoResponse>("todos", newTodo);
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      setShowForm(false);
    },
    onError: () => {
      setShowForm(true);
    },
  });

  const handleAddTodo = () => {
    setShowForm(!showForm);
  };

  const handleSubmitTodo = (newTodo: TodoData) => {
    mutation.mutate(newTodo);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <h1>My Todo App</h1>
      <button onClick={handleAddTodo}>
        {showForm ? "Cancel" : "Add Todo"}
      </button>
      {showForm && <CreateTodo onSubmit={handleSubmitTodo} />}
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
