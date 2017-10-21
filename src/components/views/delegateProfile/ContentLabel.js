import React from 'react';

const ContentLabel = ({ name }) => {
  return (
    <div className="content-label-wrap">
      <div className="content-label">{name}</div>
    </div>
  );
};

export default ContentLabel;
