// modules
import React, { useState } from "react";
// components
import Bio from "../../components/bio";
import Layout from "../../components/layout";

export default function Page({ location }) {
  const siteTitle = "React Challenges with Gatsby.JS";
  const data = {
    title: "Challenge 1: Text Analyzer",
    slug: "/text-analyzer/",
    date: "Nov 11, 2023",
    excerpt:
      "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    description:
      "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
  };
  const [content, setContent] = useState("");

  const calculateWords = (value) => {
    let strBuf = "";
    let counter = 0;
    const lenValue = +value.length;
    for (const [index, item] of value) {
      console.log(index, item);
      strBuf += item;
      if (item === " " || +index === lenValue - 1) {
        // If the letter is space or reached the end of content
        if (strBuf.match(/^[A-Za-z0-9]/g)) {
          counter += 1;
        }
        strBuf = "";
      }
    }
    return counter;
  };
  const calculateLetters = (value) => {
    let strBuf = "";
    for (const item of value) {
      if (item.match(/[A-Za-z0-9]/g)) {
        strBuf += item;
      }
    }
    return strBuf;
  };
  const calculateSentences = (value) => {
    const strArr = value.split(". ");
    return strArr.length;
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <article>
        <h1>{data.title}</h1>
        <span id="challenge1-introduction">{data.description}</span>
        <div id="challenge1-anser" style={{ marginBlock: 10, width: "80%" }}>
          <textarea
            className="w-100"
            style={{ background: "white", color: "black", minHeight: 300 }}
            value={content}
            placeholder="Please type in your text here..."
            onChange={(e) => setContent(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfWords">Number of words: </label>
              <span>{content ? calculateWords(content) : 0}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfLetters">Number of letters: </label>
              <span>{content ? calculateLetters(content).length : 0}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfSentences">Number of sentences: </label>
              <span>{content ? calculateSentences(content) : 0}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfParagraphs">Number of paragraphs: </label>
              <span>{content ? content.split("\n").length : 0}</span>
            </div>
          </div>
        </div>
      </article>{" "}
      */
    </Layout>
  );
}
