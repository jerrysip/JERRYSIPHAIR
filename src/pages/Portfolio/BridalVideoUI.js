import React from "react";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/portfolio.css";

const VidCard = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <video 
          className="video"
          autoPlay
          loop
          muted
          width="100%">
              <source src={props.videosrc} type="video/mp4" />
          </video>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-dark mb-0">
          {props.description}
        </p>
        <p className="card-text text-dark">
          {props.year}
        </p>
        <a href="#" className="btn btn-outline-dark">
          More...
        </a>
      </div>
    </div>
  );
};

export default VidCard;