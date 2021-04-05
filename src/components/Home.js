import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./rickCard/Card";
import axios from "axios";
import ReactLoading from "react-loading";

const Home = () => {
  const { cards } = useSelector((state) => state.cards);
  const [activePage, setactivePage] = useState("1");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function getData() {
      axios
        .get("https://rickandmortyapi.com/api/episode?page=" + activePage)
        .then((res) => {
          dispatch({
            type: "ADD",
            payload: res.data.results,
          });
        });
      setLoading(false);
    }
    setLoading(true);
    setTimeout(getData, 2000);
  }, [activePage]);

  const handleActive = (e) => {
    setactivePage(parseInt(e.target.innerHTML));
  };
  if (!loading && cards) {
    return (
      <React.Fragment>
        <div className="card-container">
          {cards.map((item, index) => {
            return <Card key={index} info={item} />;
          })}
        </div>
        <div className="paginate">
          <ul>
            <li
              style={{
                backgroundColor: `${activePage == 1 ? "pink" : "black"}`,
              }}
              onClick={handleActive}
            >
              1
            </li>
            <li
              style={{
                backgroundColor: `${activePage == 2 ? "pink" : "black"}`,
              }}
              onClick={handleActive}
            >
              2
            </li>
            <li
              style={{
                backgroundColor: `${activePage == 3 ? "pink" : "black"}`,
              }}
              onClick={handleActive}
            >
              3
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <ReactLoading height={667} width={375} />{" "}
      </div>
    );
  }
};

export default Home;
