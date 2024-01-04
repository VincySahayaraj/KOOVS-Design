import React from 'react';
import './sliderbrands.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pullandbear from '../../assets/images/pullandbear.png';
import sneakers from '../../assets/images/sneakers.png';

const SliderBrands = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 997, min: 464 },
            items: 1.5,
            partialVisibilityGutter: 60,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 140,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="BrandItem py-1 d-block d-lg-none">
            <div className="container-fluid px-0">
                    <div className="row">
                        <Carousel infinite={true}
                            partialVisible={true}
                            interval={3000}
                            touch={true}
                            arrows={false}
                            responsive={responsive} r
                            enderButtonGroupOutside={true}
                            swipeable={true}
                            draggable={false} autoPlay={true}
                            autoPlaySpeed={2000}>
                            <div className="cards overflow-hidden">
                                <div className="img-content">
                                    <img src={sneakers} className="img-fluid" alt="Koovs image" />
                                    <p>Sneakers</p>
                                </div>
                            </div>
                            <div className="cards overflow-hidden">
                                <div className="img-content">
                                    <img src={pullandbear} className="img-fluid" alt="Koovs image" />
                                    <p>PULL & BEAR</p>
                                </div>
                            </div>
                            <div className="cards overflow-hidden">
                                <div className="img-content">
                                    <img src={sneakers} className="img-fluid" alt="Koovs image" />
                                    <p>COSMETICS</p>
                                </div>
                            </div>
                            <div className="cards overflow-hidden">
                                <div className="img-content">
                                    <img src={pullandbear} className="img-fluid" alt="Koovs image" />
                                    <p>SANDALS</p>
                                </div>
                            </div>
                        </Carousel>
                </div>
            </div>
        </section>
    )
}

export default SliderBrands