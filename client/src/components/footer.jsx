import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import WideView from "../assets/WideView.png";

function Footer() {
  return (
    <>
      <footer className="max-w-screen px-20 lg:max-h-96 bg-teal-950 flex flex-col lg:flex-row justify-between items-center">
        <section className="w-full lg:w-3/5 flex flex-col lg:flex-row text-xl justify-around text-slate-400">
          <div>
            <ul className="space-y-7 my-7 lg:m-0">
              <li className="hover:text-white">Get started</li>
              <li className="hover:text-white">Sign in</li>
              <li className="hover:text-white">Sign up</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-7 my-7 lg:m-0">
              <li className="hover:text-white">Privacy policy</li>
              <li className="hover:text-white">Terms and Conditions</li>
              <li className="hover:text-white">About</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-7 my-7 lg:m-0">
              <li className="hover:text-white flex items-center gap-2">
                <FaInstagram />
                Instagram
              </li>
              <li className="hover:text-white flex items-center gap-2">
                <FaTwitter /> Twitter
              </li>
              <li className="hover:text-white flex items-center gap-2">
                <FaFacebook />
                Facebook
              </li>
            </ul>
          </div>
        </section>
        <div className="scale-50 items-start">
          <img src={WideView} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
