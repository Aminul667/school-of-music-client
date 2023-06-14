import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MySingleClass from "./MySingleClass";

const MyClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: userClass = [] } = useQuery(
    ["all-class"],
    async () => {
      const res = await axiosSecure.get(`/all-class/${user?.email}`);
      return res.data;
    }
  );

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
              <th>Enrolled</th>
              <th>Feedback </th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {userClass.map((myClass, index) => (
              <MySingleClass
                key={myClass._id}
                index={index + 1}
                myClass={myClass}
              ></MySingleClass>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
