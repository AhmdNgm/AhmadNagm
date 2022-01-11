import React from "react";
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
import { useRouter } from "next/router";
import react, { useState, useEffect } from "react";
const NavBar = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <div>
      <nav className={navbar ? "navFixed" : ""}>
        <ul>
          <li>
            <Link href="/">
              <a className={`${router.pathname === "/" ? "navActive" : ""} `}>
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a
                className={`${
                  router.pathname === "/about" ? "navActive" : ""
                } `}
              >
                My Journey
              </a>
            </Link>
          </li>

          <li>
            <Link href="/work">
              <a
                className={`${router.pathname === "/work" ? "navActive" : ""} `}
              >
                My Work
              </a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a
                className={`${router.pathname === "/blog" ? "navActive" : ""} `}
              >
                Blog
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a
                className={`${
                  router.pathname === "/contact" ? "navActive" : ""
                } `}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <mobileNav className="mobileNav">
        <div>
          <Link href="/">
            <a className={`${router.pathname === "/" ? "mobActive" : ""} `}>
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a
              className={`${router.pathname === "/about" ? "mobActive" : ""} `}
            >
              <FontAwesomeIcon icon={faCode} />
              My Journey
            </a>
          </Link>
        </div>
        <div>
          <Link href="/work">
            <a className={`${router.pathname === "/work" ? "mobActive" : ""} `}>
              <FontAwesomeIcon icon={faLaptopCode} />
              My Work
            </a>
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <a className={`${router.pathname === "/blog" ? "mobActive" : ""} `}>
              <FontAwesomeIcon icon={faPen} />
              Blog
            </a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a
              className={`${
                router.pathname === "/contact" ? "mobActive" : ""
              } `}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </a>
          </Link>
        </div>
      </mobileNav>
    </div>
  );
};

export default NavBar;
