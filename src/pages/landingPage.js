import { useEffect, useState } from "react";
import Header from "../components/header";
import Item from "../components/item";
import Slider from "../components/slider";
import axios from "axios";

export default function LandingPage() {
  const [searchItem, setSearchItem] = useState("ba");
  const [searched, setSearched] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleChange_ = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      axios
        .post("https://deezer-test-api.herokuapp.com/api/search", {
          searchTerm: e.target.value,
        })
        .then(function (response) {
          console.log(response.data);
          setSearched(response.data);
          setLoaded(true);
        })
        .catch(function (error) {
          console.log(error);
          setLoaded(true);
        })
        .then(function () {
          setLoaded(true);
        });
    }
  };

  useEffect(() => {
    search();
  }, [loaded]);

  const search = () => {
    axios
      .post("https://deezer-test-api.herokuapp.com/api/search", {
        searchTerm: searchItem,
      })
      .then(function (response) {
        console.log(response.data);
        setSearched(response.data);
        setLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoaded(true);
      })
      .then(function () {
        setLoaded(true);
      });
  };

  return (
    <>
      <div>
        <div className="relative bg-sky-700  overflow-hidden">
          <Header handleChange={handleChange_} />
          <Slider />
        </div>

        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              {loaded && (
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {searched.map((data, index) => (
                    <Item key={index} item={data} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
