import useAllClasses from "../../hooks/useAllClasses";
import SingleClasse from "./SingleClasse";

const Classes = () => {
  const [allClasses] = useAllClasses();
  console.log(allClasses);
  return (
    <div>
      <h2 className="titlePrimary">All Classes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((singleClass, index) => (
              <SingleClasse
                key={singleClass._id}
                index={index + 1}
                singleClass={singleClass}
              ></SingleClasse>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
