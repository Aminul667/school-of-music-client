const PopularInstructor = ({instructor}) => {

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={instructor.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
