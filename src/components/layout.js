// module
import * as React from "react";
import { Link } from "gatsby";
// css
import "../styles/global.scss";
// image
import Instagram from "../../static/instagram-icon.png";
import Github from "../../static/github-icon.png";
import LinkedIn from "../../static/linkedin-icon.png";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <header className="content-grid" data-is-root-path={isRootPath}>
        <div
          className="full-width header d-flex justify-content-center align-items-center"
          style={{ gap: 50, paddingInline: 20 }}
        >
          <Link to="/" className="text-button" itemProp="url">
            REACT CHALLENGES
          </Link>
          <Link to="/about-me" className="text-button" itemProp="url">
            ABOUT ME
          </Link>
        </div>
      </header>
      <main style={{ backgroundColor: "#dda15e" }}>{children}</main>
      <footer className="content-grid" data-is-root-path={isRootPath}>
        <div
          className="full-width footer d-flex flex-column justify-content-center align-items-center"
          style={{ gap: 10 }}
        >
          <span>
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
          <div
            className="d-flex justify-content-center aling-items-center"
            style={{ gap: 50 }}
          >
            <a
              href="https://www.instagram.com/warrant_jiayou_xd/"
              itemProp="url"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} style={{ width: 50 }} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/warrant-tsai-20463414b/"
              itemProp="url"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} style={{ width: 50 }} alt="" />
            </a>
            <a
              href="
              https://github.com/warranttsai/"
              itemProp="url"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} style={{ width: 50 }} alt="" />
            </a>
          </div>
          <span>EMAIL: warrant1997@gmail.com</span>
          <span>MOBILE: 0450601208</span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
