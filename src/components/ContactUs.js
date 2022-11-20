import React, { useState, useRef } from 'react'
/*import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from 'next/router';
import HCaptcha from '@hcaptcha/react-hcaptcha';
*/


/*const MySwal = withReactContent(Swal);

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

const ContactForm = () => {
   /* const hcaptchaKey = process.env.REACT_APP_HCAPTCHA_SECRET_KEY;
    const [token, setToken] = useState("");
    const captcha = useRef();
    const router = useRouter();*/

    const initialState = { name: "", email: "", phone: "", msg: "" };
    const [userData, setUserData] = useState(initialState);
    const { name, email, phone, msg } = userData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            alertMessage("Error", "error", " You must verify the Captcha");
            return;
        }
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ name: name, email: email, phone: phone, msg: msg }),
        });

        if (res.status == 200) {
            alertMessage("Success", "success", " Your request has been sent successfully , we will be in touch");
            setTimeout(() => {
                router.push("/");
            }, 5000);
        } else {
            alertMessage("Error", "error", " Ooops Error sending the message");
            setTimeout(() => {
                router.push("/");
            }, 5000);
        }
    };*/

    return (
        <>


            <section className="py-5 text-center services-pg container-fluid">
              <div className="row py-lg-5">
                  <div className="col-lg-6 col-md-8 mx-auto">
                      <h1 className="fw-light" id="services">
                          Contact Us
                      </h1>
                      <p className="lead text-muted">How can we serve you better? </p>
                      <p>
                          <a href="#" className="learn-btn my-2">
                              Call Us Now
                          </a>
                      </p>
                  </div>
              </div>
          </section>
            <div className="contact-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="contact-widget-form">
                                <div className="contact-form">
                                    <div className="section-title">
                                        <h2>Make a contact with us</h2>
                                        <p>We are here to help you with all your Solar, Dstv and aerial Services in Cape Town.</p>
                                    </div>
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="bx bx-user"></i>
                                                    <input type="text" name="name" value={name} /*onChange={handleChangeInput}*/ id="name" className="form-control" required data-error="Please Enter Your Name" placeholder="Name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="bx bx-envelope"></i>
                                                    <input type="email" name="email" value={email} /*onChange={handleChangeInput}*/ id="email" className="form-control" required data-error="Please Enter Your Email" placeholder="Email" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="bx bx-phone-call"></i>
                                                    <input type="text" name="phone" value={phone} /*onChange={handleChangeInput}*/ id="phone" required data-error="Please Enter Your number" className="form-control" placeholder="Phone Number" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <i className="bx bxs-pencil"></i>
                                                    <textarea
                                                        name="msg"
                                                        value={msg}
                                                        onChange={handleChangeInput}
                                                        className="form-control"
                                                        id="message"
                                                        cols="30"
                                                        rows="5"
                                                        required
                                                        data-error="Write your message"
                                                        placeholder="Your Message"
                                                    ></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-7 col-md-7">
                                                <button type="submit" className="default-btn" onClick="">
                                                    Submit Now <i className="bx bx-right-arrow-alt"></i>
                                                </button>
                                            </div>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-map pl-20">
                            <iframe src="https://goo.gl/maps/xvcoPHzBgwBKfewg8"></iframe>
                                <a
                                
                                    /*<!-- <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8B%20Farnworth%20Road%20Rugby%20Milnerton+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>--></div>-->*/
                                    href="https://www.google.com/maps/dir//4+Parklands+Main+Rd+Milnerton+Rural,+Cape+Town+7441+South+Africa/@-33.8149176,18.5035047,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1dcc5f40c33bdebb:0x6ee86d3ac8cbd8f0"
                                    className="tag"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Find us on map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .contact-form {
                        position: relative;
                        z-index: 1;
                        margin-bottom: 30px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .contact-form .section-title {
                        margin-bottom: 30px;
                    }
                    .contact-form .section-title h3 {
                        font-size: 35px;
                        margin-bottom: 0;
                    }
                    .contact-form .section-title p {
                        padding-top: 10px;
                        margin-bottom: 0;
                    }
                    .contact-form .form-group {
                        margin-bottom: 20px;
                        position: relative;
                    }
                    .contact-form .form-group label {
                        color: #1954df;
                        margin-bottom: 15px;
                    }
                    .contact-form .form-group.checkbox-option {
                        position: relative;
                    }
                    .contact-form .form-group.checkbox-option #chb2 {
                        position: absolute;
                        top: 6px;
                        left: 0;
                    }
                    .contact-form .form-group.checkbox-option p {
                        padding-left: 25px;
                        font-size: 15px;
                        color: #0a0c10;
                    }
                    .contact-form .form-group.checkbox-option p a {
                        color: #1954df;
                    }
                    .contact-form .form-group.checkbox-option p a:hover {
                        color: #0a0c10;
                    }
                    .contact-form .form-group .form-control {
                        height: 45px;
                        color: #727473;
                        border: 1px solid #707070;
                        background-color: #fff;
                        font-size: 15px;
                        padding: 10px 40px 10px 20px;
                        width: 100%;
                        border-radius: 0;
                    }
                    .contact-form .form-group .form-control:focus {
                        outline: none;
                        border-color: #1954df;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                    }
                    .contact-form .form-group textarea.form-control {
                        height: auto;
                    }

                    .contact-form .default-btn {
                        float: right;
                        border: 0;
                        outline: none;
                        background-color: transparent;
                        border: 1px solid #1954df;
                        color: #1954df;
                    }
                    .contact-form .default-btn i {
                        background-color: #1954df;
                        color: #fff;
                    }
                    .contact-form .default-btn:hover {
                        color: #fff;
                    }
                    .contact-form .default-btn:hover::before {
                        background-color: #1954df;
                    }
                    .contact-form .default-btn:hover i {
                        background-color: transparent;
                    }
                    .contact-form .form-group .form-control::-webkit-input-placeholder,
                    .contact-form .form-group .form-control:-ms-input-placeholder,
                    .contact-form .form-group .form-control::-ms-input-placeholder,
                    .contact-form .form-group .form-control::-webkit-input-placeholder {
                        color: #727473;
                    }
                    .contact-form .form-group .form-control::-webkit-input-placeholder,
                    .contact-form .form-group .form-control:-ms-input-placeholder,
                    .contact-form .form-group .form-control::-ms-input-placeholder,
                    .contact-form .form-group .form-control::placeholder {
                        color: #727473;
                    }
                    .contact-widget-form {
                        background-color: #fff;
                        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
                        border-radius: 30px;
                    }
                    .contact-widget-form .contact-form {
                        padding: 40px 30px;
                    }
                    .contact-widget-form .contact-form .form-group .form-control {
                        border: 1px solid #1954df8c;
                        background-color: #fff;
                        border-radius: 5px;
                    }
                    .contact-widget-form .contact-form .form-group i {
                        font-size: 20px;
                        line-height: 1;
                        color: #1954df;
                        position: absolute;
                        top: 10px;
                        right: 20px;
                    }
                    .contact-map {
                        position: relative;
                        margin-bottom: 30px;
                    }
                    .contact-map iframe {
                        display: block;
                        width: 100%;
                        height: 545px;
                        border-radius: 20px;
                    }
                    .contact-map .tag {
                        position: absolute;
                        bottom: 30px;
                        left: 50px;
                        right: 50px;
                        width: 80%;
                        padding: 12px 30px;
                        border-radius: 5px;
                        font-size: 20px;
                        font-weight: 600;
                        color: #0a0c10;
                        background-color: #fff;
                    }
                    .contact-map .tag:hover {
                        color: #1954df;
                    }
                `}
            </style>
        </>
    );
};

export default ContactForm;
