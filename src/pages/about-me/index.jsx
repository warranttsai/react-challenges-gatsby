// module
import React from "react";
// layout
import Layout from "../../components/layout";
// image
import ProfilePic from "../../../static/profile-pic.png";

export default function AboueMe({ location }) {
  return (
    <Layout location={location}>
      <section
        className="content-grid"
        style={{
          backgroundColor: "#dda15e",
          minHeight: 700,
        }}
      >
        <div
          className="d-flex flex-wrap"
          style={{
            borderRadius: 10,
            padding: "20px 50px",
            marginBlock: 100,
            gap: 10,
          }}
        >
          <div className="flex-1 d-flex flex-column" style={{ gap: 40 }}>
            <h1 className="text-left" style={{ fontSize: 50 }}>
              WARRANT TSAI
            </h1>
            <p className="text-left" style={{ fontSize: 16 }}>
              Results-driven web developer with one and a half years of
              proficiency in React JS/TS development. Recently conferred a
              master's degree in Information Technology (2022), demonstrating a
              commitment to continuous learning. Proven expertise in backend
              development utilizing Lambda serverless framework, Node.JS,
              Sails.JS, and Python Flask. Known for an insatiable appetite for
              acquiring new knowledge, paired with a reputation for
              responsibility, organizational prowess, and a willingness to
              tackle new challenges head-on. An open-minded individual receptive
              to diverse perspectives and suggestions.
            </p>
          </div>
          <div className="flex-1 d-flex justify-content-center align-items-start">
            <img
              src={ProfilePic}
              style={{ borderRadius: 20, width: "100%", minWidth: 20 }}
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
