import React from 'react'
import Image_Logo from '../images/logo-alt.png'


const Year = new Date().getFullYear();

const Footer = () => {
  return (
      <> 
    <div className='container-fluid footer'>
            <footer className="pt-4  pt-md-5 border-top">
          
            <div className="row  text-center">
            
            <div className="col-md-4 ">
                <h5>Installers Africa</h5>
                <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">New Technologies</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Blog</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Testimonials</a></li>
               
                </ul>
            </div>
            <div className="col-md-4  ">
                <h5>Contact Us</h5>
                <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="tel:0763034744"> +(27) 76 303 4744</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="mailto: info@capeintallations.co.za"> info@installersafrica.co.za</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">4 Parkwest Centre, Parklands Main Rd, Cape Town, 7441</a></li>
                
                </ul>
            </div>
            <div className="col-md-4 ">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
               
                </ul>
            </div>
            </div>
            <div className="text-center">
                <img className="mb-2" src={Image_Logo} alt="logo" width={80} height={80}/>
                <small className="d-block mb-3 text-muted">&copy; {Year} Installers Africa</small>
            </div>
        </footer>
        </div>

        <style>
            {`
            .footer{
                background-color:  var(--light-color);
                color: white;
            }
            
            `}
        </style>
        </>
  )
}

export default Footer
