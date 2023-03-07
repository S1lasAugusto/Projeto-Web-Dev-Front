import { useApi } from "./useApi"

// eslint-disable-next-line
export const useHomeList = async () => {
  const api = useApi();

  return [{
    slug: "movies",
    title: 'Todos os filmes',
    items: await api.getMovies()
  },
  ]
}