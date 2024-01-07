import React from 'react';

const DestinationPlaceComponent = (props) => {
  return (
    <div className="col-md-4 m-btm-40">
      <div className="item">
        <div className="project-destination">
          <a className="img" style={{ backgroundImage: `url(${props.info.destinationImage})` }}>
            <div className="text">
              <h3>{props.info.destinationName}</h3>
              <span>{props.info.destinationCount} Tours</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationPlaceComponent;