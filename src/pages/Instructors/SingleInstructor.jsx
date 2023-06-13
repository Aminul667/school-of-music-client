const SingleInstructor = ({ instructor }) => {
  return (
    <div className="mb-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={instructor?.PhotoURL} className="w-[300px] h-[300px] rounded-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
          <p>{instructor.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
