import React from 'react'
import './CoursePage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import CoursePageHeader from './Main-Parts/Headers/CoursePageHeader'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const CoursePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <CoursePageHeader />
            <div class="d-flex flex-column mb-3 align-items-center">
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="info-circle" color='success' />
                                </span>
                                Course Content
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
                        <li class="list-group-item">Content 1</li>
                        <li class="list-group-item">Content 2</li>
                        <li class="list-group-item">Content 3</li>
                    </ul>
                </div>
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="exclamation-triangle" color='success' />
                                </span>
                                Requirements
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
                        <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 1</li>
                        <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 2</li>
                        <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 3</li>
                    </ul>
                </div>
                <div class="p-2 m-2 w-100 bg-designed-content">
                    <div class="d-flex justify-content-between">
                        <div className="p-0">
                            <h5>
                                <span className='mx-1'>
                                    <MDBIcon fas icon="book-open" color='success' />
                                </span>
                                Resources
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
                    <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 1</li>
                        <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 2</li>
                        <li class="list-group-item"><MDBIcon fas icon="check" className="px-1" />Item 3</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default CoursePage;