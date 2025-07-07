import { useQuery } from "@tanstack/react-query";
import { getUser as getUserApi } from "../../services/apiAuth";

export function useGetUser() {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    refetchOnWindowFocus: true, // refait la requête si tu reviens sur l’onglet
    retry: 1, // réessaye une fois si erreur
    staleTime: 1000 * 60 * 5, // garde les données 5 minutes en cache
  });
  return { isLoading, user };
}
