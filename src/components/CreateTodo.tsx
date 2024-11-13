import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "../mutations/mutations.ts";
import { TodoData } from "../types";

const CreateTodo = () => {
  const { register, handleSubmit, reset } = useForm<TodoData>();

  const mutation = useCreateTodoMutation();

  const handleFormSubmit = async (data: TodoData) => {
    try {
      mutation.mutate(data);
      reset();
    } catch (error) {
        console.log("Failed to create todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title", { required: true })} />
      </div>
      <div>
        <label>Description</label>
        <textarea {...register("description", { required: true })}></textarea>
      </div>
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default CreateTodo;
