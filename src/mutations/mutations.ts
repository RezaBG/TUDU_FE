import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoData, TodoResponse } from "../types";
import { axiosInstance } from "../api/axiosInstance.ts";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: TodoData) => {
      await axiosInstance.post<TodoResponse>("todos", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {},
  });
};
