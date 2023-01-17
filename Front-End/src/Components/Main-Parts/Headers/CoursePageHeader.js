import React from 'react'
import './CoursePageHeader.css'
import logo from '../../../Assets/logo-black.png'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const CoursePageHeader = () => {
    return (
        <div class="container-md d-flex flex bg-designed-header mw-100 mx-0 px-0 mb-1  position-relative">
            <div class="container text-left mx-0 px-0  text-white w-100 ">
                <div class="row ">

                    <div class=" col-2">
                        <img className=" bg-white rounded-circle w-100 h-100  " alt="avatar" src={logo} />
                    </div>

                    <div class="col mt-4 pl-0">
                        <h5 className=' ml-0 pl-0'>Subject: <span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>Description: <span className='fs-6 text-dark'>Something</span></h5>
                        <span>
                            <h5>4.5<MDBIcon fas icon="star" color='warning' className='m-1' /></h5>
                        </span>
                    </div>

                    <div class="col  mt-4 pl-0">
                        <h5 className=' ml-0 pl-0'>Attend: <span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>Tutor: <span className='fs-6 text-dark'>Something</span></h5>
                        <button type="button" class="btn btn-warning bg-gradient btn-sm mt-2">Enroll</button>
                    </div>

                    <div class="col mt-4 ml-4 pl-4">
                        <button type="button" className="position-absolute end-0 top-0 m-1 btn btn-dark bg-gradient btn-sm">Edit</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CoursePageHeader;