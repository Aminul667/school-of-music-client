import useClasses from "../../../hooks/useClasses";
import PopularInstructor from "./PopularInstructor";

const PopularInstructors = () => {
  const [classes] = useClasses();
  return (
    <div>
      <h2 className="titlePrimary">Our Popular Instructors</h2>
      <div className="grid grid-cols-3">
        {classes.map((instructor) => (
          <PopularInstructor
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
