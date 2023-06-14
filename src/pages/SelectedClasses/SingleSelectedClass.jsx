const SingleSelectedClass = ({ selected, index, handleDelete }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={selected.image} />
          </div>
        </div>
      </td>
      <td>{selected.className}</td>
      <td>{selected.availableSet}</td>
      <td>{selected.price}</td>
      <td>
        <button className="btn btn-ghost bg-orange-600 text-white" onClick={()=> handleDelete(selected._id)}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-ghost bg-orange-600 text-white">
          Pay Now
        </button>
      </td>
    </tr>
  );
};

export default SingleSelectedClass;
