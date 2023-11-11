import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const author = {
    name: "Warrant TSAI",
    summary:
      " who lives and works in Melbourne Australia doing self-challenging.",
  };
  const social = "https://www.linkedin.com/in/warrant-tsai-20463414b";

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`${social}`} target="_blank">
            You should follow them on LinkedIn
          </a>
        </p>
      )}
    </div>
  );
};

export default Bio;
