import { useForm } from "react-hook-form";

type FormData = {
  title: string;
  description: string;
};

interface CreateTodoProps {
  onSubmit: (data: FormData) => void;
}

const CreateTodo = ({ onSubmit }: CreateTodoProps) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    try {
      onSubmit(data);
      reset();
    } catch (error) {
      console.log("Error creating todo", error);
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
