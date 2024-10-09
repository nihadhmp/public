import { Link } from "react-router-dom";
import Countrylist from "./Countrylist";

function Navbar() {
  return (
    <>
      <div className="flex justify-between px-36 py-3 bg-teal-900">
        <ul className="w-2/5 pr-20 text-xl font-semibold flex justify-between text-slate-300 ">
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
    </>
  );
}

export default Navbar;
