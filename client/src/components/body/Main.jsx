import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';


class Main extends Component{
    render(){
        let currentUrl = window.location.pathname,
        {structureData} = this.props;

        if(currentUrl === "/"){
            return <Redirect to="/pl" />;
        }

        return(
            <main className="width-res">
                <Switch>
                    {/* <Route exact path="/" component={ () => <Home /> } /> */}
                    
                    <Route exact path="/pl" component={ () => <Home data={structureData.languages.pl} /> } />             
                    <Route exact path="/en" component={ () => <Home data={structureData.languages.en} /> } /> 
                </Switch>
            </main>
        );
    }
}


Main.propTypes = {
    structureData: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
      structureData: state.structure
    });
  
  export default withRouter(connect(mapStateToProps)(Main));