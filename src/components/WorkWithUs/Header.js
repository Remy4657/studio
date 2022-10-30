import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="header-work d-flex flex-column">
    <div className="header-nav d-flex flex-row justify-content-between">
      <div className="logo-work"></div>
      <div className="header-task">
        <ul className="d-flex flex-row justify-content-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">News</Link>
          </li>
          <li>
            <Link to="#">Rocket's Life</Link>
          </li>
          <li>
            <Link to="#">Play With Us</Link>
          </li>
          <li>
            <Link to="/work-with-us">Work With Us</Link>
          </li>
          <li>
            <Link to="#">Publish With Us</Link>
          </li>
        </ul>
      </div>
      <div className="header-extra d-flex flex-row">
        <i class="icon icon-glass fa-solid fa-magnifying-glass"></i>
        <p className="icon en">EN</p>
        <p className="icon vn">VN</p>
        <i class="icon icon-down fa-solid fa-chevron-down"></i>
        <i class="icon icon-glass2 fa-solid fa-magnifying-glass"></i>
        <i class="icon icon-menu fa-solid fa-bars"></i>
      </div>
    </div>
    <div className="header-work_text">
      <h1>Work With Us</h1>
      <span></span>
    </div>
  </div>
);
export default Header;
