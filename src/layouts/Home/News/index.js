import React from "react";
import "./style.scss";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const News = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulBlogs(sort: {fields: title, order: ASC}, limit: 1) {
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
    newdata:allContentfulBlogs(sort: {fields: title, order: ASC}, limit: 3, skip: 1) {
      nodes {
        title
        image {
          fluid {
            src
          }
        }
        description {
          raw
        }
        slug
      }
    }
  }
  `)


  const maindata = data.allContentfulBlogs.nodes
  const moreBlogs = data.newdata.nodes
  return (
    <section className="homeNews">
      <div className="container">
        <h3 className="title-main text-gray-800" style={{textAlign:'left'}}>
          In The <span>News.</span>
        </h3>
        <div className="flex justify-between">
          {maindata && maindata.map(el => {
            return (
              <div
                key={Math.random() * 6 / 2}
                className="flex flex-col bg-white bgNews"
                style={{ borderRadius: 20 }}>
                <img
                  src={el.image.fluid.src}
                  alt
                  className="w-2/"
                  style={{ maxWidth: "100%", height: 329,backgroundSize:'100% 100%' }}
                />
                <div className="p-5">
                  <h4 className="text-2xl font-bold mx-3 text-gray-800">
                    {el.title}
                  </h4>
                  <p className="my-2 mx-3 text-gray-600 text-lg texthidden"  >
                    {documentToReactComponents(JSON.parse(el.description.raw))}
                  </p>
                  {/* <Link
                    to={el.slug}
                    className="block bg-button-color py-2 mt-4 mx-3 w-1/4 text-center text-sm rounded-full text-white"
                  >
                    Read More
                  </Link> */}
                  <Link
                    to={el.slug}
                    className="buttonnews text-center text-sm rounded-full text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )
          })}
          <div className="flex flex-col justify-between smNews">
            {moreBlogs.map(el => (
              <div className="flex items-center">
                <img
                  src={el.image.fluid.src}
                  alt
                  style={{ maxWidth: 255, height: 155, borderRadius: 20 }}
                />
                <div>
                  <h2
                    className="text-xl leading-none text-gray-800"
                    style={{ fontWeight: "bold" }}
                  >
                    {el.title}
              </h2>
                  <p className="py-2 text-gray-600 texthiddens" >
                  {documentToReactComponents(JSON.parse(el.description.raw))}
                  </p>
                  <Link to={`/${el.slug}`} className="font-bold text-sm text-gray-800 newbt">
                    READ MORE
              </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
