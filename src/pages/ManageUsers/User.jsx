import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const User = ({ user, index }) => {
  const handleMakeAdmin = (user) => {};

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
