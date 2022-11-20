import React, { useEffect, useState, useRef } from "react";
import logoImg from '../images/logo-alt.png'
/*import { useRouter } from 'next/router';
import HCaptcha from '@hcaptcha/react-hcaptcha';*/




const NavBar = () => {
    /*const hcaptchaKey = process.env.REACT_APP_HCAPTCHA_SECRET_KEY;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
       /* if (!token) {
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

    useEffect(() => {
        let elementId = document.getElementById("main-nav");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    });
    return (
        <>
           





            <header class="theme-header transparent-header">
        <div class="header-navigation navigation-purple">
            <div class="nav-overlay"></div>
            <div class="container">
                <div class="primary-menu">
                    <div class="site-branding">
                        <a href="index.html" class="brand-logo"> <img src={logoImg} alt="Site Logo"/> </a>
                        
                    </div>
                    <div class="nav-menu nav-ml-auto">
                       {/*<!-- Navbar logo -->*/}
                        <div class="sidebar-logo">
                            <a href="index.html" class="brand-logo"><img src="assets/images/logo/logo-3.png" alt="Site Logo"/></a>
                        </div>
                        {/*<!-- Navbar Close -->*/}
                        <div class="navbar-close"><i class="far fa-times"></i></div>
                        {/*<!-- Nav Menu -->*/}
                        <nav class="main-menu">
                            <ul>
                                <li class="menu-item"><a href="#">Home</a></li>
                                <li class="menu-item"><a href="./services">Services</a></li>
                                <li><a href="./about">About Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right-nav">
                        <ul class="d-inline-flex align-items-center">
                            <li class="search-item"><a href="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></a></li>
                            <li class="nav-button"><a href="contact.html" class="main-btn btn-purple-dark">Get Quote</a></li>
                            <li class="nav-toggle-btn">
                                <div class="navbar-toggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>



        </>
    );
};

export default NavBar;

