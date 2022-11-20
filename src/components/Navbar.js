import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logoImg from '../images/logo-alt-64x64.png'
import "../css/style.css"


export default function Navbar() {
  return (
    
    <nav className="nav">

      <header class="theme-header transparent-header">
        <div class="header-navigation navigation-purple">
            <div class="nav-overlay"></div>
            <div class="container">
                <div class="primary-menu">
                    <div class="site-branding">
                        <CustomLink to="/home" class="brand-logo"> <img src={logoImg} alt="Site Logo"/> </CustomLink>
                        
                    </div>
                    <div class="nav-menu nav-ml-auto">
                       {/*<!-- Navbar logo -->*/}
                        <div class="sidebar-logo">
                            <CustomLink to="/home" class="brand-logo"><img src={logoImg} alt="Site Logo"/></CustomLink>
                        </div>
                        {/*<!-- Navbar Close -->*/}
                        <div class="navbar-close"><i class="far fa-times"></i></div>
                        {/*<!-- Nav Menu -->*/}
                        <nav class="main-menu">
                            <ul>
                                <li class="menu-item"><CustomLink to="/home">Home</CustomLink></li>
                                <li><CustomLink to="/about">About Us</CustomLink></li>
                                <li class="menu-item"><CustomLink to="/services">Services</CustomLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right-nav">
                        <ul class="d-inline-flex align-items-center">
                            <li class="search-item"><CustomLink to="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></CustomLink></li>
                            <li class="nav-button"><CustomLink to="/contactus" class="main-btn btn-purple-dark">Get Quote</CustomLink></li>
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

    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
