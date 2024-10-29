import { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";

const News = () => {
  const [search, setSearch] = useState("india");
  const API_KEY = "08d50e67d5e34db482169e37e7844e86";
  const [newsData, setNewsData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  const handleinput = async (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [search, getData]);

  return (
    <>
      <div className=" justify-center items-center bg-slate-200">
        <Navbar />
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mb-5">
            <input
              className="py-2 px-20 mt-2 rounded-l-lg bg-white"
              placeholder="Search News"
              onChange={handleinput}
              onKeyPress={(e) => e.key === "Enter" && handleinput()}
            ></input>
            <butoon className="py-2 px-2 rounded-r-lg bg-white font-bold text-slate-600 mt-2">
              <FaSearch onClick={getData} className="size-6 " />
            </butoon>
          </div>

          <div className="hidden lg:flex w-1/2 justify-around items-center">
            <button
              onClick={() => setSearch("sports")}
              className="bg-white rounded-lg px-11 py-2 font-bold text-slate-600 mt-3"
            >
              Sports
            </button>
            <button
              onClick={() => setSearch("politics")}
              className="bg-white rounded-lg px-11 py-2 font-bold text-slate-600 mt-3"
            >
              Politics
            </button>
            <button
              onClick={() => setSearch("entertainment")}
              className="bg-white rounded-lg px-4 py-2 font-bold text-slate-600 mt-3"
            >
              Entertainment
            </button>
            <button
              onClick={() => setSearch("health")}
              className="bg-white rounded-lg px-11 py-2 font-bold text-slate-600 mt-3"
            >
              Health
            </button>
          </div>
          <div className="">
            <Card data={newsData} />
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
