import { AiOutlineMenu } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import logo from "/building.png";
const NavBar = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <nav className="flex justify-between items-center p-4">
        <h1 className="flex items-center">
          {" "}
          <img className="w-10 h-10" src={logo} alt="logo" />
          Build Vision
        </h1>
        <AiOutlineMenu />
        <div className="flex items-center space-x-3">
          <span>Contact</span>
          <span>
            <BsBoxArrowInUpRight />
          </span>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
