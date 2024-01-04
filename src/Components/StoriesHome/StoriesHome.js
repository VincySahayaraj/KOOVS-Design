import React from 'react'
import "./storieshome.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import storyimg1 from '../../assets/images/styleimage.png'

function StoriesHome() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      arrows: false,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 2
    }
  };
  return (
    <section className="section-stories">
      <div className="text-style">
        <h2>Style stories</h2>
        <span className='d-none d-lg-block'>Get inspired by our latest campaigns</span>
        <p className="d-block d-lg-none mb-0"><u>View All</u></p>
      </div>

      {/* Section 2 */}

      <div className="row story">

        {/* Single Product */}

        <Carousel responsive={responsive}
          smartSpeed={2500}
          autoplaySpeed={3000}
          slidesToSlide={1}
          slideToShow={3}
          ssr
          showDots={false}
          showArrows={false}
          autoPlay={true}
          arrows={false}
          margin={16}
          width={false}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item">

          {/* Single Product */}
          <div className="classdemo">
            <div id="product-4" className="single-product">
              <div className="part-1">
                <img src={storyimg1}></img>
                <p className="fw-bold">Back to the 00’s</p>
              </div>
            </div>
          </div>

          {/* Single Product */}
          <div className="classdemo">
            <div id="product-4" className="single-product">
              <div className="part-1">
                <img src={storyimg1}></img>
                <p className="fw-bold">Back to the 00’s</p>
              </div>
            
            </div>
          </div>

          {/* Single Product */}
          <div className="classdemo">
            <div id="product-4" className="single-product">
              <div className="part-1">
                <img src={storyimg1}></img>
                <p className="fw-bold">Back to the 00’s</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default StoriesHome