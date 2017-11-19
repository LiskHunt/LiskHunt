import React from 'react';
import robby from '../img/robot2.png'

const PlaceholderNoResources = () => {
  return (
    <div className="has-text-centered top20">
      <figure className="image is-128x128 is-centered-image">
        <img src={robby} alt="sad robot"/>
      </figure>
      <h1 className="title has-text-dark">Oh snap!</h1>
      <h2 className="subtitle has-text-dark">Seems like there are no resources from this delegate</h2>
    </div>
  );

};

export default PlaceholderNoResources;
