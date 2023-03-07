import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    //Solicitação para o endpoint pra fazer login
    const response = await api.post('/auth/login', { email, password });

    if (response.data.success) {
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    }

    return response.data;
  },
  logout: async () => {
    const response = await api.post("/auth/logout");
    return response.data;
  },
  getMovies: async () => {
    const response = await api.get("/movie/getMovies", {
      params: {
        page: 1,
        pageSize: 10
      }
    });

    return response.data;
  }
});
