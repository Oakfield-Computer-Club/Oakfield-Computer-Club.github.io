import React from 'react';

import './_about.scss';

import { StaticQuery, graphql } from 'gatsby';
import { Planet } from 'react-kawaii';

const About = () => (
  <StaticQuery
    query={ graphql`
      query About {
        allDataJson {
          nodes {
            about {
              title
              description
            }
          }
        }
      }
    ` }
    render={ (data) => (
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h4 className="about-title">About</h4>
            </div>
            <div className="col-2">
              <Planet size={ 50 } mood="happy" color="#FDA7DC" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5>{data.allDataJson.nodes[0].about.title}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {data.allDataJson.nodes[0].about.description}
            </div>
          </div>
        </div>
      </section>
    ) } />
);

export default About;
