import React from 'react'
import './TopItemsSlide.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import logo from '../Assets/logo-black.png'
import background from '../Assets/slider-bg.jpg'


const TopItemsSlide = () => {
    return (

        <div class="d-flex justify-content-center flex-row">
           <div class="p-2">
                <div id="top-universities-slide" class="carousel carousel-dark bg-slide-designed text-dark bg-gradient rounded" data-bs-ride="false">
                    <div class="p-1">
                        <h5>Top universities</h5>
                    </div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#top-universities-slide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#top-universities-slide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#top-universities-slide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>University Name 1</h5>

                                </div>
                                <div class="p-2">
                                    <p>University overall description</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>University Name 2</h5>

                                </div>
                                <div class="p-2">
                                    <p>University overall description</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>University Name 3</h5>

                                </div>
                                <div class="p-2">
                                    <p>University overall description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#top-universities-slide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#top-universities-slide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="p-2">
                <div id="top-professors-slide" class="carousel carousel-dark bg-slide-designed text-dark bg-gradient rounded" data-bs-ride="false">
                    <div class="p-1">
                        <h5>Top Professors</h5>
                    </div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#top-professors-slide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#top-professors-slide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#top-professors-slide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>Professors Name 1</h5>

                                </div>
                                <div class="p-2">
                                    <p>Professors overall description</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>Professors Name 2</h5>

                                </div>
                                <div class="p-2">
                                    <p>Professors overall description</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-center flex-column mb-3">
                                <div class="p-2">
                                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='rounded w-100 shadow-4 img-thumbnail' />
                                </div>
                                <div class="p-2">
                                    <h5>Professors Name 3</h5>

                                </div>
                                <div class="p-2">
                                    <p>Professors overall description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#top-professors-slide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#top-professors-slide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopItemsSlide;