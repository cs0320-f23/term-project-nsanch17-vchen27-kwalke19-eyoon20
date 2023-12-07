import "../style/Header.css";
import Logo from "../assets/image-logo.png";

const Header = () => {
  return (
    <div className="master-navbar">
      <div className="left-side-menu">
        <div className="logo-and-home1">
          <img className="ivy-exchange-logo-transparent2" alt="" src={Logo} />
          <div className="home3">Ivy Exchange</div>
        </div>
        <div className="search-bar">
          <div className="search-here">Search here...</div>
          <img
            className="vuesaxlinearsearch-normal-icon1"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
        </div>
      </div>
      <div className="right-side-menu">
        <div className="notif-theme">
          <img
            className="interface-heart-011"
            alt=""
            src="/interface--heart-01.svg"
          />
          <img
            className="interface-heart-011"
            alt=""
            src="/communication--chat.svg"
          />
          <img
            className="interface-heart-011"
            alt=""
            src="/communication--bell-notification.svg"
          />
        </div>
        <div className="profile-picture">
          <img
            className="profile-picture-icon"
            alt=""
            src="/profile-picture@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
