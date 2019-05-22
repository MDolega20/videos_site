import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
        <div className="error-page">
            <div className="error-page-title"><h1>{error.title}</h1></div>
            <div className="error-page-describtion"><p>{error.describtion}</p></div>
            <div className="error-page-hyperlink"><a target="_blank" rel="noopener noreferrer"  href={error.hyperlink}>{error.hyperlink}</a></div>
            <div className="error-page-image"><img src={error.image} alt="error-image"/></div>
        </div>
    );
  }
}

export default Error;