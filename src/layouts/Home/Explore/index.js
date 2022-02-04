import React from "react";
import "./style.scss";
import { Link } from "gatsby"

export const Explore = () => {
  return (
      <section className="homeExplore container">
     <span className="dot"></span>
        <div id="banner" className="flex justify-center items-center">
          <div className="banner-img">
            <img src="/img/banner.png" alt="no pic" />
          </div>
          <div className="banner-text text-gray-800">
            <h1 className="font-bold leading-none text-gray-700 text-size-3.5">
              Your Digital <br />
              Transformation <br />
              Partner
            </h1>
            <p className="text-2xl">
              We'd like you to focus on your digital transformation. With expertise
              in strategy, design, and engineering, we will take care of the rest.
        </p>
        
            <Link
              to="/job/description"
            >
             <button
              className="button rounded-full font-bold"
             > Explore</button>
        </Link>
          </div>
        </div>
      </section>
  )
};
