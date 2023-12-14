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
  const reactChallengeList = [
    {
      number: 1,
      title: "Text Analyzer",
      slug: "textanalyzer/",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    },
    {
      number: 2,
      title: "Text Analyzer",
      slug: "textanalyzer/",
      description:
        "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
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
      {/* Greeting Banner */}
      <section className="content-grid">
        {/* spacer */}
        <span style={{ height: 100 }} />
        <h1 className="main-title text-center">
          Welcome to My React Challenges
        </h1>
        <p className="second-title text-center">
          Explore and Discover the Challenges
        </p>
        {/* spacer */}
        <span style={{ height: 100 }} />
        <p className="second-title text-center">Start Exploreing</p>
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
