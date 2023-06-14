import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const {
    data: allClasses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await fetch("https://b712-school-of-music-server.vercel.app/all-class");
      return res.json();
    },
  });

  return [allClasses, loading, refetch];
};

export default useAllClasses;
