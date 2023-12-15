// modules
import React, { useState, useEffect } from "react";
// components
import Layout from "../../components/layout";

export default function Page({ location }) {
  const data = {
    title: "Challenge 1: Text Analyzer",
    slug: "/textanalyzer/",
    date: "Nov 11, 2023",
    excerpt:
      "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
    description:
      "It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.",
  };
  const [content, setContent] = useState("");
  const [numOfWords, setNumOfWords] = useState(0);
  const [numOfLetters, setNumOfLetters] = useState(0);
  const [numOfSentences, setNumOfSentences] = useState(0);
  const [numOfParagraphs, setNumOfParagraphs] = useState(0);

  const calculateWords = (value) => {
    let strBuf = value.replace(".", "").replace("\n", " ").split(" ");
    let counter = 0;
    for (const item of strBuf) if (item.match(/^[A-Za-z0-9]/g)) counter += 1;

    return counter;
  };
  const calculateLetters = (value) => {
    let strBuf = "";
    for (const item of value) {
      if (item.match(/[A-Za-z0-9]/g)) {
        strBuf += item;
      }
    }
    return strBuf.length;
  };
  const calculateSentences = (value) => {
    const strArr = value.split(". ");
    return strArr.length;
  };
  useEffect(() => {
    setNumOfWords(calculateWords(content));
    setNumOfLetters(calculateLetters(content));
    setNumOfSentences(calculateSentences(content));
    setNumOfParagraphs(content.split("\n").length);
  }, [content]);

  return (
    <Layout location={location}>
      <article className="content-grid" style={{ paddingBlock: 100 }}>
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
              <span>{numOfWords}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfLetters">Number of letters: </label>
              <span>{numOfLetters}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfSentences">Number of sentences: </label>
              <span>{numOfSentences}</span>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="numOfParagraphs">Number of paragraphs: </label>
              <span>{numOfParagraphs}</span>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
