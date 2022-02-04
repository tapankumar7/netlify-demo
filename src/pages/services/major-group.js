import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components'
import '../../styles/majorgroup.css'
import {Resource} from '../../layouts/Home'
export default function MajorGroup() {
    return (
        <Layout>
            <div className="back">
                <div className="wid">
                    <span className="dotmjorgroup"></span>
                    <h1 className="majorGroup">
                        Cloud Managed <br />
                                Services.
                    </h1>
                    <span className="dotmjorgroup2"></span>
                    <span className="dotmjorgroup3"></span>
                    <span className="dotmjorgroup4"></span>
                    <span className="dotmjorgroup5"></span>

                    <h2 className="majorhead">
                        Our cloud enablement <br />
                                process is seamless, <br />
                                modern, secure and agile.
                            </h2>
                    <div>
                        <ul className="majorbtns">
                            <li
                                className="aws"
                            >
                                <Link
                                    to="/services"
                                    className="majortext"
                                >
                                    Cloud <br />
                                    Enablement
                                </Link>
                            </li>
                            <li
                                className="aws"
                            >
                                <Link to="/services/microservice" className="majortext">
                                    Micro services <br />
                                     development
                                        </Link>
                            </li>
                            <li
                                className="aws"
                            >
                                <Link to="/services/voice" className="majortext">
                                    Voice <br />
                                            Solutions
                                        </Link>
                            </li>
                            <li
                                className="aws"
                            >
                                <Link to="/services/cyber" className="majortext">
                                    Cyber Security <br />
                                            Solutions
                                        </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="major_section">
                        <div>
                            <h2 className="majorhead2">
                                Solutions.
                            </h2>
                   
                            <p className="majortext2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi
                                impedit voluptatum perferendis illo, autem quos unde minus accusamus
                                commodi explicabo ab possimus odio iure, laboriosam obcaecati dolor
                                numquam nihil. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Esse eos eius eum quod unde? Quos voluptas officiis, et eveniet
                                blanditiis quam rerum. Molestias, illo? Rem illum rerum reprehenderit
                                vero doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Laboriosam et exercitationem repellendus quibusdam ipsam
                                voluptate ullam modi provident amet ea ad, at nisi repellat
                                reprehenderit magnam soluta ex, veritatis labore!
                            </p>
                        </div>
                    </div>
                    <span className="dotmjorgroupsolution1"></span>
                    <span className="dotmjorgroupsolution0"></span>
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>
                        <Resource />
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>
                    <section>
                        <div className="majorhead3">
                            <div>
                                <h1 className="majorservice">Other Services.</h1>
                                <ul className="majorelement">
                                    <li
                                        className="yt bg-blue-100 bg-opacity-25"
                                    >
                                        <div className="px-4 py-5">
                                            Software <br />
                                        Product <br />
                                        Engineering
                                    </div>
                                        <Link
                                            to="#"
                                            className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-blue-200 bg-opacity-25"
                                        >
                                            <i className="fa fa-2x fa-angle-right text-center" />
                                        </Link>
                                    </li>
                                    <li
                                        className="yt rounded-lg bg-purple-100 bg-opacity-50 "
                                    >
                                        <div className="px-4 py-5">
                                            Enterpride <br />
                                        Solutions
                                    </div>
                                        <Link
                                            to="#"
                                            className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-purple-200 bg-opacity-50"
                                        >
                                            <i className="fa fa-2x fa-angle-right text-center" />
                                        </Link>
                                    </li>
                                    <li
                                        className="yt rounded-lg bg-pink-100 bg-opacity-50"
                                    >
                                        <div className="px-4 py-5">
                                            Cloud <br />
                                        Managed <br />
                                        services
                                    </div>
                                        <Link
                                            to="service_page.html"
                                            className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-pink-200 bg-opacity-25"
                                        >
                                            <i className="fa fa-2x fa-angle-right text-center" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>
                </div>
            </div>
        </Layout>
    )
}
