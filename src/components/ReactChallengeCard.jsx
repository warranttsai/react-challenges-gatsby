import React from "react";

export default function ReactChallengeCard() {
  return (
    <div className="card react-challenge-item" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-between">
        <img className="card-img-top" src="..." alt="" />
        <h5 className="card-title">Card title</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go!
        </a>
      </div>
    </div>
  );
}
