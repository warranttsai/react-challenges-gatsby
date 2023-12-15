// modules
import React, { useState } from "react";
// components
import Layout from "../../../components/layout";
import ReactChallengeLayout from "../../../components/reactChallengeLayout";

export default function Page({ location }) {
  const [desiredCharacter, setDesiredCharacter] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // display states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleGeneratePassword = () => {
    /* password validation
     * more than 8 words
     * minimum 1 upper case and 1 lower case letter
     * including at least 1 special character
     */
    let passwordBuf = desiredCharacter;
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!@#$%^&*()_+";
    const getRandomElement = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };
    // Generate random uppercase letter
    passwordBuf += getRandomElement(uppercaseLetters);
    // Generate random lowercase letter
    passwordBuf += getRandomElement(lowercaseLetters);
    // Generate random special character
    passwordBuf += getRandomElement(specialCharacters);
    // Generate remaining random words
    const remainingWords = 8 - passwordBuf.length; // adjust the number of words as per your requirement
    const allCharacters =
      uppercaseLetters + lowercaseLetters + specialCharacters;

    for (let i = 0; i < remainingWords; i++) {
      passwordBuf += getRandomElement(allCharacters);
    }
    setNewPassword(passwordBuf);
    setShowSuccessMessage(true);
  };
  const handleClickCopy = () => {
    navigator.clipboard.writeText(newPassword).catch(() => {
      alert("Copy error!");
    });
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 1000);
  };

  return (
    <Layout location={location}>
      <ReactChallengeLayout>
        <h1>React Password Generator</h1>
        <span id="challenge1-introduction">
          It is an easy challenge in which you have to build logic for a text
          analyzer that will count the number of words, letters, paragraphs, and
          more of the text written in the textarea
        </span>
        <div className="text-center mt-3">
          <textarea
            style={{
              background: "white",
              color: "black",
              width: "50%",
              minHeight: 100,
            }}
            value={desiredCharacter}
            placeholder="Please put in your desired character..."
            onChange={(e) => {
              setDesiredCharacter(e.target.value);
              setShowSuccessMessage(false);
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={handleGeneratePassword}>
              Generate your password!
            </button>
          </div>
          {/* Warning Message */}
          <div
            className="w-100 d-flex flex-column"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {showSuccessMessage && (
              <>
                <span className="alert alert-primary" role="alert">
                  Success!
                </span>
                <br />
              </>
            )}
            {/* New Password */}
            <div
              className="d-flex flex-column jusitfy-content-center align-items-center"
              style={{
                width: "50%",
              }}
            >
              <input
                className="flex-5"
                style={{
                  background: "white",
                  color: "black",
                }}
                value={newPassword}
                disabled
              />
              {/* <ContentCopyIcon
                className="flex-1 cursor-pointer"
                onClick={handleClickCopy}
              /> */}
            </div>
          </div>
        </div>
      </ReactChallengeLayout>
    </Layout>
  );
}
