import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  fasLabtopCode,
  faLaptopCode,
  faBlog,
  faPen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faContao,
  faFacebookMessenger,
  faWpforms,
} from "@fortawesome/free-brands-svg-icons";
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">My Journey</Link>
          </li>

          <li>
            <Link href="/work">My Work</Link>
          </li>

          <li>
            <Link href="/blog">Blog</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <mobileNav className="mobileNav">
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>
              <FontAwesomeIcon icon={faCode} />
              My Journey
            </a>
          </Link>
        </div>
        <div>
          <Link href="/work">
            <a>
              <FontAwesomeIcon icon={faLaptopCode} />
              My Work
            </a>
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <a>
              <FontAwesomeIcon icon={faPen} />
              Blog
            </a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a>
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </a>
          </Link>
        </div>
      </mobileNav>

      <main>{children}</main>

      <footer>
        <p>© 2022 Ahmad Nagm</p>
      </footer>
    </>
  );
};

export default Layout;
