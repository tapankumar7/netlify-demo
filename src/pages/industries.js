import React,{useState} from 'react'
import { Layout } from '../components'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import '../styles/industries.css'
import {
    Product,
    Resource
  } from "../layouts/Home";
const Industries = () => {
    const [data,setdata] = useState('Banking')
  
    return (
        <Layout>
             <Helmet>
            <meta charSet="utf-8" />
            <title>Industries</title>
            </Helmet>
            <div className="back">
                <div className="wid">
                <span className="dotmjorgroup"></span>
                    <h1 className="majorGroups">
                        Industries 
                    </h1>
                <span className="dotmjorgroup2"></span>
                    <span className="dotmjorgroup3"></span>
                    <span className="dotmjorgroup4"></span>
                    <span className="dotmjorgroup5"></span>
                    <h2 className="majorheads">
                        Our cloud enablement <br />
                                process is seamless, <br />
                                modern, secure and agile.
                    </h2>
                    <div className="uyu">
                    <ul className="majorbtns22">
                            <li
                                className="awsa"
                                onClick={() => setdata("Banking")}
                                style={{background: data == "Banking" ?'#ECECEC':""}}

                            >
                                <Link
                                    className="majortext22"
                                >
                                    Banking
                                </Link>
                            </li>
                            <li
                                className="awsa"
                                onClick={() => setdata("E-Commerece")}
                                style={{background: data == "E-Commerece" ?'#ECECEC':""}}
                            >
                                <Link  className="majortext22" >
                                    E-Commerce
                                            
                                        </Link>
                            </li>
                            <li
                                className="awsa"
                                onClick={() => setdata("Education")}
                                style={{background: data == "Education" ?'#ECECEC':""}}
                            >
                                <Link className="majortext22" >
                                    Education
                                </Link>
                            </li>
                            <li
                                className="awsa"
                                onClick={() => setdata("Healthcare")}
                                style={{background: data == "Healthcare" ?'#ECECEC':""}}
                            >
                                <Link  className="majortext22" >
                                Healthcare 
                                </Link>
                            </li>
                            
                        </ul>
                        <ul className="majorbtns222">
                            <li
                                className="awsa"
                                onClick={() => setdata("Media")}
                                style={{background: data == "Media" ?'#ECECEC':""}}
                            >
                                <Link  className="majortext22" >
                                Media
                                </Link>
                            </li>
                            <li
                                className="awsa"
                                onClick={() => setdata("Organization")}
                                style={{background: data == "Organization" ?'#ECECEC':""}}
                            >
                                <Link className="majortext22" >
                                Non-profit Organization 
                                </Link>
                            </li>
                        </ul>
                        </div>
                        {data === "Banking" && (
                            <>
                        <h1 className="um">Banking</h1>
                        <p className="industry_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}


                            {/* this is Ecommerce content */}

                            {data === "E-Commerece" && (
                            <>
                        <h1 className="um">E-Commerce</h1>
                        <p className="industry_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}

                        {data === "Education" && (
                            <>
                        <h1 className="um">Education</h1>
                        <p className="industry_para">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}


                    {data === "Healthcare" && (
                            <>
                        <h1 className="um">Healthcare</h1>
                        <p className="industry_para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}
                        {data === "Media" && (
                            <>
                        <h1 className="um">Media</h1>
                        <p className="industry_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}
                         {data === "Organization" && (
                            <>
                        <h1 className="um">Non Profit Organization</h1>
                        <p className="industry_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 className="Capabilities">Capabilities:</h3>
                        <div className="ulFlex">
                            <div>
                                <ul>
                                    <li className="lis">Omni Channel</li>
                                    <li className="lis">Digital Signage</li>
                                    <li className="lis">Mobile Commerce</li>
                                    <li className="lis">Catalog Management</li>
                                    <li className="lis">Order Management</li>
                                    <li className="lis">ERPs CRM WMS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="lis">POS & Payment Gateway</li>
                                    <li className="lis">Search, Recommendations</li>
                                    <li className="lis">Social commerce Analytics</li>
                                    <li className="lis">Integrated Customer Insights</li>
                                    <li className="lis">Sales Commission Management</li>
                                    <li className="lis">E-marketing Rating and Reviews</li>
                                </ul>
                            </div>
                        </div>
                            </>
                        )}
                        

                        <span className="dotmjorgroupsolution1"></span>
                    <span className="dotmjorgroupsolution0"></span>
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>
                       <Resource />
                </div>
                <Product />
            </div>
        </Layout>
    )
}
export default Industries