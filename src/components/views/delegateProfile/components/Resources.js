import React, { Component } from 'react';
import ContentLabel from './ContentLabel';
import Resource from './Resource';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Resources extends Component {
  renderResources() {
    const { resources } = this.props;
    if (resources) {
      return resources.map(e => {
        return <Resource key={e.resource_id} resource={e} />;
      });
    } else {
      return <div />;
    }
  }

  renderContentLabel() {
    if (this.props.resources) {
      return this.props.resources.length === 1
        ? '1 RESOURCE'
        : `${this.props.resources.length} RESOURCES`;
    } else {
      return 'RESOURCES';
    }
  }

  render() {
    return (
      <div className="column is-9 resources is-paddingless">
        <ContentLabel name={this.renderContentLabel()} />
        {this.renderResources()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resources: state.delegates.delegate.resources,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
