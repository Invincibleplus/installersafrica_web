import React from 'react'

const TopBar = () => {
  return (
      <>
          <div className="topbar">
              <div className="container">
                  <div className="row  align-items-center">
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12">
                          <div className="topbar-social-icons">
                              <ul>
                                  <li>
                                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                          {" "}
                                          <i className="bx bxl-facebook"></i>{" "}
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                          {" "}
                                          <i className="bx bxl-twitter"></i>{" "}
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                          {" "}
                                          <i className="bx bxl-linkedin"></i>{" "}
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-xl-10 col-lg-12 col-md-12 col-12">
                          <div className="topbar-right-area">
                              <ul>
                                  <li>
                                      <i className="bx bx-phone"></i> <a href="tel:0763034744">+(27) 76 303 4744</a>
                                  </li>
                                  <li>
                                      {" "}
                                      <i className="bx bxs-envelope"></i> <a href="mailto:info@installersafrica.co.za"> info@installersafrica.co.za </a>
                                  </li>
                                  <li>
                                      {" "}
                                      <i className="fas fa-map-marker-alt"></i>{" "}
                                      <a href="https://goo.gl/maps/cbwcTpq3DfBK4tCt8" target="_blank" rel="noreferrer">
                                          4 Parkwest Centre, Parklands Main Rd, Cape Town, 7441
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <style jsx>
              {`
                  .topbar {
                      background-color: var(--light-color);
                  }

                  .topbar ul {
                      margin: 0px;
                      padding: 0px;
                      list-style: none;
                  }

                  .topbar-social-icons ul li {
                      display: inline-block;
                      margin: 0px;
                      font-family: var(--body-font);
                      font-size: 18px;
                  }

                  .topbar-social-icons ul li a {
                      color: var(--black-color);
                      font-weight: 400;
                  }

                  .topbar-social-icons ul li span {
                      font-weight: 600;
                  }

                  .topbar-social-icons ul li:first-child a {
                      padding-left: 2px;
                  }

                  .topbar-social-icons ul li:first-child a::before {
                      background-color: transparent;
                  }

                  .topbar-social-icons ul a {
                      width: 35px;
                      height: 100%;
                      padding: 10px 0px;
                      text-align: center;
                      display: inline-block;
                      position: relative;
                      -webkit-transition: 0.5s;
                      transition: 0.5s;
                  }

                  .topbar-social-icons ul a::before {
                      content: "";
                      left: -4px;
                      top: 0;
                      width: 100%;
                      height: 100%;
                      z-index: 0;
                      -webkit-transition: 0.5s;
                      transition: 0.5s;
                      position: absolute;
                      background-color: transparent;
                  }

                  .topbar-social-icons ul a i {
                      position: relative;
                      left: -2px;
                      z-index: 1;
                  }

                  .topbar-social-icons ul a i:hover {
                      background-color: var(--blue-color);
                      color: var(--white-color);
                  }

                  .topbar-right-area {
                      display: -webkit-box;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-box-pack: end;
                      -ms-flex-pack: end;
                      justify-content: flex-end;
                      text-align: right;
                  }

                  .topbar-right-area ul li {
                      display: inline-block;
                      padding: 10px 15px 10px 0px;
                  }

                  .topbar-right-area ul li i {
                      color: var(--black-color);
                      margin-right: 5px;
                      font-size: 16px;
                  }

                  .topbar-right-area ul li a {
                      color: var(--black-color);
                      font-family: var(--body-font);
                      font-size: 18px;
                      font-weight: 400;
                  }

                  /*================================================
      Responsive Area CSS
      =================================================*/
                  @media only screen and (max-width: 767px) {
                      .topbar-right-area {
                          -webkit-box-pack: center;
                          -ms-flex-pack: center;
                          justify-content: center;
                          padding-bottom: 5px;
                          text-align: center;
                          display: block;
                      }
                      .topbar-right-area ul li {
                          display: inline-block;
                          padding-top: 2px;
                          padding-bottom: 2px;
                          padding-right: 3px;
                          padding-left: 2px;
                      }

                      .topbar-social-icons {
                          text-align: center;
                      }
                      .topbar-social-icons ul a {
                          border: 0px;
                          padding-bottom: 0px;
                      }
                      .topbar-social-icons ul li:first-child {
                          border-left: 0px solid #fffefd60;
                      }
                      .topbar-social-icons ul li:first-child a {
                          padding-left: 2px;
                      }
                      .topbar-social-icons ul li:first-child a::before {
                          background-color: transparent;
                      }
                  }

                  @media only screen and (min-width: 768px) and (max-width: 991px) {
                      .topbar-right-area {
                          -webkit-box-pack: center;
                          -ms-flex-pack: center;
                          justify-content: center;
                          padding-bottom: 5px;
                          text-align: center;
                          display: block;
                      }
                      .topbar-right-area ul li {
                          display: inline-block;
                      }

                      .topbar-social-icons {
                          text-align: center;
                      }
                      .topbar-social-icons ul a {
                          border: 0px;
                          padding-bottom: 0px;
                      }
                      .topbar-social-icons ul li:first-child {
                          border-left: 0px solid #fffefd60;
                      }
                      .topbar-social-icons ul li:first-child a {
                          padding-left: 2px;
                      }
                      .topbar-social-icons ul li:first-child a::before {
                          background-color: transparent;
                      }
                  }

                  @media only screen and (min-width: 992px) and (max-width: 1199px) {
                      .topbar-right-area {
                          -webkit-box-pack: center;
                          -ms-flex-pack: center;
                          justify-content: center;
                          padding-bottom: 5px;
                      }
                      .topbar-social-icons {
                          text-align: center;
                      }
                  }
              `}
          </style>
      </>
  );
};

export default TopBar;
