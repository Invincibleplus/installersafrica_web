import React from 'react'
import ImageFull from '../images/fullpkg.png'
import ImageDish from '../images/dish.png'
import ImageHero from '../images/hero-img-2.png'

const HomeHero = () => {
  return (
    <>

        <section className="hero-area hero-style-two">
        <div class="shape shape-one scene"><span data-depth="5"></span></div>
        <div class="shape shape-two scene"><span data-depth="6"></span></div>
        <div class="shape shape-three scene"><span data-depth="8"></span></div>
        <svg class="curve-one" viewBox="0 0 968 900">
                <path d="M188.052 371.04C-93.1774 403.662 2.44024 38.7207 85.4027 -147.828H1005.02V929.28H297.731C378.35 729.607 469.281 338.417 188.052 371.04Z"/>
            </svg>
            
            <div className="hero-img">
              <img src={ImageHero} alt="Hero Image"/>
            </div>
            {/*<div className="product-device  d-none d-md-block">
                <img src={ImageFull} alt="Solar installations, Dstv and aerial installations" width={676}  height={359}/>
                </div>
            <div className="product-device product-device-2  d-none d-md-block">
            <img src={ImageDish} alt="Solar installations, Dstv and aerial installations" width={500}  height={500} />
                </div>*/}
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-9">
                        <div class="hero-content">
                            <h1 data-aos="fade-up" data-aos-delay="70" class="aos-init aos-animate">Installers Africa</h1>
                            <p data-aos="fade-up" data-aos-delay="90" class="aos-init aos-animate">Professional Installers for Solar Systems, Satellite TV, aerial and CCTV. We have carried out installations in most parts of the country for industrial, commercial and homes.
             Our combined experience exceeds 43 years and developed expertise in all Solar configurtion, Dstv, OpenView and aerial installations. We pride ourselves in the quality of our work.</p>
                            <a href="about.html" class="main-btn bordered-purple bordered-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <style jsx>
            {`
            
            .product-device {
                position: absolute;
                right: 10%;
                bottom: -30%;
                width: 300px;
                height: 540px;
                // background-color: #333;
                // border-radius: 21px;
                transform: rotate(30deg);
              }
              
              .product-device::before {
                position: absolute;
                top: 10%;
                right: 10px;
                bottom: 10%;
                left: 10px;
                content: "";
                // background-color: rgba(255, 255, 255, .1);
                // border-radius: 5px;
              }
              
              .product-device-2 {
                top: -25%;
                right: auto;
                bottom: 0;
                left: 5%;
                // background-color: #e5e5e5;
              }
            
            
            `}
        </style>
    </>
  )
}

export default HomeHero