import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";

const SingleClasse = ({ singleClass, index }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  const handleSelect = (id) => {
    console.log(id);
    console.log(!user);
    if (!user) {
      return navigate("/login", { state: { from: location } });
    }
  };

  return (
    <tr className={singleClass.availableSet === 0 ? "bg-red-300" : ""}>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={singleClass.image} />
          </div>
        </div>
      </td>
      <td>{singleClass.className}</td>
      <td>{singleClass.instructorName}</td>
      <td>{singleClass.availableSet}</td>
      <td>{singleClass.price}</td>
      <th>
        <button
          onClick={() => handleSelect(singleClass._id)}
          className="btn btn-primary"
          disabled={singleClass.availableSet === 0 || isAdmin || isInstructor}
        >
          Select Now
        </button>
      </th>
    </tr>
  );
};

export default SingleClasse;
