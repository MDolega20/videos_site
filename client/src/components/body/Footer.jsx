import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FooterItem extends Component{
    render(){
        let {dataLang} = this.props;
        return(
            <p><span>MDol</span>&nbsp;© {dataLang.phrases.all.footerNoCopyText}</p>
        )
    }
}
class Footer extends Component{
    render(){
        let {structureData} = this.props;
        return(
            <footer className="width-res">
                <div id="footer-title">
                <Switch>
                    <Route
                        path="/pl"
                        component={() => <FooterItem dataLang={structureData.languages.pl} structureData={structureData} />}
                    />
                    <Route
                        path="/en"
                        component={() => <FooterItem dataLang={structureData.languages.en} structureData={structureData} />}
                    />
                </Switch>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = state => ({
    structureData: state.structure
  });
  
  export default withRouter(connect(mapStateToProps)(Footer));