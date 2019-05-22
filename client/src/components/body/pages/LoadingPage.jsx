import React, { Component } from 'react';

class LoadingPage extends Component {
  render() {
    return (
        <div className="loading-page">
            <div className="loading-page-title"><h1>{loading.title}</h1></div>
            <div className="loading-page-describtion"><p>{loading.describtion}</p></div>
            <div className="loading-page-image"><img src={loading.image} alt="loading-image"/></div>
        </div>
    );
  }
}

export default LoadingPage;