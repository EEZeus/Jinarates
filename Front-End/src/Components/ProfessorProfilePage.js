import React from 'react'
import './ProfessorProfilePage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import ProfessorProfilePageHeader from './Main-Parts/Headers/ProfessorProfilePageHeader'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const ProfessorProfilePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ProfessorProfilePageHeader />
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
                                <button type="button" class="btn shadow-0 rounded-circle">
                                    <MDBIcon far icon="edit" color='dark' />
                                </button>
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
                        <span className="progress mt-1 ml-0 pl-0 w-100  ">
                            <div class="progress-bar w-75 bg-warning bg-gradient" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <span className='p-5  text-dark'></span>
                            </div>
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
                                    <MDBIcon fas icon="university" color='success' />
                                </span>
                               Education
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
                                Level
                            </h6>
                        </div>
                        <div className="p-0">
                            <h6 className='text-dark'>
                                Date
                            </h6>
                        </div>
                        <div class="p-0">
                                <button type="button" class="btn shadow-0 rounded-circle">
                                    <MDBIcon far icon="edit" color='dark' />
                                </button>
                        </div>
                        </div>

                        </div>
                        <div class="p-2">
                        <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h6 className='text-dark'>
                                Major
                            </h6>
                        </div>
                        <div className="p-0">
                            <h6 className='text-dark'>
                                Organization
                            </h6>
                        </div>
                        <div class="p-0">
                        
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

export default ProfessorProfilePage;