import React from 'react'
import './StudentProfilePage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import StudentProfilePageHeader from './Main-Parts/Headers/StudentProfilePageHeader'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const StudentProfilePage = () => {
    return (<React.Fragment>
        <Navbar />
        <StudentProfilePageHeader />
        <div class="d-flex flex-column mb-3 align-items-center">
            <div class="p-2 m-2 w-100 bg-designed-content">
                <div class="d-flex justify-content-between">
                    <div className="p-0">
                        <h5>
                            <span className='mx-1'>
                                <MDBIcon fas icon="user-friends" color='success' />
                            </span>
                            University Bookmarks
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
                        <li class="list-group-item">University 1</li>
                        <li class="list-group-item">University 2</li>
                        <li class="list-group-item">University 3</li>
                    </ul>
            </div>
            <div class="p-2 m-2 w-100 bg-designed-content">
                <div class="d-flex justify-content-between">
                    <div className="p-0">
                        <h5>
                            <span className='mx-1'>
                                <MDBIcon fas icon="book-open" color='success' />
                            </span>
                            Professor Bookmarks
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
                <div class="d-flex flex-column mb-3 w-100 bg-white rounded ">
                <ul class="list-group">
                        <li class="list-group-item">Professor 1</li>
                        <li class="list-group-item">Professor 2</li>
                        <li class="list-group-item">Professor 3</li>
                    </ul>
                </div>
            </div>
            <div class="p-2 m-2 w-100 bg-designed-content">
                <div class="d-flex justify-content-between">
                    <div className="p-0">
                        <h5>
                            <span className='mx-1'>
                                <MDBIcon fas icon="university" color='success' />
                            </span>
                            Course Bookmarks
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
                <div class="d-flex flex-column mb-3 w-100 bg-white rounded ">
                <ul class="list-group">
                        <li class="list-group-item">Course 1</li>
                        <li class="list-group-item">Course 2</li>
                        <li class="list-group-item">Course 3</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>);
}

export default StudentProfilePage;