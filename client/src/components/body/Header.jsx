import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Langs from './header-components/Langs';

class NavItem extends Component{
    render(){
        let { dataItem, dataLang } = this.props;
        return(
            <li>
                <div className="nav-item">
                    <NavLink to={"/" + dataLang.languageShort + dataItem.path} exact={dataItem.path === "/" ? true : false} className="nav-item-content" activeClassName="nav-item--active">{dataItem.name}</NavLink>
                </div>
            </li>
            );
    }
}
class NavContainer extends Component{
    render(){
        let { headerBookmarks } = this.props.dataLang.phrases.all;

        let mappedNavItems = headerBookmarks.map( (data, i) => {
            return <NavItem dataItem={data} dataLang={this.props.dataLang} key={"bookmark_" + i} />;
        });
        return(
            <div id="nav-container">
                <ul>
                    {mappedNavItems}
                </ul>
            </div>
        )
    }
}

class NavTopItem extends Component{
    render(){
        let { dataItem, dataLang } = this.props;
        return(
            <li>
                <div className="nav-item">
                    <NavLink to={"/" + dataLang.languageShort + dataItem.path} exact={dataItem.path === "/" ? true : false} className="nav-item-content" activeClassName="nav-item--active">{dataItem.name}</NavLink>
                </div>
            </li>
            );
    }
}
class NavTopBar extends Component{
    render(){
        let { headerTopBookmarks } = this.props.dataLang.phrases.all;

        let mappedNavTopItems = headerTopBookmarks.map( (data, i) => {
            return <NavTopItem dataItem={data} dataLang={this.props.dataLang} key={"bookmark_" + i} />;
        });

        return(
            <div id="header-top-bar">
                <ul>
                    {mappedNavTopItems}
                </ul>
                <div id="header-top-bar-langs">
                
                </div>
            </div>
        )
    }
}

class Header extends Component{
    render(){
        let {structureData} = this.props;
        
        return(
            <header className="width-res flex-col">
                <Switch>
                    <Route
                        path="/en"
                        component={() => <NavTopBar dataLang={structureData.languages.en} />}
                    />
                </Switch>
                {/* <div id="header-title">
                    <h1>{structureData.siteTitle}</h1>
                </div>
                <Switch>
                    <Route
                        path="/pl"
                        component={() => <NavContainer dataLang={structureData.languages.pl} />}
                    />
                    <Route
                        path="/en"
                        component={() => <NavContainer dataLang={structureData.languages.en} />}
                    />
                </Switch>
                <div id="nav-lang-container">
                    <Langs structureData={this.props.structureData}/>
                </div> */}

            </header>
        )
    }
}

Header.propTypes = {
  structureData: PropTypes.object.isRequired
}
NavContainer.propTypes = {
  dataLang: PropTypes.object.isRequired
}
NavItem.propTypes = {
  dataItem: PropTypes.object.isRequired,
  dataLang: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    structureData: state.structure
  });
  
  export default withRouter(connect(mapStateToProps)(Header));