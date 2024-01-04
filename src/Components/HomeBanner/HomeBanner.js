import React, { useRef, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./homebanner.css";
import firstimg from "../../assets/images/homepage.png";
import secondimg from "../../assets/images/IMG_4249 (1).png";
import thirdimg from '../../assets/images/IMG_4250 (1).png'
import rightarrow from '../../assets/images/RightIcon.png';
import leftarrow from '../../assets/images/LeftIcon.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


//Custom arrow for Next
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#FFFFFF" }}
            onClick={onClick}
        ><img src={rightarrow} className='rightarrowicon'></img></div>
    );
}

//Custom arrow for Previous
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#FFFFFF" }}
            onClick={onClick}
        ><img src={leftarrow} className="leftarrowicon"></img></div>
    );
}

//Homepage Section 1
function HomeBanner() {


    //styling for custom arrows
    const settings = {
        items: 1,
        dots: true,
        autoPlay: true,
        smartSpeed: 2500,
        autoplayTimeout: 500,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        vertical: false,
        customPaging: (i) => (
            <>
                {changeStyle(i)}
                <div className="ft-slick__dots--custom">
                    {console.log("ii" + i)}
                    <div className="loading" />
                </div>
            </>
        )
    };


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 60,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 40,
            slidesToSlide: 1 // optional, default to 1.
        }
    };












    //Function for scrolling carousel
    const changeStyle = (i) => {
        console.log("iiiii" + i)

        if (document.getElementById("scroll-thumb"))
            document.getElementById("scroll-thumb").style.left = "100px";

    }
    return (
        <>

            <section className="MobileStart d-block d-lg-none pb-3">
                <div className="container">
                    <div className="row g-1">
                        <h5 className="py-4 fs-16 justify-content-center">Where do you want to start?</h5>
                        <div className="row px-0" id="carousel-slide">
                            <Carousel partialVisible={true} interval={3000} touch={true} arrows={false} responsive={responsive} renderButtonGroupOutside={true} swipeable={true} draggable={false} autoPlay={true}
                                autoPlaySpeed={2000}>
                                <div className="mx-2">
                                    <div className="bg-white p-2 border border-dark text-center fs-14">Men</div>
                                </div>
                                <div className="mx-2">
                                    <div className="bg-white p-2 border border-dark text-center fs-14">Women</div>
                                </div>
                                <div className="mx-2">
                                    <div className="bg-white p-2 border border-dark text-center fs-14">Collaboration</div>
                                </div>
                                <div className="mx-2">
                                    <div className="bg-white p-2 border border-dark text-center fs-14">Loved</div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>


            





            </section>










            <div className="home_banner">
                <Container fluid>
                    <Row>
                        {/* Section 1 for text */}
                        <Col md={6} sm={12} lg={6} className='slider-image'>


                            <Slider {...settings}>
                                <div>
                                    <img
                                        src={firstimg}
                                        className="w-100 img-fluid"
                                        alt="koovs banner Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={firstimg}
                                        className="w-100 img-fluid"
                                        alt="koovs banner Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={firstimg}
                                        className="w-100 img-fluid"
                                        alt="koovs banner Image"
                                    />
                                </div>

                            </Slider>
                            {/* <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" className="active"></button>
                            <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="true" className="active"></button>
                            <button type="button" data-bs-target="" aria-label="Slide 3" aria-current="true" className="active"></button> */}
                            <div className="scroll-track" >
                                <div className="scroll-thumb" id="scroll-thumb"></div>
                            </div>
                        </Col>


                        {/* Section 2 for text */}
                        <Col sm={6}>
                            <div className="text d-flex d-none d-md-flex d-lg-flex h-100 justify-content-center align-items-center flex-column ">
                                <div className="btn-heading">
                                    <h5>Where do you want to start?</h5>
                                </div>

                                <div className="d-flex ">
                                    <div className="row">

                                        <div className="col banner-btn1">
                                            {" "}
                                            <Button className="banner-btn mt-2">Men</Button>
                                        </div>
                                        <div className="col banner-btn1">
                                            {" "}
                                            <Button className="banner-btn mt-2">Women</Button>
                                        </div>
                                        <div className="w-100 spaceinbutton"></div>

                                        <div className="col  banner-btn1">
                                            {" "}
                                            <Button className="banner-btn mt-2">Pre Loved</Button>
                                        </div>
                                        <div class="col banner-btn1">
                                            <Button className="banner-btn mt-2">Collaborations</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                    {" "}

                </Container>
                <div class="toast show">
                    <div class="toast-header d-inline-block d-lg-flex align-items-center justify-content-between gap-3">
                        <div className="text-dark flex-grow-1">
                            We use cookies to ensure that we give you the best expereince on our website. If you continue, 
                            we will assume that you agree with this and<br/> accept our cookie policy. Learn more here.
                        </div>
                        <button className="border-0 bg-transparent d-none d-lg-block"><u>COOKIE SETTINGS</u></button>
                        <button className="btn btn-outline-dark rounded-0 px-4 d-none d-lg-block">REJECT ALL</button>
                        <button className="btn btn-dark rounded-0 px-4">ACCEPT ALL</button>
                        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeBanner;