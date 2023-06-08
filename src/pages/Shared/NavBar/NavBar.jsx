import logo from '../../../assets/images/logo.png'

const NavBar = () => {
    return (
        <nav>
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex justify-center items-center lg:w-[20%]">
                <img src={logo} />
                <div className="ml-3 text-2xl lg:pl-0">
                    SchoolOfMusic
                </div>
            </div>
            <div className="m-5 lg:hidden" id="menu-button">
                <h2 className='text-4xl font-bold'>P</h2>
            </div>
            <div className="h-20 w-screen lg:w-[70%] clip-custom" id="menu">
                <div>
                    <div className="flex items-center justify-center h-8 border-x-0 border-colorPrimaryDark border-b-2">
                        <ul className="flex gap-6 font-bold">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Instructors</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <ul className="flex h-12 gap-10 md:pt-[0.7rem] uppercase text-sm md:text-lg font-bold">
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">career</a></li>
                            <li><a href="#">features</a></li>
                            <li><a href="#">gallery</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[10%] hidden lg:block">
                <div className="flex items-center justify-center">
                    {/* <img className="w-4 h-4 mr-3 " src="/static_files/svgs/phone-flip-solid.svg" alt="phone"> */}
                    <div className="font-bold text-black ">
                        900 234-1234
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;