import React,{useState} from 'react'
import { Layout } from '../components'
import '../styles/contactUs.css'
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
export default function Contactus() {
    const [data,setData] = useState('')
    const [value,setvalue] = useState('')
    const [useInfo,setUserInfo] = useState({
        name:"",
        company:"",
        phone:"",
        email:"",
        domine:"",
        description:"",
    })
    const submitinfo = (e) => {
        const value = e.target.value;
        setUserInfo({
            ...useInfo,
            [e.target.name]: value
          });
    }

    const handleClick= async(e)=>{
        e.preventDefault();
        const {name,description,company,domine,email,phone} = useInfo
        if(name == '' || description =='' || company == '' || domine == '' || email == '' || phone == '' || data == '' ){
            return alert('fill all fileds')
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(useInfo)
        };
        const url = "/.netlify/functions/email";
        const response = await fetch(url,requestOptions)
        const res = await response.json()
        console.log(res)
        if(res){
            navigate("/")
        }
    }

    return (
        <Layout>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Contact us</title>
            </Helmet>
            <div style={{ background: '#FAFCFF' }}>
                <section className="sectionPadiing">
                    <div id="banner">
                        <div>
                            <h1 className="title-main">Let's Craft Brillance</h1>
                        </div>
                    </div>
                </section>
                <span className="dotmjorgroup222"></span>
                <section className="midbot">
                    <div className="container_width">
                        <div>
                            <h2 className="midHead">A Little About You.</h2>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                    value={useInfo.name}
                                    onChange={(e) => submitinfo(e)}
                                    className="input_container shadow"
                                />
                                <br /> 
                                <input
                                    type="text"
                                    placeholder="Company / Firm"
                                    name="company"
                                    required
                                    value={useInfo.company}
                                    onChange={(e) => submitinfo(e)}
                                    className="input_container shadow"
                                />
                                <div className="inputFlex">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phone"
                                        required
                                        value={useInfo.phone}
                                        onChange={(e) => submitinfo(e)}
                                        className="input_container shadow"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        required
                                        value={useInfo.email}
                                        onChange={(e) => submitinfo(e)}
                                        className="input_container shadow"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Domine of interest"
                                    name="domine"
                                    required
                                    value={useInfo.domine}
                                    onChange={(e) => submitinfo(e)}
                                    className="input_container shadow"
                                />
                                <select className="input_container shadow" onChange={(e)=> setvalue(e.target.value)}>
                                    <option key="0">Select Service</option>
                                    <option key="1" value="Software Product Engineering">Software Product Engineering</option>
                                    <option key="2" value="Enterprise Solutions">Enterprise Solutions</option>
                                    <option key="3" value="Cloud Managed Services">Cloud Managed Services</option>
                                    <option key="4" value="Ecommerce & Learning Solutions">Ecommerce & Learning Solutions</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="container_width">
                        <h2 className="midHead">
                        What Are We Planning To Work on?
                        </h2>
                        <div className="">
                            <textarea
                                name
                                id
                                cols={30}
                                rows={6}
                                name="description"
                                required
                                value={useInfo.description}
                                onChange={(e) => submitinfo(e)}
                                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has"
                                className="textArea shadow"
                            />
                        </div>
                    </div>
                    <div className="container_width">
                        <h2 className="midHead">
                            When Do You Want To Start ?
                        </h2>
                        <div className="buttonFlexContact">
                            <button style={{background:data === "This Week"? "#ECECEC" : "",color:data === "This Week"? "#9D9D9D" : ""}} onClick={() => setData('This Week')} className="bg-white shadow py-4 w-64 mr-4 btnsw">This Week</button>
                            <button style={{background:data === "In Tow Weeks"? "#ECECEC" : "",color:data === "In Tow Weeks"? "#9D9D9D" : ""}} onClick={() => setData('In Tow Weeks')} className="bg-white shadow py-4 w-64 mr-4 btnsw">In Two Weeks</button>
                            <button style={{background:data === "In A Month"? "#ECECEC" : "",color:data === "In A Month"? "#9D9D9D" : ""}} onClick={() => setData('In A Month')} className="bg-white shadow py-4 w-64 btnsw">In A Month</button>
                        </div>
                    </div>
                    <div className="container_width">
                        <a
                            href="#"
                            className="block bg-main-color py-3 px-5 w-56 text-center text-sm text-2xl rounded-full font-bold text-white contactbtn"
                            style={{ marginTop: "3em", marginBottom: "2em" }}
                            onClick={handleClick}
                        >
                            SEND
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
