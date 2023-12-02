import "../style/WelcomeContainer.css";
import Logo from "../assets/image-logo.png";

const WelcomeContainer = () => {
  return (
    <div className="title">
      <div className="breadcrumbs">
        <div className="home4">Home</div>
        <div className="svg1">
          <img className="vector-icon4" alt="" src={Logo} />
        </div>
        <div className="recommendations">Recommendations</div>
      </div>
      <div className="welcome">Welcome to Ivy Exchange!</div>
      <div className="description">
        Online marketplace for Brown students and staff to buy and resell
        concert tickets, clothing, and more!
      </div>
    </div>
  );
};

export default WelcomeContainer;
