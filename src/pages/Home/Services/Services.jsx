import access from "../../../assets/images/icons/unlimitedAccess.png";
import teacher from "../../../assets/images/icons/expertTeacher.png";
import anywhere from "../../../assets/images/icons/learnAnywhere.png";

const Services = () => {
  return (
    <div className="mb-5">
        <h2 className="titlePrimary">Our Services</h2>
      <div className="flex justify-evenly">
        <div className="text-center w-[250px]">
          <img src={access} className="mx-auto mb-4"/>
          <h2 className="text-2xl font-oswald mb-1">Unlimited Access</h2>
          <p className="text-xl font-oswald">One subscription unlimited access</p>
        </div>
        <div className="text-center w-[250px]">
          <img src={teacher} className="mx-auto mb-4"/>
          <h2 className="text-2xl font-oswald mb-1">Expert Teachers</h2>
          <p className="text-xl font-oswald">Learn from industry experts who are passionate about teaching</p>
        </div>
        <div className="text-center w-[250px]">
          <img src={anywhere} className="mx-auto mb-4" />
          <h2 className="text-2xl font-oswald mb-1">Learn Anywhere</h2>
          <p className="text-xl font-oswald">Switch between your computer, tablet, or mobile device</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
