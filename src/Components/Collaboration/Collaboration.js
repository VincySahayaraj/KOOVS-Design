import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./collaboration.css"
import firstimage from '../../assets/images/imageonegallery.png';
import secondimage from '../../assets/images/imagetwogallery.png';
import thirdimage from '../../assets/images/imagethreegallery.png';
import fourthimage from '../../assets/images/imagefourgallery.png';
import fifthimage from '../../assets/images/imagefivegallery.png';
import sixthimage from '../../assets/images/imagesixgallery.png';
import seventhimage from '../../assets/images/imagesevengallery.png';
import eightimage from '../../assets/images/imageeightgallery.png';
import samplevideo from '../../assets/Video/sample-mp4-file.mp4';
import videoimage from '../../assets/images/videoimage.png';
import koovsvideoicon from '../../assets/images/playbutton.png';

function Collaboration() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            partialVisibilityGutter: 10,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="home_collaboration">

            <Container fluid>
                <Row>
              
                    {/* Section 1 for text */}
                    
                    <Col  className='text-index col-lg-6 col-sm-12 col-md-12 col-12'>
                        <div className="future-collaboration pb-5 d-none d-lg-block">
                            <div className="text-style">
                                <h4>Future Collaboration</h4>
                                {/* <h4 className='grid-koovs'>KOOVS on Instagram</h4> */}
                            </div>
                            <div className='description'>
                                <span>28/04</span>
                                <span>Ira Voo</span>
                                <span>-------------------------------</span>
                                <span>sign up</span>

                            </div>
                            <div className='description'>
                                <span>03/05</span>
                                <span>MBW × KOOVS</span>
                                <span>---------------------------</span>
                                <span>sign up</span>

                            </div>
                            <div className='description'>
                                <span>09/05</span>
                                <span>Caro Reinholdt</span>
                                <span>----------------------------</span>
                                <span>sign up</span>

                            </div>

                            <div className='description'>
                                <span>22/05</span>
                                <span>Christopher</span>
                                <span>----------------------------</span>
                                <span>sign up</span>

                            </div>
                            <div className='description'>
                                <span>11/06</span>
                                <span>Pina Baraba</span>
                                <span>----------------------------</span>
                                <span>sign up</span>
                            </div>
                        </div>

                        {/* Future collabration -mobile */}
                        <div className="future-collaboration d-block d-lg-none pb-5 pl-4 mt-4">
                            <h5><b>Future <i>collabs</i></b></h5>
                            <p>Collections you can't afford to miss</p>
                            <div className="row pl-10" id="carousel-slide">

                                <Carousel partialVisible={true} interval={3000}   slidesToSlide={1} touch={true} arrows={false} responsive={responsive} renderButtonGroupOutside={true} swipeable={true} draggable={false} autoPlay={true}
                                    autoPlaySpeed={2000}>
                                    <div className="cards overflow-hidden">
                                        <div className="img-content">
                                            <div className="green-card"><p>MBW x KOOVS </p> </div>
                                            <p>April 25</p>
                                            <p><u>sign up</u></p>
                                        </div>
                                    </div>
                                    <div className="cards overflow-hidden">
                                        <div className="img-content">
                                            <div className="green-card"><p>MBW x KOOVS </p> </div>
                                            <p>May 8</p>
                                            <p><u>sign up</u></p>
                                        </div>
                                    </div>
                                    <div className="cards overflow-hidden">
                                        <div className="img-content">
                                            <div className="green-card"><p>MBW x KOOVS </p> </div>
                                            <p>May 24</p>
                                            <p><u>sign up</u></p>
                                        </div>
                                    </div>
                                    <div className="cards overflow-hidden">
                                        <div className="img-content">
                                            <div className="green-card"><p>MBW x KOOVS </p> </div>
                                            <p>July 3</p>
                                            <p><u>sign up</u></p>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>


                        {/* Video section  */}
                        <div className='video-section d-none d-lg-block'>

                            <h4>Live Shopping</h4>
                            
                            <div style={{ display: "flex" }}>
                                <div className='col-md-6 col-12'>
                                    <div className='video-part'>
                                        <img src={videoimage} alt="video 1" className='sample-video' />
                                        <button type="button" id="play_button" className="video-play-button" >
                                            <span><img alt="video play icon" src={koovsvideoicon} /></span>
                                        </button>
                                        {/* <video width="280" height="440" controls>
                                            <source src={samplevideo} type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video> */}
                                    </div>
                                </div>
                                <div className='col-md-6 hannie'>
                                    <h6>Live with Hannie</h6>
                                    <div className='para-text'>
                                        <p>
                                            Spend the afternoon with photographer, Hannie as he lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    {/* Watch and Stop button */}
                                    <button className='watchandstop' >WATCH AND STOP</button>
                                </div>
                            </div>
                            <div >
                            </div>
                        </div>

                    </Col>

                    {/* Image Gallery Section-Instagram */}
                    <Col lg={6} sm={12} className='text-index flex-row'>
                        <h4 className='pl-18'>Koovs on Instagram</h4>
                        <div className='gallery'>
                            <figure className='gallery__item gallery__item--1'>
                                <img src={firstimage} className="gallery__img" alt="Image 1" />
                            </figure>
                            <figure className="gallery__item gallery__item--2">
                                <img src={secondimage} className="gallery__img" alt="Image 2" />
                            </figure>
                            <figure className="gallery__item gallery__item--3">
                                <img src={thirdimage} className="gallery__img" alt="Image 3" />
                            </figure>
                            <figure className="gallery__item gallery__item--4">
                                <img src={fourthimage} className="gallery__img" alt="Image 4" />
                            </figure>
                            <figure className="gallery__item gallery__item--5">
                                <div className="text__img">
                                    Tag @KOOVS +
                                    #KOOVS on IG for a
                                    chance to be featured.
                                </div>

                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <img src={fifthimage} className="gallery__img" alt="Image 6" />
                            </figure>

                            <figure className="gallery__item gallery__item--7">
                                <img src={sixthimage} className="gallery__img" alt="Image 7" />
                            </figure>

                            <figure className="gallery__item gallery__item--8">
                                <img src={seventhimage} className="gallery__img" alt="Image 8" />
                            </figure>

                            <figure className="gallery__item gallery__item--9">
                                <img src={eightimage} className="gallery__img" alt="Image 9" />
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Collaboration;