import React, { useState } from "react";
import "./style.scss";
import { Link, useStaticQuery, graphql } from 'gatsby'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const Footer = () => {
  const data = useStaticQuery(graphql`
  query MyQuesswry {
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
  const [contry, setcountry] = useState('india')
  return (
    <div className="footer-section">
      <footer className="bg-gray-800 text-white">
        <div className="w-5/6 mx-auto">
          <div className="flex flex-col">
            <div className="flex">
              <div
                className="border border-gray-500 border-t-none w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul
                  className="ml-5 pl-4 leading-loose  relative"
                  style={{ bottom: "12%" }}
                >
                  <li className="relative" style={{ paddingBottom: '10px' }}>
                    <Link to="#">
                      <img className="imggs" src="/img/Frame.png" alt />
                    </Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="#">Terms of use</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div
                className="border-b border-gray-500 w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul className="ml-5 pl-4 leading-loose">
                  <li className="text-main-color font-bold">
                    <Link to="#">About Us</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/about">Company</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/about">Team</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/job/description">Careers</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div
                className="border border-gray-500 border-t-none w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul className="ml-5 pl-4 leading-loose">
                  <li className="text-main-color font-bold">
                    <Link to="#">Services</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/services/software">Software Product Engineering</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/services/enterprise">Enterprise Solutions</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/services/major-group">Cloud Managed services</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/services/ecomerce">Ecommerce &amp; Learning Solutions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div
                className="border border-gray-500 border-t-none border-b-none w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul className="ml-5 pl-4 leading-loose">
                  <li className="text-main-color font-bold">
                    <Link to="#">Resources</Link>
                  </li>
                  {newdata.map((el, i) => (
                    <>
                      <li className="uhuhi" key={i}>
                        <Link to={`/${el.slug}`}>{el.title}</Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div
                className="border-b border-gray-500 border-b-none w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul className="ml-5 pl-4 leading-loose">
                  <li className="text-main-color font-bold">
                    <Link to="#">Industries</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">Banking</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">E-commerce</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">Education</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">Healthcare</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">Media</Link>
                  </li>
                  <li className="uhuhi">
                    <Link to="/industries">Non Profit Organization</Link>
                  </li>
                </ul>
              </div>
              <div
                className="border border-gray-500 border-t-none border-b-none w-2/3 pl-5"
                style={{ paddingTop: "7em", paddingBottom: "6em" }}
              >
                <ul className="ml-5 pl-4 leading-loose">
                  <li className="text-main-color font-bold">
                    <Link to="#">Location</Link>
                  </li>
                  <select className="selectbox" onChange={(e) => setcountry(e.target.value)}>
                    <option value="india" className="n">india</option>
                    <option value="usa" className="n">USA</option>
                  </select>
                  {contry === "usa" && (
                    <li>
                      USA<br />
                      GOAVEGA Software Inc.<br />
                      550 Reserve Street<br />
                      Suite 190 & 250<br />
                      Southlake, TX 76092<br />
                       call <a href="tel:+14692282339" className="uhuhi">+1 (469) 228-2339</a>
                    </li>
                  )}
                  {contry === "india" && (
                    <li>
                      India<br />
                      #775, 60 feet road, BEML 5th stage,<br />
                      Rajarajeshwari Nagar<br />
                      Bengaluru – 560098, Karnataka, India<br />
                      email  contact@goavega.com<br />
                      call <a href="tel:+918028612485" className="uhuhi">+91-80-28612485</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="bottombar">
            <div>
              <p className="foo">Copyright 2020 @ Goavega Software | All rights reserved.</p>
            </div>
            <div>
              <span className="bns" onClick={() => window.scroll({ top: 100, behavior: 'smooth' })}><ArrowUpwardIcon className="ytyt" /></span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
};
