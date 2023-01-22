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
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div className="modal-content bg-designed-modal">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Course</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Name" aria-label="Name" described="basic-addon1" />
                            </div>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Content (Comma Separated)" aria-label="Content (Comma Separated)" described="basic-addon2" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="requirement" placeholder="Requirements" aria-label="Requirements" described="basic-addon3" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">Description</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div class="input-group mb-3">
                            <input type="file" multiple name="files[]" class="form-control" id="ResourceUpload" described="resource-upload" aria-label="Upload"/>
                        </div>
                        </div>
                       
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                <button type="button" class="btn shadow-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                                    <span>
                                        <h5>4.5<MDBIcon fas icon="star" color='warning' className='m-1' /></h5>
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