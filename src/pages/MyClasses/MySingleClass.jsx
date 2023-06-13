const MySingleClass = ({ myClass, index }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={myClass.image} />
          </div>
        </div>
      </td>
      <td>{myClass.className}</td>
      <td>{myClass.availableSet}</td>
      <td>{myClass.price}</td>
      <td>0</td>
      <td>None</td>
      <td>Pending</td>
      <td>
        <button className="btn btn-ghost bg-orange-600 text-white">
          Update
        </button>
      </td>
    </tr>
  );
};

export default MySingleClass;
