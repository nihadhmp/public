import { Link } from "react-router-dom";
import Countrylist from "./Countrylist";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

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
          <FaBars
            onClick={openSidebar}
            className="text-slate-300 items-start size-7 "
          />
          <Countrylist />
        </div>
      </nav>

      {sidebar && (
        <nav className="bg-teal-950 w-2/3 h-screen p-3 absolute">
          <section className="flex justify-between ">
            <ul className="text-xl font-semibold flex flex-col justify-between gap-y-10  text-slate-300 ">
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
            <div>
              <FaRegWindowClose
                className="size-8 text-slate-300 hover:text-white"
                onClick={closeSidebar}
              />
            </div>
          </section>
        </nav>
      )}
    </>
  );
}

export default Navbar;
