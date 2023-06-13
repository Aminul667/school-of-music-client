import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: usersDb = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  return [usersDb, loading, refetch];
};

export default useUsers;
