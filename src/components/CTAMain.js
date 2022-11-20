import React, { useState, useRef } from 'react'
/*import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from 'next/router';


const MySwal = withReactContent(Swal);

const alertMessage = (title, icon, notify) => {
    MySwal.fire({
        title: title,
        text: notify,
        icon: icon,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};*/

const CTAMain = () => {
    //const hcaptchaKey = process.env.REACT_APP_HCAPTCHA_SECRET_KEY;
    const [token, setToken] = useState("");
    const captcha = useRef();
    //const router = useRouter();

    const initialState = { name: "", email: "", phone: "", msg: "" };
    const [userData, setUserData] = useState(initialState);
    const { name, email, phone, msg } = userData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*if (!token) {
            alertMessage("Error", "error", " You must verify the Captcha");
            return;
        }*/
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ name: name, email: email, phone: phone, msg: msg }),
        });

        /*if (res.status == 200) {
            alertMessage("Success", "success", " Your request has been sent successfully , we will be in touch");
            setTimeout(() => {
                router.push("/service");
            }, 5000);
        } else {
            alertMessage("Error", "error", " Ooops Error sending the message");
            setTimeout(() => {
                router.push("/service");
            }, 5000);
        }*/
    };

    return (
        <>
            <div className="cta-area container-fluid">
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 mb-3 text-white">Cape Town Solar, Dstv and aerial  Installations</h1>
                            <span className="col-lg-10 fs-4 text-white"> Solar, Dstv and aerial  Accredited installation contractor specializing in residential and commercial Solar, Dstv and aerial  Installations across the whole Western Cape.</span>
                        </div>
                        <div className="col-md-10 mx-auto pt-4 col-lg-5 cta-box">
                            <h2 className="text-center"> Request A Quote</h2>

                            <form className="p-4 p-md-5  rounded-3 bg-light">
                                <div className="text-center mb-3">
                                    <small className="text-muted ">Cape Town Solar, Dstv and aerial  Installations is here to help you</small>
                                </div>

                                <div className="form-floating mb-3 ">
                                    <input type="text" name="name" value={name} /*onChange={handleChangeInput}*/ className="form-control border-0" id="floatingName" />
                                    <label htmlFor="floatingName">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" name="email" value={email} /*onChange={handleChangeInput}*/ className="form-control border-0" id="floatingInput" />
                                    <label htmlFor="floatingInput">Email </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="phone" value={phone} /*onChange={handleChangeInput}*/ className="form-control border-0" id="floatingCell" />
                                    <label htmlFor="floatingCell">Phone </label>
                                </div>

                                <div className=" form-floating mb-3">
                                    <textarea type="text" className="form-control border-0" name="msg" value={msg} /*onChange={handleChangeInput}*/ id="msg" />
                                    <label htmlFor="floatingMsg">Message:</label>
                                </div>
                                

                                <button className="w-100 default-btn" type="submit" onClick={handleSubmit}>
                                    Request A Call
                                </button>
                                ><hr className="my-4" />*/
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .cta-box {
                        background-color: white;
                    }
                    .cta-area {
                        background: #03045e;
                        opacity: 1;
                        background: -webkit-radial-gradient(bottom right, #03045e, #00b4d8);
                        background: -moz-radial-gradient(bottom right, #03045e, #00b4d8);
                        background: radial-gradient(to top left, #03045e, #00b4d8);
                    }
                `}
            </style>
        </>
    );
};

export default CTAMain;

