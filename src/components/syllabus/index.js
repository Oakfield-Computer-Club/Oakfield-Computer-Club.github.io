import React from 'react';
import './_syllabus.scss';

import { StaticQuery, graphql } from 'gatsby';
import { Planet } from 'react-kawaii';

const Syllabus = () => (
  <StaticQuery
    query={ graphql`
      query SyllabusQuery {
        allDataJson {
          edges {
            node {
              syllabus {
                title
              }
            }
          }
        }
      }
    ` }
    render={ (data) => (
      <section className="syllabus" id="syllabus">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h4 className="syllabus-title">Syllabus</h4>
            </div>
            <div className="col-2">
              <Planet size={ 50 } mood="happy" color="#FCCB7E" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="syllabus-list">
                {data.allDataJson.edges[0].node.syllabus.map((item, i) => (
                  <li className="syllabus-list-item" key={ i }>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ) } />
);

export default Syllabus;
