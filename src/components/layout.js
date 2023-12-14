import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.scss";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <header className="content-grid" data-is-root-path={isRootPath}>
        <div
          className="full-width header d-flex justify-content-center align-items-center"
          style={{ gap: 50 }}
        >
          <button class="text-button">REACT CHALLENGES</button>
          <button class="text-button">ABOUT ME</button>
          <button class="text-button">CONTACT</button>
        </div>
      </header>
      <main style={{ backgroundColor: "#dda15e" }}>{children}</main>
      <footer className="content-grid" data-is-root-path={isRootPath}>
        <div className="full-width footer d-flex justify-content-center align-items-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
