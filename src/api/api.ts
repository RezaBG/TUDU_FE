// export const fetchTodos = async () => {
//   const token = localStorage.getItem("access_token");
//   const response = await fetch("http://localhost:8000/todos", {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//
//   if (!response.ok) {
//     throw new Error("Failed to fetch todos");
//   }
//   return response.json();
// };
