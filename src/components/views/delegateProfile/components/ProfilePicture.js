import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfilePicture extends Component {
  render() {
    return (
      <div className="image-wrap">
        <img alt="how the person looks" src={this.props.picture} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  picture: state.delegates.delegate.img_url,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
