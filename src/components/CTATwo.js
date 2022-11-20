import React,{useState} from 'react';


const CTATwo = () => {
    const initialState = { phone: "" };
    const [userData, setUserData] = useState(initialState);
    const { phone } = userData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/callback", {
            method: "POST",
            body: JSON.stringify({ phone: phone }),
        });

    };

    return (
        <>
            <div className="pt-70 pb-70">
                <div className="newsletter-section-area container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="newsletter-content">
                                <h3 className="aos-item" data-aos="fade-left" data-aos-delay="300">
                                    Request a Call Back
                                </h3>
                                <p className="aos-item" data-aos="fade-left" data-aos-delay="400">
                                    Do you need one of our services?
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="newsletter-area aos-item" data-aos="fade-down" data-aos-delay="500">
                                <form className="newsletter-form" onSubmit={handleSubmit}>                                    

                                    <button className="learn-btn mt-3" type="submit">
                                        Send Number<i className="bx bxs-phone-incoming ms-2"></i>
                                    </button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .newsletter-section-area {
                        padding: 45px;
                        background-color: #fff;
                        border-radius: 20px;
                    }
                    .newsletter-content h3 {
                        margin-bottom: 10px;
                    }
                    .newsletter-content p {
                        margin-bottom: 0;
                    }
                    .newsletter-area {
                        margin-left: 100px;
                    }
                    .newsletter-area .newsletter-form {
                        position: relative;
                    }
                    .newsletter-area .newsletter-form .form-control {
                        background: 0 0;
                        height: 58px;
                        line-height: 58px;
                        margin: 0;
                        border-radius: 50px;
                        border: 1px solid #1954df;
                        padding: 0 25px;
                        max-width: 80%;
                        color: #727473;
                    }
                    .newsletter-area .newsletter-form .form-control:focus {
                        outline: none;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                        color: #0a0c10;
                    }
                    .newsletter-area .newsletter-form .default-btn {
                        position: absolute;
                        top: 0px;
                        right: 150px;
                    }
                     @media only screen and (max-width: 37.5rem) {
                         .newsletter-section-area{
                             display: none;
                         }
                    }
                `}
            </style>
        </>
    );
};

export default CTATwo;

