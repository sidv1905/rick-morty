import React, { useState } from "react";
import CharacterCardList from "./CharacterCardList";

export default function Card({ info }) {
  const [hover, setHover] = useState(false);
  const makeitBig = () => {
    setHover(true);
  };

  const backtoNormal = () => {
    setHover(false);
  };

  return (
    <div
      className={`episode-card ${hover ? "big" : ""}`}
      onMouseOver={makeitBig}
      onMouseLeave={backtoNormal}
    >
      <h2 className="episode-heading">{info.name}</h2>
      <div className="air-date">{info.air_date}</div>
      <div className="episode-number">{info.episode}</div>
      <a href={info.url}>Click here to see episode</a>
      <div className="character-list">
        {hover ? <CharacterCardList characters={info.characters} /> : ""}
      </div>
    </div>
  );
}
