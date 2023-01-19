import React from 'react'
import './SearchPage.css'
import Navbar from './Main-Parts/NavBar'
import Footer from './Main-Parts/Footer'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const SearchPage = () => {
    return <React.Fragment>
        <Navbar />

        <div>
            <div className="container-fluid mx-0 px-0 main-bg text-center ">
                <div class="container text-center">
                    <div class="row row-cols-1 pt-4 pb-4">
                        <div class="col fs-3 ">We Help You To Find</div>
                        <div class="col fs-1 "><strong>The Best</strong></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center m-2 p-2">
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="input-group w-100">
                        <div class="form-outline">
                            <input id="search-input" type="search" class="form-control rounded bg-designed-search" />
                            <label class="form-label" for="form1">Search</label>
                        </div>
                        <button id="search-button" type="button" class="btn btn-dark">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="col-3 ">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btn-university" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-university">University</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btn-professor" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-professor">Professor</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btn-course" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-course">Course</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="container min-vh-75 mb-5 ">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Item 1</div>
                            Content
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Item 2</div>
                        Content
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Item 3</div>
                        Content
                    </div>
                </li>
            </ol>
        </div>


        <Footer />
    </React.Fragment>
}

export default SearchPage;