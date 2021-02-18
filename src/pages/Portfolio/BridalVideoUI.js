import React from "react";

import "/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/bridal.css";

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
        <p className="card-text text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          reprehenderit dolorem animi, dolore illum, possimus labore magnam
          tenetur nemo eos iste incidunt sint ipsum at, deleniti ut tempore
          nihil sit?
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default VidCard;