import access from "../../../assets/images/icons/unlimitedAccess.png";
import teacher from "../../../assets/images/icons/expertTeacher.png";
import anywhere from "../../../assets/images/icons/learnAnywhere.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="mb-5">
      <h2 className="titlePrimary">
        Our Services</h2>
      <div className="flex justify-evenly">
        <motion.div className="text-center w-[250px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={access} className="mx-auto mb-4" />
          <h2 className="text-2xl font-oswald mb-1">Unlimited Access</h2>
          <p className="text-xl font-oswald">
            One subscription unlimited access
          </p>
        </motion.div>
        <motion.div className="text-center w-[250px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={teacher} className="mx-auto mb-4" />
          <h2 className="text-2xl font-oswald mb-1">Expert Teachers</h2>
          <p className="text-xl font-oswald">
            Learn from industry experts who are passionate about teaching
          </p>
        </motion.div>
        <motion.div className="text-center w-[250px]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={anywhere} className="mx-auto mb-4" />
          <h2 className="text-2xl font-oswald mb-1">Learn Anywhere</h2>
          <p className="text-xl font-oswald">
            Switch between your computer, tablet, or mobile device
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
