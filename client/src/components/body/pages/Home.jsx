import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component{
    render(){
      let {structureData} = this.props;
        return (
          <div id="home">
            <section className="flex-col">
              <h2>
              Sekcja 1
              </h2>
              <div className="section-content about-me">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate nisi quisquam fugiat iure culpa blanditiis eaque nam consequuntur autem accusamus quos quis error magnam eos aspernatur neque aliquam sunt.
                </p>
              </div>
            </section>
            <section className="flex-col">
              <h2>
                Sekcja 2
              </h2>
              <div className="section-content">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate nisi quisquam fugiat iure culpa blanditiis eaque nam consequuntur autem accusamus quos quis error magnam eos aspernatur neque aliquam sunt.
                </p>
              </div>
            </section>
          </div>
        );
    }
}

Home.propTypes = {
  structureData: PropTypes.object.isRequired
}

export default Home;