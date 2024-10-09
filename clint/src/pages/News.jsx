import Background from "../assets/bgnews.jpg";
import Navbar from "../components/Navbar";

function News() {
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

export default News;
