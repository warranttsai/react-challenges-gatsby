// module
import * as React from "react";
import { Link } from "gatsby";

const ReactChallengeLayout = ({ children }) => {
  return (
    <>
      <article className="content-grid" style={{ paddingBlock: 150 }}>
        <div>
          <Link href="/" className="text-button-fade-in">
            Back To List
          </Link>
        </div>
        <div className="border rounded mt-3" style={{ padding: "20px 50px" }}>
          {children}
        </div>
      </article>
    </>
  );
};

export default ReactChallengeLayout;
