import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../../components/layout";
import ReactChallengeLayout from "../../../components/reactChallengeLayout";
import ArrowLeft from "../../../../static/arrow-left.png";
import ArrowRight from "../../../../static/arrow-right.png";
import axios from "axios";
import { requestListAPI } from "../../../lib/global";

export default function Page({ location }) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [quoteList, setQuoteList] = useState([
    { id: -99999, quote: "", quotee: "" },
  ]);

  const getQuote = useCallback(async () => {
    const payload = {
      endpoint: "getRandomQuote",
    };
    axios.post(`${requestListAPI}`, payload).then((res) => {
      const item = res.data["Item"];

      const newQuote = {
        id: item.id,
        quote: item.quote,
        quotee: item.quotee,
      };
      const findItem = quoteList.find((element) => element.id === newQuote.id);
      if (!findItem) {
        setDisplayIndex(quoteList.length);
        setQuoteList([...quoteList, newQuote]);
      } else {
        const itemIndex = quoteList.findIndex(
          (element) => element.id === findItem.id
        );

        if (itemIndex === displayIndex) {
          const buf =
            displayIndex - 1 > 0 ? quoteList.length - 1 : displayIndex - 1;
          setDisplayIndex(buf);
        } else setDisplayIndex(itemIndex);
      }
    });
  }, [quoteList]);

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Layout location={location}>
      <ReactChallengeLayout>
        <h1>Random Quote Generator</h1>
        <article id="random-quote-generator-introduction">
          In this challenge, you will develop one of the main react applications
          for beginners. It'll help you to learn many Javascript and React
          concepts. This challenge differs slightly from Text Analyzer and
          Password Generator because you need to fetch data from json-server
          using Axios.
        </article>
        <ol>
          <li>Which skills are going to test?</li>
          <li>
            How to fetch API in react using axios How useState and useEffect
            work.
          </li>
          <li>How to share quotes on social media.</li>
          <li>You can implement logic in Javascript</li>
        </ol>
        <div className="text-left mt-3">
          <span style={{ fontSize: 40 }}>❞</span>
          <p style={{ fontSize: 40, letterSpacing: -2, fontStyle: "italic" }}>
            {quoteList[displayIndex].quote}
          </p>
          <span style={{ fontSize: 28 }}>
            - {quoteList[displayIndex].quotee}
          </span>
        </div>
        {/* Buttons */}
        <div className="d-flex mt-3" style={{ gap: 20 }}>
          <button
            style={{
              fontSize: "clamp(16px, 1.6vw, 23px)",
              cursor: "pointer",
              background: "none",
              border: "none",
              font: "inherit",
              color: "inherit",
            }}
            className="button-border-animation"
            onClick={() => {
              const newIndex =
                displayIndex - 1 > 0 ? displayIndex - 1 : quoteList.length - 1;
              setDisplayIndex(newIndex);
            }}
          >
            <img src={ArrowLeft} style={{ height: 40 }} alt="" />
          </button>
          <button
            style={{
              fontSize: "clamp(16px, 1.6vw, 23px)",
              cursor: "pointer",
              background: "none",
              border: "none",
              font: "inherit",
              color: "inherit",
            }}
            className="button-border-animation"
            onClick={getQuote}
          >
            <img src={ArrowRight} style={{ height: 40 }} alt="" />
          </button>
        </div>
      </ReactChallengeLayout>
    </Layout>
  );
}
