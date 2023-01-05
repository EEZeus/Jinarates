import React from 'react'
import './HomePage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import TopItemsSlide from './TopItemsSlide'
const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div>
            <div className="container-fluid mx-0 px-0 main-bg text-center ">
                <div class="container text-center">
                    <div class="row row-cols-1 pt-4 pb-4">
                        <div class="col fs-3 ">We Help You To Find</div>
                        <div class="col fs-1 "><strong>The Best</strong></div>
                    </div>
                </div>
            </div>
            <TopItemsSlide></TopItemsSlide>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default HomePage;