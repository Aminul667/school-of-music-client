import useAllClasses from "../../hooks/useAllClasses";

const Classes = () => {
  const [allClasses] = useAllClasses();
  console.log(allClasses);
  return (
    <div>
      <h2>This is classes component</h2>
    </div>
  );
};

export default Classes;
