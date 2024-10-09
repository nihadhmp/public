import Background from "../assets/bgtravel.jpg";
import Navbar from "../components/Navbar";

function Travels() {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Navbar />
      </div>
    </>
  );
}

export default Travels;
