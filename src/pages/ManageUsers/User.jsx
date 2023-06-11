import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const User = ({ user, index, refetch }) => {

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {};
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user.PhotoURL} />
          </div>
        </div>
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          "admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="btn btn-ghost bg-orange-600 text-white"
          >
            <FaUserShield></FaUserShield>
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(user)}
          className="btn btn-ghost bg-red-600 text-white"
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default User;
