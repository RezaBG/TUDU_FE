import { useForm } from "react-hook-form";
import { EditTodoProps, UpdateTodoData } from "../types";

const EditTodo = ({
  onSubmit,
  currentTitle,
  currentDescription,
  todoId,
}: EditTodoProps & { todoId: number }) => {
  const { register, handleSubmit } = useForm<UpdateTodoData>({
    defaultValues: {
      title: currentTitle,
      description: currentDescription,
      id: todoId,
    },
  });

  const handleFormSubmit = (data: UpdateTodoData) => {
    onSubmit(data);
  };

  return (
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title", {required: true})} />
        </div>
        <div>
          <label>Description</label>
          <textarea {...register("description", {required: true})}></textarea>
        </div>
        <button type="button" onClick={handleSubmit(handleFormSubmit)}>
          Update Todo
        </button>
      </form>
  );
};

export default EditTodo;
