import Navbar from "../components/Navbar";
import Background from "../assets/bghotels.jpg";

function Hotels() {
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

export default Hotels;
