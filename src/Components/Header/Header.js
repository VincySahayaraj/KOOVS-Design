import React,{useState} from 'react';
import "./header.css"
import searchIcon from "../../assets/images/icons/search.png"
import { Container, Col, Row } from 'react-bootstrap';

function Header(){

  const [active,setActive]=useState(false);
  const [open,setOpen]=useState(false);
    return (
      <header className='header'>

        <div className='navbar'>

          {/* Navigation Bar */}
          <div className='brand-name'>

            {/* menu bar */}
            <div className="icon-menu" onClick={()=>{setActive(!active)}}>
              <svg className={`ham hamRotate ham1 ${active&&"active"}`} viewBox="0 0 100 100" width="70" >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path
                  className="line middle"
                  d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
              </svg>
            </div>

            {/* Hamburger menu */}
            <div className={`navbar-collapse main-nav ${active&&"active"}`} id="navbarSupportedContent20">
              <Container fluid>
                <Row>
                  <Col sm={2}>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <h6>Men</h6>
                        <a class="nav-link" href="#">view all</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">New arrivals</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">clothing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Footwear</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Accessories</a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={2}>
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                      <h6>Women</h6>
                        <a className="nav-link" href="#">view all</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">New arrivals</a>
                      </li>
                      <li className="nav-item-clothing" onClick={()=>{setOpen(!open)}}>
                        <a className="nav-clothing" href="#"  onClick={()=>{setOpen(!open)}}>clothing</a>

                          <ul className={`nested-list ${open&&"open"}`} >
                          <li className="nav-item"> <a className="nav-link" href="#">All clothing</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">T-shirts,Tops,Shirts</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Sweatshirts</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Dresses,Skirts</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Kritwear</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Coats,Jackets</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Trousers,Jeans,Shorts</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Underwear,Swimwear,Activewear</a></li>
                        </ul>  
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Footwear</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Accessories</a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={2}>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                      <h6>Pre loved</h6>
                        <a class="nav-link" href="#">view all</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">clothing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Footwear</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Accessories</a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={2}>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                       <a>Live shopping</a>
                      </li>
                      <li class="nav-item">
                        <a>influencer collaborations</a>
                      </li>
                      <li class="nav-item">
                       <a>Mid season sale</a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={2}>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Log in/create account </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Online support</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><u>Shipping to Denmark</u></a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>

          </div>
          <div className='koovsHeading'>
            <h3>Koovs</h3>
          </div>
          <div className="d-flex flex-row">
            <span className='searchicon px-4'>
              <img src={searchIcon} />
            </span>
            <span className='account px-4'>
              <h4>Account</h4>
            </span>
            <span className='cart px-4'>
              <h4>Cart (0)</h4>
            </span>
          </div>
        </div>
      </header>
    )
}
export default Header;

