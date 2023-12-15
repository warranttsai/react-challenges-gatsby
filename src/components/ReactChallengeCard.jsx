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
      <div className="card-body">
        <div className="d-flex" style={{ gap: 10 }}>
          <img style={{ height: 30, width: 30 }} src={Icon} alt="" />
          <h5 className="card-title">{`React Challenge ${number}`}</h5>
        </div>
        <b>{title}</b>
        <p className="card-text">{description}</p>
        <Link
          href={`/react-challenge/` + slug}
          className="btn btn-primary"
          itemProp="url"
        >
          Go!
        </Link>
      </div>
    </div>
  );
}
