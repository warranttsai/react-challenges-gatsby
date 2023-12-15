// modules
import * as React from "react";
// scss
import "../styles/root-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Layout from "../components/layout";
import ReactChallengeCard from "../components/ReactChallengeCard";

const BlogIndex = ({ location }) => {
  const reactChallengeList = [
    {
      number: 1,
      title: "Text Analyzer",
      slug: "text-analyzer/",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    },
    {
      number: 2,
      title: "Password Generator",
      slug: "password-generator/",
      description:
        "This challenge is suitable for beginners as well. In this challenge, you will develop logic for a password generator, including options for creating and validating a password with a specified strength, copying the password, and passwords with desired characters.",
    },
    {
      number: 3,
      title: "Text Analyzer",
      slug: "textanalyzer/",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    },
    {
      number: 4,
      title: "Text Analyzer",
      slug: "textanalyzer/",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    },
  ];

  return (
    <Layout location={location}>
      {/* Greeting Banner */}
      <section className="content-grid" style={{ backgroundColor: "#fefae0" }}>
        {/* spacer */}
        <span style={{ height: 100 }} />
        <h1 className="main-title text-center">
          Welcome to My React Challenges
        </h1>
        <p className="second-title text-center">
          Explore and Discover the Challenges
        </p>
        {/* spacer */}
        <span style={{ height: 30 }} />
        <p
          className="text-center floating-up-down"
          style={{ fontSize: "clamp(16px, 1.6vw, 23px)" }}
        >
          Start Exploreing...
        </p>
        {/* spacer */}
        <span style={{ height: 70 }} />
      </section>
      {/* React Challenge List */}
      <section className="content-grid">
        <div className="react-challenge-list-section align-items-center">
          {reactChallengeList.map((item) => {
            return (
              <ReactChallengeCard
                number={item.number}
                title={item.title}
                description={item.description}
                slug={item.slug}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndex;
