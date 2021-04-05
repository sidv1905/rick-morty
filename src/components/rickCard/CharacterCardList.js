import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Character from "./Character";

export default function CharacterCardList({ characters }) {
  const [loaded, setloading] = useState(false);
  useEffect(() => {
    function getData() {
      setloading(true);
    }
    setTimeout(getData, 1000);
    return () => {
      setloading(false);
    };
  }, []);

  if (loaded) {
    return (
      <div className="character-container">
        {characters.map((item, index) => {
          return <Character character={item} key={index} />;
        })}
      </div>
    );
  } else {
    return <ReactLoading type={"cylon"} height={100} width={100} />;
  }
}
