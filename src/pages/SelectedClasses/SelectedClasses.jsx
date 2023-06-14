import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleSelectedClass from "./SingleSelectedClass";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery(
    ["selected-class"],
    async () => {
      const res = await axiosSecure.get(`/selected-class/${user?.email}`);
      return res.data;
    }
  );

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://b712-school-of-music-server.vercel.app/selected-class/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            alert("Deleted Successfully!");
          }
        });
    }
  };

  return (
    <div>
      <h2 className="titlePrimary">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Action</th>
              <th>Pay Status</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((selected, index) => (
              <SingleSelectedClass
                key={selected._id}
                index={index + 1}
                selected={selected}
                handleDelete={handleDelete}
              ></SingleSelectedClass>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
