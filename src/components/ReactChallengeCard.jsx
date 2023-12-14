import React from "react";
import Icon from "../../static/react-challenge-icon.png";
import { Link } from "gatsby";

export default function ReactChallengeCard({
  number,
  title,
  description,
  slug,
}) {
  return (
    <div className="card react-challenge-item">
      <div className="d-flex justify-content-between" style={{ minWidth: 250 }}>
        <img style={{ height: 30, width: 30 }} src={Icon} alt="" />
        <h5 className="card-title">{`React Challenge ${number}`}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={slug} className="btn btn-primary" itemProp="url">
          Go!
        </Link>
      </div>
    </div>
  );
}
