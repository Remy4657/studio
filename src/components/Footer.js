import "./Footer.css";
const Footer = () => (
  <div className="footer d-flex flex-row justify-content-between">
    <div className="footer-contact d-flex flex-row justify-content-between">
      <div className="logo"></div>
      <div className="about">
        <ul>
          <li>ABOUT</li>
          <li>OUR GAMES</li>
          <li>SUBMIT YOUR GAMES</li>
          <li>News</li>
        </ul>
      </div>
      <div className="support">
        <ul>
          <li>
            <i class="fa-regular fa-envelope"></i>SUPPORT
          </li>
          <li>
            <i class="fa-regular fa-envelope"></i>GENERAL ENQUIRIES
          </li>
          <li>
            <i class="fa-regular fa-envelope"></i>JOIN OUR TEAM
          </li>
        </ul>
      </div>
    </div>
    <div className="media d-flex">
      <div className="flex flex-row">
        <span>
          <i class="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i class="fa-brands fa-youtube"></i>
        </span>
        <span>
          <i class="fa-brands fa-tiktok"></i>
        </span>
      </div>
    </div>
  </div>
);
export default Footer;
