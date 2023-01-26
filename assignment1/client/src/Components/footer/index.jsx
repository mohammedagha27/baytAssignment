import './style.css';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillFacebook,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Aligrandpa</h3>
        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>
          <a href="/">Blog</a>

          <a href="/">Pricing</a>

          <a href="/">About</a>

          <a href="/">Faq</a>

          <a href="/">Contact</a>
        </p>

        <p className="footer-company-name">Aligrandpa © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
        </div>

        <div>
          <i className="fa fa-phone" />
          <p>+970 599 999 99</p>
        </div>

        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">support@Aligrandpa.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Aligrandpa</span>
          Im Aligrandpa master of all online shops
        </p>
        <div className="footer-icons">
          <a href="/">
            <SiTwitter />
          </a>
          <a href="/">
            <AiFillLinkedin />
          </a>
          <a href="/">
            <AiOutlineGithub />
          </a>
          <a href="/">
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
