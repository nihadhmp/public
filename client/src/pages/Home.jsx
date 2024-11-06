import Navbar from "../components/Navbar";
import Background from "../assets/bg.jpg";
import Tablet from "../components/Tablet";
import Footer from "../components/footer";

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
        <div className="w-full h-screen flex lg:justify-center lg:items-center">
          <Tablet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
