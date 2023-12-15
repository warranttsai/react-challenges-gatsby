import React from "react";
import Layout from "../../../components/layout";
import ReactChallengeLayout from "../../../components/reactChallengeLayout";
import ArrowLeft from "../../../../static/arrow-left.png";
import ArrowRight from "../../../../static/arrow-right.png";

export default function Page({ location }) {
  return (
    <Layout location={location}>
      <ReactChallengeLayout>
        <h1>Random Quote Generator</h1>
        <span id="challenge1-introduction">
          In this challenge, you will develop one of the main react applications
          for beginners. It'll help you to learn many Javascript and React
          concepts. This challenge differs slightly from Text Analyzer and
          Password Generator because you need to fetch data from json-server
          using Axios.
        </span>
        <div className="text-left mt-3">
          <span style={{ fontSize: 40 }}>❞</span>
          <p style={{ fontSize: 40, letterSpacing: -2, fontStyle: "italic" }}>
            In the end, we will remember not the words of our enemies, but the
            silence of our friends.
          </p>
          <span style={{ fontSize: 28 }}>- Martin Luther King Jr.</span>
        </div>
        {/* Buttons */}
        <div className="d-flex mt-3" style={{ gap: 20 }}>
          <a className="button-border-animation">
            <img src={ArrowLeft} style={{ height: 40 }} alt="" />
          </a>
          <a className="button-border-animation">
            <img src={ArrowRight} style={{ height: 40 }} alt="" />
          </a>
        </div>
      </ReactChallengeLayout>
    </Layout>
  );
}
