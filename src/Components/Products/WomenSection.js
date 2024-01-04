import React from 'react';

import "./styleforbothsection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import womenimg1 from '../../assets/images/IMG_4249.png'
import womenimg2 from '../../assets/images/IMG_4250.png'
import womenimg3 from '../../assets/images/IMG_4250\ \(1\).png'

function WomenSection() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      arrows: false,
      partialVisibilityGutter: 30,
     
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 3,
      partialVisibilityGutter: 60,
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
      partialVisibilityGutter: 140,
     
    }
  };
  return (
    <section className="section-products">

      <div className="viewall">
        <span>Women</span>
        <u>View all</u>
      </div>

      <div className="row women">

        {/* Single Product */}
        <Carousel responsive={responsive}
          items={5}
          smartSpeed={2500}
          autoplaySpeed={3000}
          slidesToSlide={1}
          ssr
          showDots={false}
          arrows={false}
          autoPlay={true}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"   >

          {/* Single Product */}
          <div className="classdemo">
            <div id="product-1" className="single-product">
              <div className="part-1">
                <img src={womenimg1}></img>
                <img src={womenimg2}  alt="Koovs rear product image" className='rear-img' />
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
            <div id="product-2" className="single-product">
              <div className="part-1">
                <img src={womenimg2}></img>
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
            <div id="product-3" className="single-product">
              <div className="part-1">
                <img src={womenimg3}></img>
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
            <div id="product-1" className="single-product">
              <div className="part-1">
                <img src={womenimg1}></img>
                <img src={womenimg2}  alt="Koovs rear product image" className='rear-img' />
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
            <div id="product-2" className="single-product">
              <div className="part-1">
                <img src={womenimg2}></img> 
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

export default WomenSection