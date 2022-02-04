import React from "react";
import { Link } from "gatsby";
import "./style.scss";
import CountUp from 'react-countup';
const Border = () => (
  <div>
    <span className="bg-button-color" />
    <span className="bg-button-color" />
  </div>
);

export const Services = () => (
  <section className="flex flex-col homeServices">
    <div className="container">
      <div className="flex items-center justify-between text-gray-800 cards">
        <div className="flex flex-col items-center justify-between p-4 w-1/2">
          <div className="circle rounded-full"><img src="/img/yrs.png" /> </div>
          <div className="title">Years of Age</div>
          <span className="count"><CountUp start={0} end={7} duration={5} />+</span>
        </div>
        <div className="flex flex-col items-center justify-between p-4 w-1/2">
          <div className="circle rounded-full"><img src="/img/happy.png" /></div>
          <div className="title">Happy Customers</div>
          <span className="count"><CountUp start={0} end={30} duration={5} />+</span>
        </div>
        <div className="flex flex-col items-center justify-between p-4 w-1/2">
          <div className="circle rounded-full"><img src="/img/products.png" /></div>
          <div className="title">Products</div>
          <span className="count"><CountUp start={0} end={40} duration={3.75} />+</span>
        </div>
      </div>
      <div className="text-gray-800">
        <h2 className="title-main" style={{textAlign:'left'}}>
          Our <span>Services.</span>
        </h2>
        <p className="text-2xl my-4 pb-4">
          Outperform your competitors with an empowered and engaged (developement/eng.) team. Get real results from your Digital initiatives.
        </p>
        <div className="services">
          <div className="flex justify-between my-4 py-5">
            <div className="w-1/2">
              <h3 className="title-corner">
                Software Product Engineering
                <Border />
              </h3>
              <p className="text-gray-600 text-2xl p-title-corner">
                <div>
                  <Link to="/services/devops">DEVOPS</Link> 
                </div>
                <div>
                  <Link to="/services/ai">AI & Machine Learning</Link>
                </div>
                <div>
                  <Link to="/services/iot">IOT</Link>
                </div>
                <div>
                  <Link to="/services/productideation">Product ideation & Development</Link>
                </div>
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="title-corner">
                Enterprise Solutions
                <Border />
              </h3>
              <p className="text-gray-600 text-2xl p-title-corner">
                <div>
                  <Link to="/services/uiux">UIUX</Link>
                </div>
                <div>
                  <Link to="/services/digitaltransformation">Digital Transformation services</Link>
                </div>
                <div>
                  <Link to="/services/enterprisemobility">Enterprise Mobility</Link>
                </div>
                <div>
                  <Link to="/services/analytics">BI & Analytics Solutions</Link>
                </div>
              </p>
            </div>
          </div>
          <div className="flex justify-between my-4 py-5">
            <div className="w-1/2">
              <h3 className="title-corner">
                Cloud Managed services
                <Border />
              </h3>
              <p className="text-gray-600 text-2xl p-title-corner">
                <div>
                  <Link to="/services/">Cloud Enablement</Link>
                </div>
                <div>
                  <Link to="/services/microservice">Micro services developement</Link>
                </div>
                <div>
                  <Link to="/services/voice">Voice Solutions </Link>
                </div>
                <div>
                  <Link to="/services/cyber">Cyber Security Solutions</Link>
                </div>
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="title-corner">
                Ecommerce & Learning Solutions
                <Border />
              </h3>
              <p className="text-gray-600 text-2xl p-title-corner">
                <div>
                  <Link to="/services/learningsolutions">Learning Solutions</Link>
                </div>
                <div>
                  <Link to="/services/ecommercedevelopment">Ecommerce development</Link>
                </div>
                <div>
                  <Link to="/services/arvr">AR/VR</Link>
                </div>
                <div>
                  <Link to="/services/ecommerceintegration">Ecommerce Integrations</Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
