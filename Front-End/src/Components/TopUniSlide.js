import React from 'react'
import './TopUniSlide.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import logo from '../Assets/logo-black.png'
import background from '../Assets/slider-bg.jpg'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

const TopUniSlide = () => {
    return (

        <div class="row w-100">
            <div class="col-5 mx-5 mt-1 mb-1">  <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100 '
                    itemId={1}
                    src={background}
                    alt='...'
                >
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className=' rounded-circle mx-auto d-block'></img>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block '
                    itemId={2}
                    src={background}
                    alt='...'
                >
                        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className=' rounded-circle mx-auto d-block'></img>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 '
                    itemId={3}
                    src={background}
                    alt='...'
                >
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className=' rounded-circle mx-auto d-block'></img>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel></div>
            <div class="col-5 mx-5 mt-1 mb-1"><MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100  d-block'
                    itemId={1}
                    src={background}
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={background}
                    alt='...'
                >
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='w-25 rounded-circle'></img>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={background}
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel></div>
        </div>
    );
}

export default TopUniSlide;