import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [] } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    }
  );

  return (
    <div>
      <h2 className="titlePrimary">Our Instructors</h2>
      <div className="grid grid-cols-3">
        {instructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
