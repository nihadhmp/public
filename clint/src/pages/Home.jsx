import Navbar from "../components/Navbar";
import Background from "../assets/bg.jpg";
import Tablet from "../components/Tablet";

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Navbar />
        <div className="w-full h-screen flex justify-center items-center">
          <Tablet />
        </div>
      </div>
    </>
  );
}

export default Home;
