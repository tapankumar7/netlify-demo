import React from 'react'
import { Layout } from '../components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../styles/resourcess.css'
import downloadFile from '../styles/sample.pdf'
import { Helmet } from "react-helmet"

import {
    Product,
} from "../layouts/Home";

import { Link, useStaticQuery, graphql } from 'gatsby'



export const query = graphql`
query MyQuerssys($skip: Int!, $postsPerPage : Int!) {
    allContentfulBlogs(skip:$skip, limit:$postsPerPage) {
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
`
export default function Ressources({ data, pageContext }) {
    const newdata = data.allContentfulBlogs.nodes
    const [showModal, setShowModal] = React.useState(false);
    const [name, setname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [empty, setEmpty] = React.useState(false);


    const submits = async (e) => {
        e.preventDefault();
        if (name == "" || email == "") {
            return alert("fill all feilds")
        }
        const useInfo = {
            name,
            email
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(useInfo)
        };
        const response = await fetch('/.netlify/functions/download', requestOptions)
        const res = response.json()
        setShowModal(false)
    }
    return (
        <Layout>
             <Helmet>
            <meta charSet="utf-8" />
            <title>Resources</title>
            </Helmet>
            <div className="bgcolor">
                <div className="desc_box">
                    <span className="dotmjorgroup"></span>
                    <div className="resource_baner">
                        <h1 className="resource_baner_text">Resources</h1>
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
                    <div className="mx-auto my-4 flex text-gray-700 text-2xl">
                        <ul className="flex font-bold text-gray-500">
                            <Link to={`/resources`}>
                                <button>
                                    <i className="fa fa-angle-left font-bold" />
                                    <span className="mx-4 font-bold">Previous</span>
                                </button>
                            </Link>
                            {[...Array(pageContext.numberOfPages)].map((x, i) =>
                                i === 0 ? (
                                    <li className="mx-2"><Link to={`/resources`} key={i}>{i + 1}</Link></li>
                                ) : (
                                        <li className="mx-2"><Link to={`/resources/${i + 1}`} key={i}>{i + 1}</Link></li>
                                    )
                            )}
                        </ul>
                        <Link to={`/resources/${pageContext.numberOfPages}`}>
                            <button>
                                <span className="mx-4 font-bold">Next</span>
                                <i className="fa fa-angle-right font" />
                            </button>
                        </Link>
                    </div>
                    <h2 className="titles ">Whitepapers.</h2>

                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-2xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Download White Paper
                                             </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span style={{ color: 'black' }} className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <input
                                                type="text"
                                                placeholder="Name..."
                                                name="name"
                                                required
                                                style={{ width: "100%" }}
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                                className="input_container shadow"
                                            />
                                            <br />
                                            <input
                                                type="email"
                                                placeholder="Email..."
                                                name="email"
                                                required
                                                style={{ width: '100%' }}
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                                className="input_container shadow"
                                            />
                                            {empty && (
                                                <p style={{ color: 'red' }}>Please Fill all fields to download whitepaper</p>
                                            )}
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 rounded-b">
                                            {name == '' && email == '' ? (
                                                <button style={{ width: '100%', outline: 'none' }} onClick={() => setEmpty(true)} className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm">
                                                    DOWNLOAD
                                                </button>
                                            ) : (
                                                    <a
                                                        style={{ width: '100%' }}
                                                        onClick={submits}
                                                        href={downloadFile} download
                                                        className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm"
                                                    >
                                                        DOWNLOAD
                                                    </a>

                                                )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

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
                        <button style={{ outline: 'none' }} className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm" onClick={() => setShowModal(true)}>
                            DOWNLOAD
                        </button>
                        {/* <a
                            href={downloadFile} download
                            className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm"
                        >
                            DOWNLOAD
                        </a> */}
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
                        <button style={{ outline: 'none' }} className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm" onClick={() => setShowModal(true)}>
                            DOWNLOAD
                        </button>
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
                        <button style={{ outline: 'none' }} className="block bg-main-color py-4 px-5 w-1/4 text-center rounded-full font-bold text-white bjm" onClick={() => setShowModal(true)}>
                            DOWNLOAD
                        </button>
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
