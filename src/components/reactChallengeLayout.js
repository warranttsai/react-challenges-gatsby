// module
import * as React from "react";
import { Link } from "gatsby";

const ReactChallengeLayout = ({ children }) => {
  return (
    <>
      <article className="content-grid" style={{ paddingBlock: 100 }}>
        <Link className="text-button-fade-in">Back To List</Link>
        <div className="border rounded mt-3" style={{ padding: "20px 50px" }}>
          {children}
        </div>
      </article>
    </>
  );
};

export default ReactChallengeLayout;
