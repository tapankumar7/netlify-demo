import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components'
import '../../styles/jobDescription.css'
import { Product } from '../../layouts/Home/index'


import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Description() {
    const classes = useStyles();
    const [togle, settogle] = useState(false)
    return (
        <div>
            <Layout>
                <div className="bgcolor">
                    <div className="desc_box">
                        <section className="my-5 py-5">
                            <div>
                                <h1 className="desc_box_h1">
                                    Want to be a part of our Tribe?
                                </h1>
                            </div>

                        </section>
                        <span className="dotmjorgroup22A"></span>
                        <section className="">
                            <h2 className="desc_box_midHead">Discover if you fit in.</h2>
                            <div className="desc_container">
                                <div className="dex">
                                    <div>
                                        <img src="/img/cube2.PNG" alt className="imgdesc" />
                                        <h1 className="mutualRespect">
                                            Mutual Respect
                                        </h1>
                                    </div>
                                    <p className="mutualText">
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                    </p>
                                </div>
                                <div className="dex">
                                    <div className="">
                                        <img src="/img/cube2.PNG" alt className="imgdesc" />
                                        <h1 className="mutualRespect">
                                            Work Ownership
                                        </h1>
                                    </div>
                                    <p className="mutualText">
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                    </p>
                                </div>
                            </div>
                            <div className="desc_container">
                                <div className="dex">
                                    <div>
                                        <img src="/img/cube2.PNG" alt className="imgdesc" />
                                        <h1 className="mutualRespect">
                                            Integrity
                                        </h1>
                                    </div>
                                    <p className="mutualText">
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                    </p>
                                </div>
                                <div className="dex">
                                    <div className="">
                                        <img src="/img/cube2.PNG" alt className="imgdesc" />
                                        <h1 className="mutualRespect">
                                            Sense of Humour
                                        </h1>
                                    </div>
                                    <p className="mutualText">
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                        There are many variations of
                                        passage of lorem ipsum
                                        available,but majority have
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="">
                            <div className="">
                                <h2 className="desc_box_midHead">Discover if you fit in.</h2>
                                <div className="flex_desc">
                                    <div className="flex items-end">
                                        <div className="font-bold text-main-color buisnessdev">
                                            Business Development Manager.
                                    </div>
                                        <span
                                            className="mx-5 flex waw"
                                        >
                                            BENGALURU
                                    </span>
                                    </div>
                                    <button onClick={() => settogle(!togle)}>
                                        <i className="fa fa-angle-up fa-2x" />
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className={togle === false ? "accordion" : "accordionhide"}>
                            <div className="">
                                <h2 className="desc_box_midHead2">Job Description.</h2>
                                <div>
                                    <div className="dex_text">
                                        We are looking for freethinkers who visualize what others don't and
                                        are comfortable outside the box. People who empathize with users and
                                        simplify solutions like a piece of cake!
                                </div>
                                    <div className="dex_text">
                                        You should be excited about research and analysis and also be
                                        open-minded with an unquenchable thirst for new approaches and
                                        solutions to real-world problems faced by a common man.
                                </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="desc_box_midHead2">Roles &amp; Responsabilities.</h2>
                                <div>

                                    <div className="dex_texts">
                                        <ul>
                                            <li style={{ listStyleType: "square" }}>
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span className="dotmjorgroup2"></span>
                            <span className="dotmjorgroup5"></span>
                            <div className="">
                                <h2 className="desc_box_midHead2">Skills Required.</h2>
                                <div className="">
                                    <div className="dex_texts">
                                        <ul className="">
                                            <li style={{ listStyleType: "square" }} className>
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                            <li style={{ listStyleType: "square" }} className="my-8">
                                                We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.We are looking for freethinkers who visualize what others don't
                                                and are comfortable outside the box.
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link
                                    to="/job/application"
                                    className="descbt block bg-main-color py-4 px-5 text-center text-xl rounded-full font-bold text-white"
                                >
                                    APPLY NOW
                            </Link>
                            </div>
                        </section>
                        <span className="dotmjorgroupsolution1"></span>
                        <span className="dotmjorgroupsolution0"></span>
                        <span className="dotmjorgroupsolution01"></span>
                        <span className="dotmjorgroupsolution11"></span>
                        <span className="dotmjorgroupsolution02"></span>
                        <span className="dotmjorgroupsolution03"></span>
                        <section>
                            <div className={classes.root}>
                                <Accordion style={{ marginBottom: '20px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>
                                            <div className="buisness_developmemt_col">
                                                <div className="heading_developmemt">
                                                    Business Development Manager
                                        </div>
                                                <span
                                                    className="mx-5 text-gray-300 buisn"
                                                >
                                                    BENGALURU
                                         </span>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className="development_text">
                                            Lorem Ipsum is simply dummy text of printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the.
                                        </p>
                                    </AccordionDetails>
                                    <Link
                                    to="/job/application"
                                    className="descbt block bg-main-color py-4 px-5 text-center text-xl rounded-full font-bold text-white"
                                >
                                    APPLY NOW
                                    </Link>
                                </Accordion>
                                <Accordion style={{ marginBottom: '20px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>
                                            <div className="buisness_developmemt_col">
                                                <div className="heading_developmemt">
                                                    Business Development Manager
                                        </div>
                                                <span
                                                    className="mx-5 text-gray-300 buisn"
                                                >
                                                    BENGALURU
                                         </span>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className="development_text">
                                            Lorem Ipsum is simply dummy text of printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the.
                                                 </p>
                                    </AccordionDetails>
                                    <Link
                                    to="/job/application"
                                    className="descbt block bg-main-color py-4 px-5 text-center text-xl rounded-full font-bold text-white"
                                >
                                    APPLY NOW
                                    </Link>
                                </Accordion>
                                <Accordion style={{ marginBottom: '20px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>
                                            <div className="buisness_developmemt_col">
                                                <div className="heading_developmemt">
                                                    Business Development Manager
                                        </div>
                                                <span
                                                    className="mx-5 text-gray-300 buisn"
                                                >
                                                    BENGALURU
                                         </span>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className="development_text">
                                            Lorem Ipsum is simply dummy text of printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the.
                                                 </p>
                                    </AccordionDetails>
                                    <Link
                                    to="/job/application"
                                    className="descbt block bg-main-color py-4 px-5 text-center text-xl rounded-full font-bold text-white"
                                >
                                    APPLY NOW
                                    </Link>
                                </Accordion>

                            </div>

                        </section>
                        <section className="carosel_buiness">
                            <div>
                                <div className="">
                                    <h1 className="titleHeading_buisness">
                                        Let Hear What Our Tribe Has To Say
                                </h1>
                                    <div className="carousell my-5 py-5 mx-auto w-1/2">
                                        <div className="flex flex-col rounded-lg w-full">
                                            <div
                                                className="bg-gray-400 mx-auto rounded-lg imageuser"

                                            ></div>
                                            <div className="">
                                                <h2
                                                    className="authorName"
                                                >
                                                    Nithin (Designation)
                                            </h2>
                                                <p
                                                    className="authordesc"
                                                >
                                                    Lorem Ispum is simply dummy text of the pritting and typestting
                                                    industry.Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the.
                                            </p>
                                            </div>
                                        </div>
                                        <button className="absolute" style={{ top: "25%", left: "0%" }}>
                                            <i className="fa fa-angle-left fa-2x" />
                                        </button>
                                        <button className="absolute" style={{ top: "25%", right: "0%" }}>
                                            <i className="fa fa-angle-right fa-2x" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Product />
            </Layout>
        </div>
    )
}
