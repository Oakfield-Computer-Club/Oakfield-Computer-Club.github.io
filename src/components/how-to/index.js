import React from 'react';

import './_how-to.scss';

import { StaticQuery, graphql } from 'gatsby';
import { Planet } from 'react-kawaii';

const HowTos = () => (
  <StaticQuery
    query={ graphql`
      query HowtoQuery {
        allDataJson {
          edges {
            node {
              howTo {
                title
                href
              }
            }
          }
        }
      }
    ` }
    render={ (data) => (
      <section className="howto" id="howto">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h4 className="howto-title">How to guides</h4>
            </div>
            <div className="col-2">
              <Planet size={ 50 } mood="happy" color="#A6E191" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ol className="howto-list">
                {data.allDataJson.edges[0].node.howTo.map((item, i) => (
                  <li className="howto-list-item" key={ i }>
                    <a href={ item.href }>{item.title}</a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    ) } />
);

export default HowTos;
