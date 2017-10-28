import React from 'react';

const ContentLabel = ({ name, extra }) => {
  return (
    <div className="content-label-wrap">
      <div className="content-label">{name}</div>
        <div className="content-extra-inf">{ extra}</div>
    </div>
  );
};

export default ContentLabel;
