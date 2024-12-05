export type TodoData = {
  title: string;
  description: string;
};

export type TodoResponse = {
  id: number;
  title: string;
  description: string;
};

export type TodoItemProps = {
  todo: TodoResponse;
};

export type UpdateTodoData = {
  id: number;
  title: string;
  description: string;
};

export interface EditTodoProps {
  onSubmit: (data: UpdateTodoData) => void;
  currentTitle: string;
  currentDescription: string;
}
