import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactImageFallback from "react-image-fallback";

class ProfilePicture extends Component {
  render() {
    return (
      <div className="image-wrap">
        <ReactImageFallback
            src={this.props.picture}
            fallbackImage="https://dummyimage.com/50x50/aaaaaa/aaaaaa.png"
            alt="cool image should be here"
            className="profile-picture"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  picture: state.delegates.delegate.img_url,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
