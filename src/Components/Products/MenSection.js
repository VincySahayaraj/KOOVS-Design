import React from 'react'
import "./styleforbothsection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import menimg1 from '../../assets/images/IMG_4249\ \(1\).png';
import womenimg1 from '../../assets/images/IMG_4249.png';

function MenSection() {

    //styling for custom arrows
    const settings = {
        items: 5,
        dots: false,
        margin: 18,
        autoPlay: true,
        smartSpeed: 4000,
        autoplayTimeout: 2500,
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        vertical: false,

    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            arrows: false,
            settings: { settings }
        },
        tablet: {
            breakpoint: { max: 767, min: 464 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2.5,
            slidesToSlide: 2
        }
    };
    return (
        <section className="section-products">
            <div className="viewall">
                <span>Men</span>
                <u>View all</u>
            </div>

            {/* Section 2 */}

            <div className="row women">

                <Carousel responsive={responsive}
                    smartSpeed={2500}
                    autoplaySpeed={3000}
                    slidesToSlide={1}
                    ssr
                    showDots={false}
                    arrows={false}
                    autoPlay={true}
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item">

                    {/* Single Product */}
                    <div className="classdemo">
                        <div id="product-4" className="single-product">
                            <div className="part-1">
                                <img src={menimg1}></img>
                                <img src={womenimg1}  alt="Koovs rear product image" className='rear-img' />
                            </div>
                            <div className="part-2">
                                <span className="product-title">Attico</span>
                                <span className="product-old-price">Wrap around dress</span>
                                <span className="product-price">100€</span>
                            </div>
                        </div>
                    </div>

                    {/* Single Product */}
                    <div className="classdemo">
                        <div id="product-4" className="single-product">
                            <div className="part-1">
                                <img src={menimg1}></img>
                                <img src={womenimg1}  alt="Koovs rear product image" className='rear-img' />
                                
                            </div>
                            <div className="part-2">
                                <span className="product-title">Bottega Veneta</span>
                                <span className="product-old-price">Purse</span>
                                <span className="product-price">1000€</span>
                            </div>
                        </div>
                    </div>

                    {/* Single Product */}
                    <div className="classdemo">
                        <div id="product-4" className="single-product">
                            <div className="part-1">
                                <img src={menimg1}></img>
                                <img src={womenimg1}  alt="Koovs rear product image" className='rear-img' />
                            </div>
                            <div className="part-2">
                                <span className="product-title">Nike</span>
                                <span className="product-old-price">Sneakers</span>
                                <span className="product-price">200€</span>
                            </div>
                        </div>
                    </div>


                    {/* Single Product */}
                    <div className="classdemo">
                        <div id="product-4" className="single-product">
                            <div className="part-1">
                                <img src={menimg1}></img>
                                <img src={womenimg1}  alt="Koovs rear product image" className='rear-img' />
                            </div>
                            <div className="part-2">
                                <span className="product-title">Attico</span>
                                <span className="product-old-price">Wrap around dress</span>
                                <span className="product-price">100€</span>
                            </div>
                        </div>
                    </div>

                    {/* Single Product */}
                    <div className="classdemo">
                        <div id="product-4" className="single-product">
                            <div className="part-1">
                                <img src={menimg1}></img>
                                <img src={womenimg1}  alt="Koovs rear product image" className='rear-img' />
                            </div>
                            <div className="part-2">
                                <span className="product-title">Bottega Veneta</span>
                                <span className="product-old-price">Purse</span>
                                <span className="product-price">1000€</span>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default MenSection