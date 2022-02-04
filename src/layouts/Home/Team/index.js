import React from "react";
import { Link } from "gatsby";
import "./style.scss";

export const Team = () => (
  <section className="homeTeam">
    <div className="container">
      <div className="flex flex-col">
        <h1 className="title-main mx-auto space-y-4 text-gray-800">
          Meet The <span>Team.</span>
        </h1>
        <div className="space-y-4 my-5 py-5 frames">
          <div className="flex justify-between">
            <div className="h-64 mr-4">
              <img src="/img/team.png" className="scaleimage" />
            </div>
            <div className="h-64 ml-4">
              <img src="/img/team.png" className="scaleimage" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="h-64 mr-4 ">
              <img src="/img/team.png" className="scaleimage" />
            </div>
            <div className="h-64 ml-4 flex scaleimage flex-col items-center justify-center text-2xl text-white bg-main-color">
              <img src="/img/team.png" className="scaleimage" />
              <div className="textDetails">
                <p>Explore Openings</p>
                <span>Join our Team</span>
                <Link
                  to="/job/description"
                  className="btnmeet"
                >
                  <button>
                  CAREERS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
