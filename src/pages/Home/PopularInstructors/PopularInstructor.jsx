import { motion } from "framer-motion";

const PopularInstructor = ({instructor}) => {

  return (
    <motion.div className="mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={instructor.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.Instructor}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularInstructor;
