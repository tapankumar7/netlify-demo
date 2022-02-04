import React from "react";
import { Carousels } from "../../../components";
import './resourcess.css';
import { Link, useStaticQuery, graphql } from 'gatsby'

export const Resource = () => {
    const data = useStaticQuery(graphql`
    query MyQuessry {
      allContentfulBlogs(sort: {fields: title, order: ASC}) {
        nodes {
          description {
            raw
          }
          image {
            fluid {
              src
            }
          }
          title
          slug
        }
      }
    }
    `)
    const newdata = data.allContentfulBlogs.nodes
    return (
        <div className="conatinerresources">
            <div className="conatinerBox">
                <h2 className="majorhead">Resources.</h2>
                <Carousels>
                    {newdata.map((el, index) => (
                        <div className="containersss " key={index}>
                            <Link to={`/${el.slug}`}>
                            <img className="resourceimage" src={el.image.fluid.src} />
                                <h1 className="oio">{el.title}</h1>
                            </Link>
                        </div>
                    ))}
                </Carousels>
            </div>
        </div>
    )
};
