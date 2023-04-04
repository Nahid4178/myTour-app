import React from 'react'
import { Col, Container, Row } from "reactstrap"
import FeaturedTureList from '../../Featured-tours/FeaturedTureList'
import experienceImg from "../../assets/images/experience.png"
import heroImg from "../../assets/images/hero-img01.jpg"
import heroImg02 from "../../assets/images/hero-img02.jpg"
import heroVideo from "../../assets/images/hero-video.mp4"
import worldImg from "../../assets/images/world.png"
import ServiceList from '../../services/ServiceList'
import Newsletter from '../../shared/Newsletter'
import SearchBar from '../../shared/SearchBar'
import Subtitle from "../../shared/Subtitle"
import '../../styles/Home.css'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'









const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={"Know Before You Go"}/>
            <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem similique laboriosam, ea harum, labore ad sed minus dicta dolorum sapiente, nostrum amet. Illum qui iure nemo voluptatibus at sit maxime.</p>
          </div>
          </Col>
         <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
         </Col>
         <Col lg="2">
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
         </Col>
         <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
         </Col>
         <SearchBar/>
        </Row>
      </Container>
    </section>


    {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">
                What we Serve
              </h5>
              <h2 className="services__title">
                We offer our best services
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start */}


      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">
              Our featured tours
            </h2>
            </Col>
            <FeaturedTureList />
          </Row>
        </Container>
      </section>

      {/* featured tour section end */}




        {/* Tour experience section */}


        <section>
          <Container>
            <Row>
              <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>With our all experience <br /> we will serve you</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
              </div>
              </Col>
              <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Tour experience section end*/}

        <section>
          <Container>
            <Row>
              <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour Gallery
              </h2>
              </Col>
              <Col lg='12'>
               <MasonryImagesGallery />
              </Col>
            </Row>
          </Container>
        </section>

        <Newsletter />

    </>
  )
}

export default Home