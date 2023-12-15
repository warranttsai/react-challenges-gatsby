// modules
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, [3000]);
  }, [showSuccessMessage]);
  useEffect(() => {
    setTimeout(() => {
      setShowCopyMessage(false);
    }, [3000]);
  }, [showCopyMessage]);

  return (
    <Layout location={location}>
      <ReactChallengeLayout>
        <h1>React Password Generator</h1>
        <span id="challenge1-introduction">
          This challenge is suitable for beginners as well. In this challenge,
          you will develop logic for a password generator, including options for
          creating and validating a password with a specified strength, copying
          the password, and passwords with desired characters.
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
          {/* Generate Button */}
          <div className="d-flex flex-column justify-content-center align-items-center mt-1">
            <button
              className="btn btn-success"
              onClick={handleGeneratePassword}
            >
              Generate your password!
            </button>
          </div>
          {/* Warning Message */}
          <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-1">
            {/* New Password */}
            <div
              className="d-flex jusitfy-content-center align-items-center"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard"
                viewBox="0 0 16 16"
                className="bi bi-clipboard flex-1 cursor-pointer"
                onClick={handleClickCopy}
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
            </div>
          </div>
          {showSuccessMessage && (
            <div className="mt-4">
              <span className="alert alert-primary" role="alert">
                Success!
              </span>
              <br />
            </div>
          )}
          {showCopyMessage && (
            <div className="mt-4">
              <span className="alert alert-success" role="alert">
                Copied!
              </span>
              <br />
            </div>
          )}
        </div>
      </ReactChallengeLayout>
    </Layout>
  );
}
