import React from "react";
import Layout from "../../components/layout";

export default function AboueMe({ data, location }) {
  return (
    <Layout location={location}>
      <section
        className="content-grid"
        style={{
          backgroundColor: "#dda15e",
          paddingBlock: 200,
        }}
      >
        <div
          className="d-flex"
          style={{
            backgroundColor: "#fefae0",
            borderRadius: 10,
            padding: "10px 20px",
          }}
        >
          <div className="flex-2">1</div>
          <div className="flex-1">2</div>
        </div>
      </section>
    </Layout>
  );
}
