// modules
import * as React from "react";
import { Link } from "gatsby";
// scss
import "../styles/root-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Bio from "../components/bio";
import Layout from "../components/layout";
import ReactChallengeCard from "../components/reactChallengeCard";

const BlogIndex = ({ data, location }) => {
  const posts = [
    {
      title: "Challenge 1: Text Analyzer",
      slug: "/textanalyzer/",
      date: "Nov 11, 2023",
      excerpt:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    },
  ];

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   );
  // }

  return (
    <Layout location={location}>
      <section className="content-grid">
        {/* <div className="greeting-banner d-flex flex-column justify-content-center align-items-center"> */}
        <h1 className="main-title">Welcome to My React Challenges</h1>
        {/* <p className="second-title">Explore and Discover the Challenges</p> */}
        {/* spacer */}
        {/* <span style={{ height: 200 }} /> */}
        {/* <p className="second-title mt-5">Start Exploreing</p> */}
        {/* </div> */}
      </section>
      {/* <section className="react-challenge-list-section align-items-center">
        <ReactChallengeCard />
        <ReactChallengeCard />
        <ReactChallengeCard />
        <ReactChallengeCard />
      </section> */}
      {/* <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.title || post.slug;

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol> */}
    </Layout>
  );
};

export default BlogIndex;
