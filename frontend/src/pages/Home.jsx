import React from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import "../style/Home.css";
import "../style/App.css";
import { FunctionComponent } from "react";
import Logo from "../assets/image-logo.png";
import FilterContainer from "../components/FilterContainer";
import RecommendedProducts from "../components/RecommendedProducts";
import FeaturesContainer from "../components/FeaturesContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WelcomeContainer from "../components/WelcomeContainer";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="home">
      <img className="ivy-exchange-logo-transparent" alt="" src={Logo} />
      <FilterContainer />
      <div className="recommended">
        <div className="spansf-select-custom-trigger">
          <div className="div">Recommended</div>
        </div>
      </div>
      <div className="spansf-select-custom-trigger1">
        <div className="svg">
          <img className="vector-icon" alt="" src={Logo} />
        </div>
      </div>
      <div className="pagination">
        <div
          className={`page-1 ${selectedPage === 1 ? "selected" : ""}`}
          onClick={() => handlePageClick(1)}
        >
          <div className="div">1</div>
        </div>
        <div
          className={`page-2 ${selectedPage === 1 ? "selected" : ""}`}
          onClick={() => handlePageClick(2)}
        >
          <div className="div">2</div>
        </div>
        <div
          className={`page-3 ${selectedPage === 1 ? "selected" : ""}`}
          onClick={() => handlePageClick(3)}
        >
          <div className="div">3</div>
        </div>
        <div className="next">
          <div className="div">»</div>
        </div>
      </div>
      <NavBar />
      <RecommendedProducts />
      <FeaturesContainer />
      <Footer />
      <WelcomeContainer />
    </div>
  );
};

export default Home;
