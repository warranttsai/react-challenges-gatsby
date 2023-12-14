import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.scss";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="content-grid" data-is-root-path={isRootPath}>
      <header className="full-width header d-flex justify-content-center align-items-center">
        <button class="text-button">REACT CHALLENGES</button>
        <button class="text-button">ABOUT ME</button>
        <button class="text-button">CONTACT</button>
      </header>
      <main className="full-width">{children}</main>
      <footer className="full-width">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
