import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import CharacterCardList from "./CharacterCardList";

export default function Location({ data, position }) {
  const [locationData, setlocationData] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios.get(data.url).then((res) => {
      setlocationData(res.data);
    });
    setloading(false);
    return () => {
      setlocationData({});
    };
  }, []);

  if (loading) {
    return <ReactLoading type={"cylon"} height={100} width={100} />;
  } else {
    return (
      <div
        className="location-container"
        style={{
          position: "absolute",
          top: position.top + "px",
          right: position.right + "px",
        }}
      >
        <h3>{data.name}</h3>
        <ul>
          <li>Dimension : {locationData.dimension}</li>
          <li>Type: {locationData.type}</li>
        </ul>
        <p>Residents:</p>
        {locationData.residents ? (
          <CharacterCardList characters={locationData.residents} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
