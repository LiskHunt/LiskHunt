import React from 'react';

const Information = ({ delegate }) => {
  const { name, coolness_score } = delegate;
  return (
    <div className="delegatecard-content">
      <div>
        <div className="delegate-name">{name}</div>
        <div>coolness: {coolness_score}</div>
      </div>
    </div>
  );
};

export default Information;
