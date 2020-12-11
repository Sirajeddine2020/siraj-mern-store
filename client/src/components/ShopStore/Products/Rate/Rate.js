import React from "react";

const Rate = ({ rating, setSearchRate=()=>{} }) => {
  let Stars = [];
  for (let j = 0; j < 5; j++) {
    if (j < rating) {
      Stars.push(
        <p
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setSearchRate(j + 1)}
        >
          ★
        </p>
      );
    } else {
      Stars.push(
        <p
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setSearchRate(j + 1)}
        >
          ☆
        </p>
      );
    }
  }
  return <div style={{display:"flex"}}>{Stars}</div>;
};

export default Rate;