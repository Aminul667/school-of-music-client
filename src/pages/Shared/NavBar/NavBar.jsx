import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex justify-center items-center lg:w-[20%]">
          <img src={logo} />
          <div className="ml-3 text-2xl lg:pl-0 font-oswald">SchoolOf<span className="text-colorPrimaryDark">Music</span></div>
        </div>
        <div className="m-5 lg:hidden" id="menu-button">
          <h2 className="text-4xl font-bold">P</h2>
        </div>
        <div className="h-20 w-screen lg:w-[70%] clip-custom" id="menu">
          <div>
            <div className="flex items-center justify-center h-8 border-x-0 border-colorPrimaryDark border-b-2">
              <ul className="flex gap-6 font-bold">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/instructor">Instructors</Link>
                </li>
                <li>
                  <Link to="classes">Classes</Link>
                </li>
                {user ? (
                  <>
                    <button onClick={handleLogOut}>Logout</button>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {user ? (
              <>
                <div className="flex items-center justify-center">
                  <ul className="flex h-12 gap-10 md:pt-[0.7rem] uppercase text-sm md:text-lg font-bold">
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                    {isAdmin ? (
                      <li>
                        <Link to="/manageusers">Manage Users</Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {isInstructor ? (
                      <>
                        <li>
                          <Link to="/addclass">Add a class</Link>
                        </li>
                        <li>
                          <Link to="/myclass">My Classes</Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {
                      !isAdmin & !isInstructor ? <>
                      <li>
                        <Link to='/selectedclass'>Selected Class</Link>
                      </li>
                      </>: ''
                    }
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-[10%] hidden lg:block">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={user?.photoURL} title={user?.displayName} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
