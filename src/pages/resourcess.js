import React from 'react'
import { Layout } from '../components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../styles/resourcess.css'
import downloadFile from '../styles/sample.pdf'

import {
    Product,
} from "../layouts/Home";

import { Link, useStaticQuery, graphql } from 'gatsby'
export default function Ressources() {
    const data = useStaticQuery(graphql`
    query MyQuerssy {
        allContentfulBlogs {
          nodes {
            image {
              title
              fluid {
                src
              }
            }
            description {
              raw
            }
            title
            slug
          }
        }
      }
      
    `)
    const newdata = data.allContentfulBlogs.nodes
    return (
        <Layout>
            
            <div className="bgcolor">
                <div className="desc_box">
                    <span className="dotmjorgroup"></span>
                    <div className="resource_baner">
                        <h1 className="resource_baner_text">Resourcesss</h1>
                        <span className="dotmjorgroup2"></span>
                        <span className="dotmjorgroup3"></span>
                        <span className="dotmjorgroup4"></span>
                        <span className="dotmjorgroup5"></span>
                    </div>
                    <h3 className="articlesblogs">Articles and Blogs.</h3>
                    <div className="blogresorce">
                        {newdata.map(el => (
                            <div className="contat" style={{ borderRadius: 20 }}>
                                <img
                                    src={el.image.fluid.src}
                                    alt
                                    className="imgsrcc"
                                />
                                <div className="p-5 wwww">
                                    <h4 className="tites">
                                        {el.title}
                                    </h4>
                                    <p className="py-2 text-gray-600 texthiddens" >
                                        {documentToReactComponents(JSON.parse(el.description.raw))}
                                    </p>
                                    <Link
                                        to={`/${el.slug}`}

                                    >
                                        <button className="btntn">
                                            {" "}
                                            Read More{" "}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="mx-auto my-4 flex text-gray-700 text-2xl">
                        <button>
                            <i className="fa fa-angle-left font-bold" />
                            <span className="mx-4 font-bold">Previous</span>
                        </button>
                        <ul className="flex font-bold text-gray-500">
                            <li className="mx-2 text-gray-900">1</li>
                            <li className="mx-2">2</li>
                            <li className="mx-2">3</li>
                            <li className="mx-2">4</li>
                            <li className="mx-2">5</li>
                            <li className="mx-2">6...</li>
                            <li className="mx-2">12</li>
                        </ul>
                        <button>
                            <span className="mx-4 font-bold">Next</span>
                            <i className="fa fa-angle-right font" />
                        </button>
                    </div> */}
                    <h2 className="titles ">Whitepapers.</h2>
                    <div>
                        <h6 className="parass">
                            Technology Trends in Manufacturing Industry for 2021
                            </h6>
                        <div className="snug">
                            t is established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like
                            reable English.
                            </div>
                        <a
                            href={downloadFile} download
                            className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm"
                        >
                            DOWNLOAD
                            </a>
                    </div>
                    <div>
                        <h6 className="parass">
                            Impact of 5G on Gaming Industry
                            </h6>
                        <div className="snug">
                            t is established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like
                            reable English.
                            </div>
                        <a
                            href={downloadFile} download
                            className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm"
                        >
                            DOWNLOAD
                            </a>
                    </div>
                    <div>
                        <h6 className="parass">
                            Impact of 5G on Automotive Industry
                            </h6>
                        <div className="snug">
                            t is established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like
                            reable English.
                            </div>
                        <a
                            href={downloadFile} download
                            className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm"
                        >
                            DOWNLOAD
                            </a>
                    </div>
                    <span className="dotmjorgroupsolution1"></span>
                    <span className="dotmjorgroupsolution0"></span>
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>

                </div>
                <Product />
            </div>
        </Layout>
    )
}
