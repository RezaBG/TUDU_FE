import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoData, TodoResponse, UpdateTodoData } from "../types";
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

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedTodo: UpdateTodoData) => {
      const response = await axiosInstance.put<TodoResponse>(
        `/todos/${updatedTodo.id}`,
        updatedTodo,
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {},
  });
};
