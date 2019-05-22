import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Typing from 'react-typing-animation';

class Start extends Component{
    constructor(){
        super();
        this.state = {
            typingFinished: false,
            typingStarted: false
        }
        this.typingEnd = this.typingEnd.bind(this);
        this.typingStart = this.typingStart.bind(this);
    }
    typingEnd(){
        this.setState({typingFinished: true});
    }
    typingStart(){
        this.setState({typingStarted: true});
        // console.log("Typing started");
    }
    render(){
        let { typingFinished } = this.state;
        if( typingFinished ){
            return <Redirect to="/" />;
        }
        return (
          <div id="start-container" className="flex-col">
            <div className="start-typing-container">
              <Typing
                onFinishedTyping={() => this.typingEnd()}
                onStartedTyping={() => this.typingStart()}
                loop={true}
              >
                <h1>Hej, nazywam się Mateusz!</h1>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={30} />
                <h1>
                  Zajmuje się projektowaniem oraz kodowaniem stron i
                  aplikacji internetowych
                </h1>
                <Typing.Delay ms={500} />
                <Typing.Reset count={1} delay={500} />
                {/* <Typing.Backspace count={100} speed={50} /> */}
                <h1>Oto moje portfolio</h1>
                <Typing.Delay ms={1000} />
              </Typing>
            </div>
            <div className="start-typing-skip">
                <a href="/" id="skip-start">Skip intro</a>
            </div>
          </div>
        );
    }
}

export default Start;