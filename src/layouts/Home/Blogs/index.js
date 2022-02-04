import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { BlogsCarousels } from "../../../components";
import './blogs.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export const Blogs = () => {
    const data = useStaticQuery(graphql`
    query MyQuaaewssry {
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
                <BlogsCarousels>
                    {newdata.map((el, index) => (
                        <div className="containersss " key={index}>
                            <img className="resourceimage" src={el.image.fluid.src} />
                            <Link to={`/${el.slug}`}>
                                <h1 className="oio">{el.title}</h1>
                            </Link>
                            <p className="my-2 text-gray-600 text-lg texthiddensss"  >
                                {documentToReactComponents(JSON.parse(el.description.raw))}
                            </p>
                        </div>
                    ))}
                </BlogsCarousels>

            </div>
        </div>
    )
};
