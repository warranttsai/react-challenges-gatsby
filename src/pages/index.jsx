// modules
import React, { useRef } from "react";
// scss
import "../styles/root-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Layout from "../components/layout";
import ReactChallengeCard from "../components/ReactChallengeCard";

const BlogIndex = ({ location }) => {
  const reactChallengeRef = useRef(null);
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
        "In this challenge, you will develop logic for a password generator, including options for creating and validating a password with a specified strength, copying the password, and passwords with desired characters.",
    },
    {
      number: 3,
      title: "Random Quote Generator",
      slug: "random-quote-generator/",
      description:
        "Challenge yourself to build a random quote generator using ReactJS and showcase your front-end development skills. Flourish your creativity with this fun code challenge! This challenge differs slightly from Text Analyzer and Password Generator because you need to fetch data from json-server using Axios.",
    },
    {
      number: 4,
      title: "CRUD Talklist App",
      slug: "crud-talklist-app/",
      description:
        "This React Tasklist/Todo challenge requires you to perform CRUD operations with instructions to write clean, reusable, manageable, and scalable code. This challenge is different and more challenging than the last three challenges you have completed.",
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
        <div className="floating-up-down text-center">
          <button
            style={{
              fontSize: "clamp(16px, 1.6vw, 23px)",
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "inherit",
            }}
            onClick={() =>
              reactChallengeRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Exploring...
          </button>
        </div>
        {/* spacer */}
        <span style={{ height: 70 }} />
      </section>
      {/* React Challenge List */}
      <section
        className="content-grid"
        id="react-challenge-section"
        ref={reactChallengeRef}
      >
        <div className="react-challenge-list-section d-flex flex-wrap align-items-center">
          {reactChallengeList.map((item) => {
            return (
              <ReactChallengeCard
                key={item.number}
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
