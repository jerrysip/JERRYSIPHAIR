import React from "react";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/portfolio.css";

const Fashion = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-dark mb-0">
{props.lead}
        </p>
        <p className="card-text text-dark mb-0">
{props.description}
        </p>
        <p className="card-text text-dark">
{props.location}
        </p>

        <a href="#" className="btn btn-outline-dark">
          More...
        </a>
      </div>
    </div>
  );
};

export default Fashion;
