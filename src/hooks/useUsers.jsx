import { useQuery } from "@tanstack/react-query";

const useUsers = ({ email }) => {
  if (email) {
    console.log(email);
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
  }
  return [];
};

export default useUsers;
