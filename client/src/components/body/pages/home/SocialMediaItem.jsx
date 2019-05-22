import React, { Component } from "react";
// import SmoothImage from 'react-smooth-image';

class SocialMediaItem extends Component{
  constructor(){
    super();
    this.state = {
      mouseIn: false,
      active: null
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentDidMount(){

  }
  mouseOver(){
    this.setState({mouseIn: true, active: "social-media-item--active"});
  }
  mouseLeave(){
      this.hide = setTimeout(() => { 
        this.setState(() => ({mouseIn: false, active: null}))
      }, 1000);
  }
  render(){
    let { title, imageSrc, link } = this.props;
    let {active} = this.state;

    return (
      <div className={"social-media-item flex-col " + ( active !== null ?  active : "")} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="social-media-item-icon">
              <img src={imageSrc} alt="" />
          </div>
          <div className="social-media-item-name">
              <h3>{title}</h3>
          </div>
        </a>
    </div>
    );
  }
}

export default SocialMediaItem;