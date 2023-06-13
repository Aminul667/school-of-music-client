import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const {
    data: allClasses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-class");
      return res.json();
    },
  });

  return [allClasses, loading, refetch];
};

export default useAllClasses;
