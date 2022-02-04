import React from 'react'
import { Layout } from '../../components'
import '../../styles/services.css'
import { Product,Resource } from '../../layouts/Home'

export default function LearningSolutions() {

    return (
        <Layout>
            <div className="serviceBox">

                <div className="service_conatiner">
                    <span className="dotmjorgroup"></span>
                    <div className="serviceimages">
                        <div>
                            <span className="dotmjorgroup2"></span>
                            <span className="dotmjorgroup3"></span>

                            <h1 className="cloud">Learning <br /> Solutions.</h1>
                            <button className="button"style={{marginTop:'30px',fontSize:'18px'}}>Start Project</button>
                            <span className="dotmjorgroup2"></span>
                            <span className="dotmjorgroup3"></span>
                            <span className="dotmjorgroup4"></span>
                            <span className="dotmjorgroup5"></span>
                        </div>
                        <div>
                            <img className="serviceimage" src={'/img/Rectangle.png'} alt="logo" />
                            <span className="dotmjorgroup4"></span>
                            <span className="dotmjorgroup5"></span>
                        </div>
                    </div>

                    <h1 className="enablement">What is Learning Solutions ?</h1>
                    <span className="dotmjorgroup3"></span>
                    <p className="enabText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h1 className="keyourprocess">Know Our Process.</h1>
                    <div>
                        <div className="servicecont">
                            <div className="cubewidth">
                                <span className="dotmjorgroup3"></span>
                                <div className="cubes">
                                    <div >
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/01.PNG" alt="no image" />
                                    </div>
                                </div>
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                            </div>
                            <div className="cubewidth">
                                <div className="cubes">
                                    <div>
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/02.PNG" alt="no image" />
                                    </div>
                                </div>
                                <span className="dotmjorgroup3"></span>
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="servicecont">
                            <div className="cubewidth">
                                <div className="cubes">
                                    <div >
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/03.PNG" alt="no image" />
                                    </div>
                                </div>
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                                <span className="dotmjorgroup3"></span>
                            </div>
                            <div className="cubewidth">
                                <div className="cubes">
                                    <div>
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/04.PNG" alt="no image" />
                                    </div>
                                </div>
                                
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="servicecont">
                            <div className="cubewidth">
                                <div className="cubes">
                                    <div >
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/05.PNG" alt="no image" />
                                    </div>
                                </div>
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                                
                            </div>
                            <div className="cubewidth">
                                <div className="cubes">
                                    <div>
                                        <img className="cur" src="/img/cube2.PNG" alt="image" />
                                    </div>
                                    <div className="imgflex">
                                        <img className="cubeimage" src="/img/06.PNG" alt="no image" />
                                    </div>
                                </div>
                                <span className="dotmjorgroup3"></span>
                                <p className="cubetext">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                            </div>
                            <div>
                            </div>
                        </div>
                        

                    </div>
                    <Resource />
                </div>
                <Product style={{padding:'0'}} />
                <span className="dotmjorgroupsolution1"></span>
                    <span className="dotmjorgroupsolution0"></span>
                    <span className="dotmjorgroupsolution01"></span>
                    <span className="dotmjorgroupsolution11"></span>
                    <span className="dotmjorgroupsolution02"></span>
                    <span className="dotmjorgroupsolution03"></span>

            </div>
        </Layout>
    )
}
