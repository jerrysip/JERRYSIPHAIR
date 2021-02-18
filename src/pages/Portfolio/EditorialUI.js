import React from 'react';

import '/Users/mac/Desktop/jerrysiphair-react/src/pages/Portfolio/portfolio.css'

const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit dolorem animi, dolore illum, possimus labore magnam tenetur nemo eos iste incidunt sint ipsum at, deleniti ut tempore nihil sit?
                </p>
                <a href="#" className="btn btn-outline-dark">
          More...
        </a>
            </div>
        </div>

    );

}

export default Card;