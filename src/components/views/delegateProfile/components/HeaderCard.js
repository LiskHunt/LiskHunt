import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const HeaderCard = ({ name }) => {
  return (
    <section className="sidebar--key-information">
      <h1>{name}</h1>
      <h2>delegate</h2>
    </section>
  );
};

const mapStateToProps = state => ({
  name: state.delegates.delegate.name,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCard);
