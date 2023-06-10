import useClasses from "../../../hooks/useClasses";
import PopularInstructor from "./PopularInstructor";

const PopularInstructors = () => {
  const [classes] = useClasses();
  return (
    <div>
      <h2 className="text-4xl">{classes.length}</h2>
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
