import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Silas", email: "silasaugusto300@gmail.com" },
    };
    //const response = await api.post("/validate", { token });
    // return response.data;

  },
  signin: async (email: string, password: string) => {
    //Solicitação para o endpoint pra fazer login
    //const response = await  api.post('/signin', {email, password});
    return {
      user: { id: 3, name: "Silas", email: "silasaugusto300@gmail.com" },
      token: "123456789",
    };
    //return response.data;
  },
  logout: async () => {
    return  {status: true}
    //const response = await api.post("/logout");
    //return response.data;
  },
});
