import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap"
import logo from '../../assets/images/logo.png'
import './footer.css'


const quick__links= [
  {
    path: "/home",
    display:'Home'
  },
  {
    path: "/about",
    display:'About'
  },
  {
    path: "/tours",
    display:'Tour'
  },
];

const quick__links2= [
  {
    path: "/gallery",
    display:'Gallery'
  },
  {
    path: "/login",
    display:'Login'
  },
  {
    path: "/register",
    display:'Register'
  },
]

const Footer = () => {

  const year= new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore anim.</p>

              <div className="social__links d-flek align-items-center gap-4">
                    <span>
                      <Link to='#'><i class="ri-youtube-line"></i></Link>
                    </span>
                    <span>
                      <Link to='#'><i class="ri-github-fill"></i></Link>
                    </span>
                    <span>
                      <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                    </span>
                    <span>
                      <Link to='#'><i class="ri-instragram-line"></i></Link>
                    </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links.map((item,index) =>(
                  <ListGroupItem className='ps-0 border-0 align-items-center gap-3' key={index}>
                    <Link to={item.path}> {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item,index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0 align-items-center gap-3'>
                    <Link to={item.path}> {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              
                
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                   <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class='ri-map-pin-line'></i>
                    </span>
                   </h6>
                   <p className='mb-0'>Dhaka, Bangladesh</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                   <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class='ri-mail-line'></i>
                    </span>
                    Email:
                   </h6>
                   <p className='mb-0'>rajottoltd00@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                   <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class='ri-phone-fill'></i>
                    </span>
                    Phone:
                   </h6>
                   <p className='mb-0'>+880 12523534543</p>
                  </ListGroupItem>
                
              
            </ListGroup>
          </Col>
          <hr />
          <Col lg='12'>
            <p className="copyright text-center mt-4">
              Copyright {year} : Design & develop By Yeasin Arafat Nahid
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer