import React from 'react';

const CheckWrap = ({ label, check }) => {
  const checkClass = check ? 'active-check' : 'deactive-check';

  return (
    <div className="columns is-mobile">
      <div className="column sidebar-label is-half-mobile">{label}</div>
      <div className={'column column-check is-half-mobile'}>
        <div className={checkClass + ' sidebar-check'} />
      </div>
    </div>
  );
};

export default CheckWrap;
