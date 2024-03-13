import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/images/logo.png'

import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo-footer">
          <img src={logo} alt="" width="50px" height="50px" />
          </div>
          <div className="text-center d-flex justify-content-center align-items-center">
            <div className="p-3 ">
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="p-3">
              <a href="#" className="text-light">
               
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="p-3">
              <a href="#"  className="text-light">
              <FontAwesomeIcon icon={faLinkedin} />

              </a>

            </div>
          </div>
          <p className="text-center mb-0">
            All right reserved to kemet &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
