import { Link } from "react-router-dom";
import Countrylist from "./Countrylist";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className=" bg-teal-900 px-3 lg:px-36 py-3 ">
        <div className="hidden lg:flex justify-between ">
          <ul className=" w-2/5 pr-20 text-xl font-semibold flex justify-between text-slate-300 ">
            <li className="hover:text-white">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="hover:text-white">
              <Link to={"/news"}>NEWS</Link>
            </li>
            <li className="hover:text-white">
              {" "}
              <Link to={"/travel"}>TRAVEL</Link>
            </li>
            <li className="hover:text-white">
              <Link to={"/hotels"}>HOTELS</Link>
            </li>
          </ul>
          <Countrylist />
        </div>
        <div className="lg:hidden flex justify-between ">
          <FaBars className="text-slate-300 items-start size-7 " />
          <Countrylist />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
