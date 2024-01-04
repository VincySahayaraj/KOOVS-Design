import React from 'react';
import { Container, } from 'react-bootstrap'
import './topbrandshome.css'

function topbrandshome() {
    return (
        <>
        {/* <div className="topbrands">
            <Container fluid>
                <div className="text-top">
                    <span>Top brands</span>
                    <u >View all</u>
                </div>
                <div className="align-text">
                    <p className='brand-flex'>361 Degree,AMON,
                    </p>
                    <p className='brand-flex'>ATTIC SALT, Blue Saint, Bollywoo, DIWAAH, Freakins, Good Stuff, KOOVS, LC Waikiki, New Look, Oxolloxo, ONE/ZERO BY KOOVS, Peak.
                    </p>
                </div>

            </Container>
        </div> */}


<section className="top_brands pb-5">
            <div className="container-fluid">
                <div className="col-12 d-flex justify-content-between py-4">
                    <div className="">Top Brands</div>
                    <div><u>View All</u></div>
                </div>
            </div>
            <div className="container">
                <div className="top-brand-content py-0 py-lg-5">
                    361 Degree, AMON, 
                    ATTIC SALT, Blue Saint, Bollywoo, DIWAAH, Freakins, Good Stuff, KOOVS, LC Waikiki, New Look, Oxolloxo, ONE / ZERO BY KOOVS, Peak. 
                </div>
            </div>
        </section>
        </>


    )
}

export default topbrandshome