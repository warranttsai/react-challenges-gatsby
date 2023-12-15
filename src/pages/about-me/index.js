import React from "react";
import Layout from "../../components/layout";
import Instagram from "../../../static/instagram-icon.png";
import Github from "../../../static/github-icon.png";
import LinkedIn from "../../../static/linkedin-icon.png";
import ProfilePic from "../../../static/profile-pic.png";

export default function AboueMe({ data, location }) {
  return (
    <Layout location={location}>
      <section
        className="content-grid"
        style={{
          backgroundColor: "#dda15e",
        }}
      >
        <div
          className="d-flex flex-wrap"
          style={{
            backgroundColor: "#d3d3d3",
            borderRadius: 10,
            padding: "20px 50px",
            marginBlock: 100,
            gap: 10,
          }}
        >
          <div className="flex-2 d-flex flex-column" style={{ gap: 40 }}>
            <h1 className="text-left" style={{ fontSize: 50 }}>
              WARRANT TSAI
            </h1>
            <p className="text-left" style={{ fontSize: 14 }}>
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
            <div
              className="d-flex justify-content-center aling-items-center"
              style={{ gap: 50 }}
            >
              <img src={Instagram} style={{ width: 50 }} alt="" />
              <img src={LinkedIn} style={{ width: 50 }} alt="" />
              <img src={Github} style={{ width: 50 }} alt="" />
            </div>
          </div>
          <div className="flex-1 d-flex justify-content-center align-items-center">
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
