import React from "react";
import "./style.scss";
import { Carousel } from "../../../components";

const images = [
  "img/goav1.png",
  "img/goava2.png",
  "img/goava3.png",
  "img/goava4.png",
];

export const Attention = () => (
  <section className="homeAttention">
    <div className="container">
      <div className="flex justify-between">
        <div>
          <h3 className="title-main22 leading-none text-gray-800">
            We <span>love the</span>
            <br />
            <span>attention</span> we are <br />
            getting.
          </h3>
          <p className="text-gray-600 text-size-1.7">
          Then again, who doesn't? With the awards and facilitations we have
            received so far, we are now hungry for even more.
          </p>
        </div>
        <div className="bg-gray-200 w-1/2 relative">
          <Carousel>
            {images.map((item, index) => (
              <img src={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);
