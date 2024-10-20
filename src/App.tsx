import "./App.css";
import TodoList from "./components/TodoList.tsx";

function App() {
  const handleAddTodo = () => {};

  return (
    <>
      <h1>My Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </>
  );
}

export default App;
