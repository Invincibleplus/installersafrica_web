import React from 'react'
import Image1 from '../images/single-view.png'
import Image2 from '../images/extra-view.png'
import Image3 from '../images/extra-view.png'
import Image4 from '../images/dstv-dish.png'
import Image5 from '../images/dstv-fibre.png'
import Image6 from '../images/dstv-cable.png'


const Services = () => {
  return (
      <>
          <section className="py-5 text-center services-pg container-fluid">
              <div className="row py-lg-5">
                  <div className="col-lg-6 col-md-8 mx-auto">
                      <h1 className="fw-light" id="services">
                          Services
                      </h1>
                      <p className="lead text-muted">Installers Africa is a Solar, Dstv and aerial  Accredited installation contractor specializing in residential and commercial Solar, Dstv and aerial  Installations across the whole Western Cape. </p>
                      <p>
                          <a href="#" className="learn-btn my-2">
                              Call Us Now
                          </a>
                      </p>
                  </div>
              </div>
          </section>

          <div className="album py-5 bg-light">
              <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={690} height={361} src={Image1} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>Explora Installation</h3>
                                  <p className="card-text">Get the Solar, Dstv and aerial  Explora installation for quality entertainment over a range of packages.</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>

                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={690} height={361} src={Image2} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>ExtraView Installation</h3>
                                  <p className="card-text">Solar, Dstv and aerial  Extra View allows you to on two seperate TVs using one account!</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>

                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={690} height={361} src={Image3} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>TripleView Installation</h3>
                                  <p className="card-text">Enjoy all the entertainment on three TVs with the unbeatable Triple View deal.</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>

                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={707} height={353} src={Image4} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>Signal Realignment</h3>
                                  <p className="card-text">E48 Errors? Lost signal? Our snappy team will get your satellite realigned really quickly!</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>

                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={707} height={353} src={Image5} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>Solar, Dstv and aerial  Fiber Installation</h3>
                                  <p className="card-text">Connect your installation using Fibre instead of a traditional satellite using our termination unit!</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="card border-0 shadow-sm text-center">
                              <div className="text-center">
                                  <img className="bd-placeholder-img card-img-top" width={707} height={353} src={Image6} alt="" />
                              </div>
                              <div className="card-body">
                                  <h3>Cable Rewiring</h3>
                                  <p className="card-text">Get your old cables replaced for the cheapest rates and enjoy true HD resolution.</p>
                                  <div className="d-flex justify-content-between align-items-center"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <style>
              {`
    .services-pg{
       background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }
  
    
    `}
          </style>
      </>
  );
};

export default Services;
