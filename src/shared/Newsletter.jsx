import React from 'react'
import { Col, Container, Row } from "reactstrap"
import maleTourist from '../assets/images/male-tourist.png'
import './newsletter.css'



const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscrive now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis expedita magni, quo commodi voluptatibus maiores possimus officiis eius culpa!</p>
                </div>
                </Col>

                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter