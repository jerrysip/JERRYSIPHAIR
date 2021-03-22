import React from "react";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/portfolio.css";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>

        <a href={props.site} className="btn btn-outline-dark">
          More...
        </a>
      </div>
    </div>
  );
};

export default Card;
