import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "../style/Home.css";
import "../style/App.css";
import { FunctionComponent } from "react";
import FilterContainer from "../components/FilterContainer";
import RecommendedProducts from "../components/RecommendedProducts";
import FeaturesContainer from "../components/FeaturesContainer";
import Footer from "../components/Footer";
import WelcomeContainer from "../components/WelcomeContainer";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  console.log("slay");
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="layoutWelcomeContainer">
          <WelcomeContainer />
        </div>
        <div className="layoutContainer">
          {" "}
          {/* This will contain both the filter and recommended products */}
          <div className="layoutFilterContainer">
            <FilterContainer />
          </div>
          <div className="layoutRecommendedProducts">
            <RecommendedProducts />
          </div>
          <div className="pagination">
            <div
              className={`page-1 ${selectedPage === 1 ? "selected" : ""}`}
              onClick={() => handlePageClick(1)}
            >
              <div className="div">1</div>
            </div>
            <div
              className={`page-2 ${selectedPage === 2 ? "selected" : ""}`}
              onClick={() => handlePageClick(2)}
            >
              <div className="div">2</div>
            </div>
            <div
              className={`page-3 ${selectedPage === 3 ? "selected" : ""}`}
              onClick={() => handlePageClick(3)}
            >
              <div className="div">3</div>
            </div>
            <div className="next">
              <div className="div">»</div>
            </div>
          </div>
        </div>
        <div className="layoutFeaturesContainer">
          <FeaturesContainer />
        </div>
        <div className="layoutFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
