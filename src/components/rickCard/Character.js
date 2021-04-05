import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location";

export default function Character({ character }) {
  const [dater, setData] = useState({});
  const [loading, setloading] = useState(false);
  const [locationshow, setLocation] = useState(false);
  const [hoverEffect, sethoverEffect] = useState(false);

  const [topLeft, settopLeft] = useState({
    top: "",
    right: "",
  });
  const getTopright = (e) => {
    sethoverEffect(true);

    settopLeft({
      top: e.target.getBoundingClientRect().top,
      right: e.target.getBoundingClientRect().left - 300,
    });
  };

  const resetHover = () => {
    sethoverEffect(false);
  };
  const handleLocation = () => {
    setLocation(!locationshow);
  };
  useEffect(() => {
    setloading(true);
    axios.get(character).then((res) => {
      setData(res.data);

      setloading(false);
    });
    return () => {
      setData({});
    };
  }, []);

  if (!loading) {
    return (
      <div
        onClick={getTopright}
        onMouseLeave={resetHover}
        className={`char-card ${hoverEffect ? "hover-card" : ""}`}
      >
        <h1 className="char-name">{dater.name}</h1>
        <div className="char-origin">
          <p> {dater.id}</p>
          <a onClick={handleLocation}>
            {dater.location ? dater.location.name : ""}
          </a>
        </div>
        <img src={dater.image} />

        <div className="specie-origin">
          <p>{dater.species}</p>
          <p>{dater.origin ? dater.origin.name : ""}</p>
          <p>{dater.status}</p>
          <p>{dater.gender}</p>
          <p>{dater.type}</p>
        </div>
        {locationshow ? (
          <Location position={topLeft} data={dater.location} />
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}
