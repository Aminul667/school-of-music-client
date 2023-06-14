import { useQuery } from "@tanstack/react-query";

const useUsers = ({ email }) => {
  if (email) {
    const {
      data: usersDb = [],
      isLoading: loading,
      refetch,
    } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("https://b712-school-of-music-server.vercel.app/users");
        return res.json();
      },
    });

    return [usersDb, loading, refetch];
  }
  return [];
};

export default useUsers;
