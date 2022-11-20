import React from 'react'

const ServicesTwo = () => {
    return (
        <>
            <div className="services-area responsive-all-top pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center pb-100">
                        <span className="span-title-two">Our services </span>
                        <h2>One-stop service for your Solar, Dstv and aerial  installations in Cape Town</h2>
                        <p>Accredited installation contractor specializing in residential and commercial Solar, Dstv and aerial  Installations across the whole Western Cape.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center pt-45">
                        <div className="col">
                            <div className="services-card">
                                <div className="services-card-into services-card-into-1">
                                    <h3>
                                        <a href="service-details.html">Explora Installation</a>
                                    </h3>
                                    <p>Get the Solar, Dstv and aerial  Explora installation for quality entertainment over a range of packages.</p>
                                    <a href="service" className="learn-btn">
                                        See More <i className="bx bx-right-arrow-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="services-card">
                                <div className="services-card-into services-card-into-2">
                                    <h3>
                                        <a href="service">ExtraView Installation</a>
                                    </h3>
                                    <p>Solar, Dstv and aerial  Extra View allows you to on two seperate TVs using one account!</p>
                                    <a href="service" className="learn-btn">
                                        See More <i className="bx bx-right-arrow-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="services-card">
                                <div className="services-card-into services-card-into-3">
                                    <h3>
                                        <a href="service-details.html">TripleView Installation</a>
                                    </h3>
                                    <p>Enjoy all the entertainment on three TVs with the unbeatable Triple View deal.</p>
                                    <a href="service" className="learn-btn">
                                        See More <i className="bx bx-right-arrow-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .services-area {
                        position: relative;
                    }
                    .services-area .section-title h2 {
                        max-width: 700px;
                        margin: 0 auto;
                    }
                    .services-slider {
                        position: relative;
                    }

                    .services-card {
                        padding-left: 15px;
                        padding-top: 15px;
                        position: relative;
                        margin-bottom: 30px;
                    }
                    .services-card::before {
                        content: "";
                        position: absolute;
                        z-index: -1;
                        top: 0;
                        left: 0;
                        width: 95%;
                        height: 95%;
                        -webkit-transition: 0.9s;
                        transition: 0.9s;
                        border: 1px solid #1954df;
                        border-radius: 50px 0 50px 50px;
                    }
                    .services-card .services-card-into {
                        background-color: #fff;
                        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
                        padding: 30px;
                        border-radius: 50px 0 50px 50px;
                        position: relative;
                        z-index: 1;
                    }
                    .services-card .services-card-into::before {
                        content: "";
                        position: absolute;
                        z-index: -1;
                        top: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: 0%;
                        opacity: 0;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        border-radius: 50px 0 50px 50px;
                    }
                    .services-card .services-card-into::after {
                        content: "";
                        position: absolute;
                        z-index: -1;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: 0%;
                        opacity: 0;
                        -webkit-transition: 0.7s;
                        transition: 0.7s;
                        background-color: #142955;
                        border-radius: 50px 0 50px 50px;
                    }
                    .services-card .services-card-into.services-card-into-1::before {
                        background-image: url(./public/img/single-view.png);
                    }
                    .services-card .services-card-into.services-card-into-2::before {
                        background-image: url(./public/img/extra-view.png);
                    }
                    .services-card .services-card-into.services-card-into-3::before {
                        background-image: url(./public/img/extra-view.png);
                    }

                    .services-card .services-card-into h3 {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .services-card .services-card-into h3 a {
                        color: #0a0c10;
                    }
                    .services-card .services-card-into p {
                        margin-bottom: 18px;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                    }
                    .services-card .services-card-into .learn-btn {
                        padding: 6px 60px 6px 13px;
                        color: #1954df;
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                        z-index: 1;
                        text-transform: capitalize;
                        background-color: transparent;
                        border-radius: 50px;
                        border: 1px solid #1954df;
                        outline: none;
                        font-size: 15px;
                        font-weight: 600;
                    }
                    .services-card .services-card-into .learn-btn i {
                        width: 40px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 17px;
                        color: #fff;
                        display: inline-block;
                        background-color: #1954df;
                        border-radius: 50px;
                        text-align: center;
                        position: absolute;
                        top: 4.8px;
                        right: 10px;
                        -webkit-transition: 0.7s;
                        transition: 0.7s;
                    }
                    .services-card .services-card-into .learn-btn::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        width: 0;
                        height: 100%;
                        background-color: #fff;
                        left: 0;
                        right: 0;
                        opacity: 0;
                        z-index: -1;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                    }
                    .services-card .services-card-into .learn-btn:hover {
                        border-color: #fff;
                        color: #1954df !important;
                    }
                    .services-card .services-card-into .learn-btn:hover::before {
                        width: 100%;
                        opacity: 1;
                    }
                    .services-card .services-card-into .learn-btn:hover i {
                        background-color: transparent;
                        border: 1px dashed #1954df;
                        color: #fff;
                    }
                    .services-card .services-card-into:hover::before {
                        height: 100%;
                        opacity: 1;
                    }
                    .services-card .services-card-into:hover::after {
                        height: 100%;
                        opacity: 0.7;
                    }

                    .services-card .services-card-into:hover h3 a {
                        color: #fff;
                    }
                    .services-card .services-card-into:hover p {
                        color: #fff;
                    }
                    .services-card .services-card-into:hover .learn-btn {
                        background-color: #1954df;
                        color: #fff;
                    }
                    .services-card .services-card-into:hover .learn-btn i {
                        background-color: #fff;
                        color: #1954df;
                    }
                    .services-shape {
                        position: absolute;
                        top: 10%;
                        right: 10%;
                        -webkit-animation: move-to 7s infinite linear;
                        animation: move-to 7s infinite linear;
                    }
                    .service-area-two {
                        position: relative;
                    }
                    .service-card-right {
                        margin-bottom: 30px;
                    }
                    .service-card-right .section-title {
                        margin-bottom: 15px;
                    }
                    .service-card-right .services-btn {
                        color: #1954df;
                        border-bottom: 1px solid #1954df;
                    }
                    .service-card-right .services-btn i {
                        position: relative;
                        top: 2px;
                        left: 3px;
                    }
                    .service-card-right .services-btn:hover {
                        color: #0a0c10;
                        border-bottom: 1px solid #0a0c10;
                        letter-spacing: 0.25px;
                    }
                `}
            </style>
        </>
    );
};

export default ServicesTwo;
