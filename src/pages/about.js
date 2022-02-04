import React from 'react'
import { Layout } from '../components'
import { Helmet } from "react-helmet"
import {
    Team,
    Product,
    Blogs
} from "../layouts/Home";
import '../styles/about.css'
import CountUp from 'react-countup';
export default function About() {
    const newdata = [{
        name: "Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
        image: "/img/Rectangle.png"
    },
    {
        name: "Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
        image: "/img/Rectangle.png"
    },
    {
        name: "Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
        image: "/img/Rectangle.png"
    }
    ]
    return (
        <Layout>
            <Helmet>
            <meta charSet="utf-8" />
            <title>About Us</title>
            </Helmet>
            <div classname="aboutss">
                <div className="aboutescontainer">
                    <div className="textaligns">
                        <h1 className="headling">We Are Tech Nerds</h1>
                        <p className="headlingtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className="aboutflex">
                        <div>
                            <p className="po">Years of Age</p>
                            <h1 className="numbers"><CountUp start={0} end={7} duration={6} />+</h1>
                        </div>
                        <div>
                            <p className="po">Years of Age</p>
                            <h1 className="numbers"> <CountUp start={0} end={30} duration={5} />+</h1>
                        </div>
                        <div>
                            <p className="po">Years of Age</p>
                            <h1 className="numbers"><CountUp start={0} end={40} duration={4} />+</h1>
                        </div>
                        <div>
                            <p className="po">Years of Age</p>
                            <h1 className="numbers"><CountUp start={0} end={10} duration={5} />+</h1>
                        </div>
                    </div>
                    <div className="imagess">
                        <div className="w">
                            <img className="uyui" src="/img/Rectangle.png" alt="no image" />
                        </div>
                        <div className="w">
                            <h1 className="aboutheadingsss">About Us</h1>
                            <p className="aboutetxtss">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                        </div>
                    </div>
                    <h1 className="founder">Founders. (or how it all started )</h1>
                    <div className="newsws">
                        {newdata.map(el => (
                            <div className="t">
                                <div>
                                    <img className="hhy" src={el.image} alt="no image" />
                                </div>
                                <div><h1 className="carsss">{el.name}</h1></div>
                                <div><h1 className="aboutcontaner">{el.para}</h1></div>
                            </div>
                        ))}
                    </div>
                    <h1 className="founder">Latest Blog.</h1>
                    <Blogs />
                    
                </div>
                <Team />
                <Product />
            </div>
        </Layout>
    )
}
