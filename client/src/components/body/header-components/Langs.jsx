import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class LangItem extends Component{
    render(){
        let {path, name} = this.props;
        return (
            <div className="nav-lang-item">
                <NavLink to={path}  className="nav-lang-item-content" activeClassName="nav-lang-item--active">{name}</NavLink>
            </div>
        );
    }
}
class Langs extends Component{
    render(){
        let currentPath = window.location.pathname,
        pathElements = currentPath.split("/").splice(2),
        newPath = "/" +  pathElements.join("/"),
        mappedLangs = this.props.structureData.languages.shortNames.map((dataItem,i)=>{
            return <LangItem path={"/" + dataItem.name + newPath} name={dataItem.icon} key={i+"lang"}/>;
        });
        
        return mappedLangs;
    }
}