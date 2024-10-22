import "./App.css";
import TodoList from "./components/TodoList.tsx";
import CreateTodo from "./components/CreateTodo.tsx";
import { useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

  const handleSubmitTodo = async (newTodo: TodoData) => {
    try {
      const response = await axiosInstance.post<TodoResponse>("todos", newTodo);
      console.log("Todo created:", response.data);
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      // await queryClient.invalidateQueries("todos");
      setShowForm(false);
    } catch (error) {
      console.log("Error creating todo", error);
    }
  };

  const handleAddTodo = () => {
    setShowForm(!showForm);
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
