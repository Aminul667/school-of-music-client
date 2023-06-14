import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SingleClasse = ({ singleClass, index }) => {
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  const handleSelect = (id) => {
    if (!user) {
      return navigate("/login", { state: { from: location } });
    }
    const { className, instructorName, email, availableSet, price, image } =
      singleClass;
    const selectedClass = {
      id,
      className,
      instructorName,
      email,
      availableSet,
      price,
      image,
      userEmail: user.email,
    };

    axiosSecure.post("/selected-class", selectedClass).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class has been successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
          className="btnPrimary"
          disabled={singleClass.availableSet === 0 || isAdmin || isInstructor}
        >
          Select Now
        </button>
      </th>
    </tr>
  );
};

export default SingleClasse;
