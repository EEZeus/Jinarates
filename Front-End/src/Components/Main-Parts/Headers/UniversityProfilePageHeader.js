import React from 'react'
import './UniversityProfilePageHeader.css'
import logo from '../../../Assets/logo-black.png'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const UniversityPageHeader = () => {
    return (
        <div class="container-md d-flex flex bg-success mw-100 mx-0 px-0  position-relative">
            <div class="container text-left mx-0 px-0 text-white w-100 ">
                <div class="row ">

                    <div class=" col-2">
                        <img className=" bg-white rounded-circle w-100 h-100  " alt="avatar" src={logo} />
                    </div>

                    <div class="col mt-4 pl-0">
                        <h5 className=' ml-0 pl-0'>Name:<span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>
                        Address:<span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>Rank: <span className='fs-6 text-dark'>Something</span></h5>
                    </div>

                    <div class="col  mt-4 pl-0">
                    <h5 className=' ml-0 pl-0'>Website: <span className='fs-6 text-dark'>Something</span></h5>

                    </div>

                    <div class="col mt-4 ml-4 pl-4">
                        <button type="button" className="position-absolute end-0 top-0 m-1 btn btn-dark bg-gradient btn-sm">Edit</button>
                        <div className="position-absolute bottom-0 end-0">
                        <MDBBtn className='bg-gradient m-1' size='sm' tag='a' color='dark' >
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>
                            <MDBBtn className='bg-gradient m-1' size='sm' tag='b' color='dark' >
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UniversityPageHeader;