import { useForm } from "react-hook-form";
import { EditTodoProps, UpdateTodoData } from "../types";
import { Button } from "@nanotome/bob";

const EditTodo = ({
  onSubmit,
  currentTitle,
  currentDescription,
  todoId,
}: EditTodoProps & { todoId: number }) => {
  const { register, handleSubmit, reset } = useForm<UpdateTodoData>({
    defaultValues: {
      title: currentTitle,
      description: currentDescription,
      id: todoId,
    },
  });

  const handleFormSubmit = (data: UpdateTodoData) => {
    onSubmit(data);
    reset();
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
      <Button onClick={handleSubmit(handleFormSubmit)}>Update Todo</Button>
    </form>
  );
};

export default EditTodo;
