import React from "react";
import { Link } from "gatsby";
import "./style.scss";

export const Product = () => (
  <section className="homeProduct">
    <div className="container">
      <div className="title">
        <h3 style={{textAlign:'center !important'}} className="title-main text-center text-gray-800">
          Let's build your next big <span>Product.</span>
        </h3>
      </div>
      <ul className="flex justify-between">
        <li>
          <Link
            to="/contactus"
            className="block btnpro bg-button-color py-4 px-5  w-auto text-center text-xl rounded-full font-bold text-white"
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block btnpro bg-button-color py-4 px-5  w-auto text-center text-xl rounded-full font-bold text-white"
          >
            Free Product Assessment
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block btnpro bg-button-color py-4 px-5  w-auto text-center text-xl rounded-full font-bold text-white"
          >
            MVP in 30 days
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
