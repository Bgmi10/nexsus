import React, { Fragment, useEffect, useState, useRef } from "react";
import { CgMouse } from "react-icons/cg";
import { DiCelluloid } from "react-icons/di";

import "../Home/Home.css";
import MetaData from "../layout/MetaData";
import Button from '@mui/material/Button';
import temp from "../../images/Frame.svg";
import founder from "../../images/6.png"
import im20 from "../../images/20.png";
import temp1 from "../../images/playstore.png";
import tetmo from "../../images/tetmo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import ReCAPTCHA from "react-google-recaptcha";

import mt from "../../images/meet.png";
import { Alert } from "@mui/material";

const Book = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    //const { loading, error, products } = useSelector((state) => state.products);
    const { loading, error, texts } = useSelector((state) => state.texts);
    const [rec, setRec] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [reason, setReason] = useState("");


    const recaptchaRef = React.createRef();
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const categories = [
        "Web - VAPT",
        "API - VAPT",
        "Netowrk - VAPT",
        "Smart Contract - VAPT",
        "Self - Courses",
        "Collaboration - Courses",
        "Udemy - Courses",
        "Other",
      ];
      
    async function submitForm(event) {
        event.preventDefault()
        const captchaValue = recaptchaRef.current.getValue()
        if (!captchaValue) {
            alert.error('Please verify the reCAPTCHA!')
        } else {
            const myForm = new FormData();

            myForm.set("name", name);
            myForm.set("email", email);
            myForm.set("phone", phone);
            myForm.set("service", service);
            myForm.set("reason", reason);
            console.log(service);
            dispatch(createMeet(myForm));
            alert.success('Form submission successful!')
        }
    }

    function bookMeeting() {
        history.push("/book");
    }

    function onChange(value) {
        setRec(value);
        console.log(recaptchaRef.current.getValue());

    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllText());
    }, [dispatch, error, alert]);

    console.log(texts);

    return (
        <Fragment>
            <MetaData title="Home" />
            <div className="main">
                <div className="mg rest">
                    <div className="contact">
                        <div className="baye">
                            <div className="down heading">
                                <h2 className="white-why ">
                                    <span className="color-why ml-2 ">Book a meeting</span>
                                </h2>
                            </div>
                            <p>Let's meet and discuss your ideas</p>
                        </div>
                        {response ? (
                            <div className="daye">
                                <h2>We will contact you soon</h2>
                            </div>
                        ) : 
                        <div>
                         {isimg ? <div style={{ display: "block" }} className="daye">
                                <h2>Fill this form and our team will reach out to you soon!</h2>
                                <form >
                                    <input className="enquiry" placeholder="Name" type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <input className="enquiry flex"
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <input className="enquiry"
                                        placeholder="Phone No."
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <select className="enquiry" value={service} onChange={(e) => setService(e.target.value)}>
                                        <option value="">Choose Category</option>
                                        {categories.map((cate) => (
                                            <option key={cate} value={cate}>
                                                {cate}
                                            </option>
                                        ))}
                                    </select>
                                    <input placeholder="General enquiry"
                                        type="text" className="enquiry message"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)} />
                                   
                                </form>
                                <Button
                                        variant="contained" type="submit" onClick={submitForm}>Submit</Button>
                            </div> : null}
                        </div>
                    }
                     <div>
                        
                         {!isimg ? <div style={{ display: "block" }} className="daye flex-col">
                                <h2>Fill this form and our team will reach out to you soon!</h2>
                                <form >
                                    <input className="enquiry" placeholder="Name" type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <input className="enquiry flex"
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <input className="enquiry"
                                        placeholder="Phone No."
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <select className="enquiry" value={service} onChange={(e) => setService(e.target.value)}>
                                        <option value="">Choose Category</option>
                                        {categories.map((cate) => (
                                            <option key={cate} value={cate}>
                                                {cate}
                                            </option>
                                        ))}
                                    </select>
                                    <input placeholder="General enquiry"
                                        type="text" className="enquiry message"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)} />
                                   
                                </form>
                                <Button
                                        variant="contained" type="submit" onClick={submitForm}>Submit</Button>
                            </div> : null}
                        </div>
                    </div>
                </Fragment>
            )
            }
        </Fragment >
    );
};

export default Book;
