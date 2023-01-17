import React from 'react'
import './UniversityProfilePage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import UniversityProfilePageHeader from './Main-Parts/Headers/UniversityProfilePageHeader'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const UniversityProfilePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <UniversityProfilePageHeader />
            <div class="d-flex flex-column mb-3 align-items-center">
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="user-friends" color='success' />
                                </span>
                                Biography
                            </h5>

                        </div>
                        <div class="p-0">
                            <span>
                                <button type="button" class="btn shadow-0 rounded-circle">
                                    <MDBIcon far icon="edit" color='success' />
                                </button>
                            </span>
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">Description</li>
                    </ul>
                </div>
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="book-open" color='success' />
                                </span>
                                Course List
                            </h5>

                        </div>
                        <div class="p-0">
                            <span>
                                <button type="button" class="btn shadow-0 rounded-circle">
                                    <MDBIcon far icon="plus" color='success' />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-3 w-100 bg-white rounded ">
                        <div class="p-2">
                            <div class="d-flex justify-content-between">
                                <div className="p-0">
                                    <h6 className='text-dark'>
                                        Name
                                    </h6>
                                </div>
                                <div class="p-0">
                                   
                                </div>
                            </div>

                        </div>
                        <div class="p-2">
                            <div class="d-flex justify-content-between">
                                <div className="p-0">
                                    <h6 className='text-dark'>
                                        Description
                                    </h6>
                                </div>
                                <div class="p-0">
                                    <span>
                                        <h5>4.5<MDBIcon fas icon="star" color='warning'className='m-1' /></h5>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="user" color='success' />
                                </span>
                                Professors List
                            </h5>

                        </div>
                        <div class="p-0">
                            <span>
                                <button type="button" class="btn shadow-0 rounded-circle">
                                    <MDBIcon far icon="plus" color='success' />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-3 w-100 bg-white rounded ">
                        <div class="p-2">
                            <div class="d-flex justify-content-between">
                                <div className="p-0">
                                    <h6 className='text-dark'>
                                        Name
                                    </h6>
                                </div>
                                <div className="p-0">
                                    <h6 className='text-dark'>
                                        Specialty
                                    </h6>
                                </div>
                                <div class="p-0">
                                    
                                </div>
                            </div>

                        </div>
                        <div class="p-2">
                        <div class="d-flex justify-content-between">
                                <div className="p-0">
                                    <h6 className='text-dark'>
                                        Email
                                    </h6>
                                </div>
                                <div class="p-0">
                                    <span>
                                        <h5>4.5<MDBIcon fas icon="star" color='warning'className='m-1' /></h5>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default UniversityProfilePage;