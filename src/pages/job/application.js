import React from 'react'
import { Layout } from '../../components'
import '../../styles/aplication.css'
export default function Application() {
    return (
        <div>
            <Layout>
                <div style={{ background: '#FAFCFF' }}>
                    <section className="my-5 py-5" >
                        <div className="applicationContainer">
                            <h1>Join our tribe.</h1>
                                <span className="dotmjorgroup22"></span>
                        </div>
                    </section>
                    <section>
                        <div className="application_box">
                            <div className="my-5 py-5">
                                <h2 className="aplyingfor">Applying For?</h2>
                                <div className="flex flex-col justify-between text-lg mt-5 pt-5 ">
                                    <div className="flex justify-between w-5/6 ">
                                        <select
                                            name
                                            id=" "
                                            className="shadow focus:outline-none my-4 bg-white py-4 p-input w-select text-1xl text-gray-200"
                                        >
                                            <option value>Position</option>
                                            <option value >Admin</option>
                                            <option value >ABC</option>
                                            <option value >ABCD</option>
                                        </select>
                                        <select
                                            name
                                            id=" "
                                            className="shadow focus:outline-none my-4 bg-white py-4 p-input w-select text-1xl text-gray-200"
                                        >
                                            <option value>Location</option>
                                            <option value>Location1</option>
                                            <option value>Location2</option>
                                            <option value>Location3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application_box">
                            <h2 className="aplyingfor">Attach Your Resume.</h2>
                            <div className="attachedresume">
                                <div class="md:flex">
                                    <div class="w-full">
                                        <div class="p-3">
                                            <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                                <div class="absolute">
                                                    <div class="flex flex-col items-center "> <i class="fa fa-cloud-upload fa-3x text-gray-200"></i> <span class="block text-gray-400 font-normal">Attach you files here</span> <span class="block text-gray-400 font-normal">or</span> <span class="block text-blue-400 font-normal">Browse files</span> </div>
                                                </div>
                                                <input type="file" class="h-full w-full opacity-0" name="" />
                                            </div>
                                            <div class="flex justify-between items-center text-gray-400"> <span>Accepted files only</span> <span class="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application_box">
                            <h2 className="aplyingfor">
                                Tell Litlle About Yourself
                        </h2>
                            <div className="flex flex-col justify-between text-lg my-5 py-5">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="shadow input_container"
                                />
                                <div className="inputFlex ">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="shadow input_container"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="shadow input_container"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="application_box">
                            <h2 className="aplyingfor">Current Working Status.</h2>
                            <div className="my-5 py-5">
                                <div className="inputFlex ">
                                    <input
                                        type="text"
                                        placeholder="Company"
                                        className="shadow input_container"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Noticed Period"
                                        className="shadow input_container"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="application_box">
                            <h2 className="aplyingfor">
                                Cover Letter <span className="font-normal">(Optional)</span>
                            </h2>
                            <div>
                                <textarea
                                    name
                                    id
                                    cols={30}
                                    style={{ marginTop: '50px' }}
                                    rows={6}
                                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has"
                                    className="textArea shadow"
                                />
                            </div>
                            <a
                                href="#"
                                className="block bg-main-color py-3 px-5 w-56 text-center text-sm text-2xl rounded-full font-bold text-white contactbtn"
                                style={{ marginTop: "3em", marginBottom: "2em" }}
                            >
                                SEND
                        </a>
                        </div>
                    </section>
                </div>
            </Layout>
        </div>
    )
}
